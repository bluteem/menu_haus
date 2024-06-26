import express from "express";
import multer from "multer"; // For handling multipart/form-data
import File from "../models/file.js";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const router = express.Router();

// Set up multer storage to define where to store uploaded files
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// Define the absolute path to the uploads folder
		const uploadFolderPath = path.join(__dirname, "./server/uploads");
		cb(null, uploadFolderPath);
	},
	filename: function (req, file, cb) {
		// Adding random suffix to avoid filename conflicts
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		// Define the filename of the uploaded file
		cb(null, uniqueSuffix + "-" + file.originalname);
	},
});

// Set up multer middleware
const upload = multer({ storage: storage });

// Controller function to upload file
const uploadFile = async (req, res) => {
	try {
		const { originalname, mimetype, filename: filePath } = req.file;

		// Get the file size
		const fileSize = req.file.size; // Assuming 'size' property is available on req.file

		// Save file details to database
		const file = new File({
			fileName: originalname,
			fileType: mimetype,
			filePath: filePath,
			fileSize,
		});
		await file.save();

		res.status(201).json({ message: "File uploaded successfully", file });
	} catch (error) {
		console.error("Error uploading file:", error);
		res.status(500).json({ error: "Failed to upload file" });
	}
};
// POST endpoint to upload a file
router.post("/upload", upload.single("file"), uploadFile);

// Route: GET /api/files
// Description: Get all files
router.get("/", async (req, res) => {
	try {
		const fileData = await File.find();
		res.status(200).json({ fileData });
	} catch (error) {
		console.error("Error fetching files:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Controller function to get file by ID
const getFileById = async (req, res) => {
	try {
		const fileId = req.params.id;
		const file = await File.findById(fileId);
		if (!file) {
			return res.status(404).json({ error: "File not found" });
		}

		// Stream file to client
		const fileStream = fs.createReadStream(path.join(__dirname, "./server/uploads", file.filePath));
		fileStream.pipe(res);
	} catch (error) {
		console.error("Error fetching file:", error);
		res.status(500).json({ error: "Failed to fetch file" });
	}
};
// GET endpoint to retrieve a file by ID
router.get("/:id", getFileById);

// Controller function to delete file by ID
const deleteFileById = async (req, res) => {
	try {
		const fileId = req.params.id;
		const file = await File.findByIdAndDelete(fileId);
		if (!file) {
			return res.status(404).json({ error: "File not found" });
		}

		// Delete file from disk
		fs.unlinkSync(path.join(__dirname, "./server/uploads", file.filePath));

		res.json({ message: "File deleted successfully" });
	} catch (error) {
		console.error("Error deleting file:", error);
		res.status(500).json({ error: "Failed to delete file" });
	}
};
// DELETE endpoint to delete a file by ID
router.delete("/:id", deleteFileById);

export default router;
