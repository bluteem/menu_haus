// Import required modules
import express from "express"; // Express.js framework for Node.js
import dotenv from "dotenv"; // Load environment variables from a .env file
import connectToDatabase from "./db.js"; // Custom module to connect to the database
import cors from "cors"; // Cross-Origin Resource Sharing middleware for Express.js
import multer from "multer"; // Middleware for handling file uploads

import tableController from "./controllers/tableController.js";
import menuCategoryController from "./controllers/menuCategoryController.js";
import menuItemController from "./controllers/menuItemController.js";
import userController from "./controllers/userController.js";
import businessController from "./controllers/businessController.js";

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectToDatabase();

// Create an instance of Express
const app = express();

// Set the port number from environment variable or default to 5000
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies of requests
app.use(express.json());

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Set up Multer storage for handling multiple files
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./frontend/public/images"); // Destination directory where files will be saved
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

// Use the menu item controller
app.use("/api/tables", tableController);
// Use the menu item controller
app.use("/api/menuitems", menuItemController);
// Use the menu category controller
app.use("/api/menucategories", menuCategoryController);
// Use the menu category controller
app.use("/api/users", userController);
// Use the business controller
app.use("/api/businesses", businessController);
// Default route to indicate API is running
app.get("/", (req, res) => {
	res.send("API is running...");
});

// Start the server and listen on the specified port
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
