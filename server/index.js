// Import required modules
import express from 'express'; // Express.js framework for Node.js
import dotenv from 'dotenv'; // Load environment variables from a .env file
import connectToDatabase from './db.js'; // Custom module to connect to the database
import cors from 'cors'; // Cross-Origin Resource Sharing middleware for Express.js
import multer from 'multer'; // Middleware for handling file uploads
import menuItemRoutes from './routes/menuItemRoutes.js'; // Routes for menu items
import menuItemController from './controllers/menuItemController.js'; // Controller for menu items
import menuCategoryRoutes from './routes/menuCategoryRoutes.js'; // Routes for menu items
import menuCategoryController from './controllers/menuCategoryController.js'; // Controller for menu items
import UserRoutes from './routes/userRoutes.js'; // Routes for menu items
import userController from './controllers/userController.js'; // Controller for menu items

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
    cb(null, './frontend/public/images'); // Destination directory where files will be saved
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // Adding random suffix to avoid filename conflicts
    cb(null, uniqueSuffix + '-' + file.originalname); // File naming strategy
  }
});

// Initialize Multer with the defined storage configuration
const upload = multer({ storage: storage });

// Define route to handle file uploads
app.post('/api/upload', upload.array('files'), (req, res) => {
  // Handle file upload here
  const fileNames = req.files.map(file => file.filename); // Extract file names from uploaded files
  res.status(200).json({ fileNames: fileNames }); // Respond with JSON containing uploaded file names
});

// Use existing menu item routes
app.use('/api/menuitems', menuItemRoutes);

// Use the menu item controller
app.use('/api/menuitems', menuItemController);

// Use existing menu category routes
app.use('/api/menucategories', menuCategoryRoutes);

// Use the menu category controller
app.use('/api/menucategories', menuCategoryController);

// Use existing menu category routes
app.use('/api/users', userRoutes);

// Use the menu category controller
app.use('/api/users', userController);


// Default route to indicate API is running
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
