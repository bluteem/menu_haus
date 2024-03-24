// Import required modules
import express from "express"; // Express.js framework for Node.js
import mongoose from "mongoose"; // Load mongoose for database connection
import cookieParser from "cookie-parser";
import cors from "cors"; // Cross-Origin Resource Sharing middleware for Express.js
import multer from "multer"; // Middleware for handling file uploads
import dotenv from "dotenv"; // Load environment variables from a .env file
import nodemailer from "nodemailer"; // Load Nodemailer

import authController, { authMiddleware } from "./controllers/authController.js";
import tableController from "./controllers/tableController.js";
import menuCategoryController from "./controllers/menuCategoryController.js";
import menuItemController from "./controllers/menuItemController.js";
import userController from "./controllers/userController.js";
import businessController from "./controllers/businessController.js";

// Load environment variables from .env file
dotenv.config();

// Database settings
const connectToDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDB Connected");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error.message);
		process.exit(1);
	}
};

// Connect to the MongoDB database
connectToDatabase();

// Create an instance of Express
const app = express();

// Set the port number from environment variable or default to 5000
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies of requests
app.use(express.json());

// Middleware to parse incoming request cookies
app.use(cookieParser());

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(
	cors({
		origin: "http://localhost:5173", // Replace this with your client's origin
		credentials: true,
	})
);

// Set up Multer storage for handling multiple files
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./frontend/public/uploads"); // Destination directory where files will be saved
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // Adding random suffix to avoid filename conflicts
		cb(null, uniqueSuffix + "-" + file.originalname); // File naming strategy
	},
});

// Initialize Multer with the defined storage configuration
const upload = multer({ storage: storage });

// Define route to handle file uploads
app.post("/api/upload", upload.array("files"), (req, res) => {
	// Handle file upload here
	const fileNames = req.files.map((file) => file.filename); // Extract file names from uploaded files
	res.status(200).json({ fileNames: fileNames }); // Respond with JSON containing uploaded file names
});

// Use the auth controller
app.use("/auth", authController);

// Protected route
app.get("/auth/verify-token", authMiddleware, (req, res) => {
	// Access user information from req.user
	res.status(200).json({ message: "Token is valid" });
});

// Use other controllers
app.use("/api/tables", tableController);
app.use("/api/menuitems", menuItemController);
app.use("/api/menucategories", menuCategoryController);
app.use("/api/users", userController);
app.use("/api/businesses", businessController);

// Default route to indicate server is running
app.get("/", (req, res) => {
	res.send("Server is running...");
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "Internal server error" });
});

// Start the server and listen on the specified port
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
