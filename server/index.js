// index.js

import express from 'express';
import dotenv from 'dotenv';
import connectToDatabase from './db.js';
import cors from 'cors';
import multer from 'multer';
import menuItemRoutes from './routes/menuItemRoutes.js';
import menuItemController from './controllers/menuItemController.js';

dotenv.config();
connectToDatabase();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


// Set up Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './frontend/public/images'); // Destination directory where files will be saved
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // File naming strategy (e.g., appending timestamp to filename)
    }
});

const upload = multer({ storage: storage });

// Define route to handle file uploads
app.post('/api/upload', upload.single('file'), (req, res) => {
    // Handle file upload here
    res.status(200).json({ message: 'File uploaded successfully' });
  });
  

// Use existing menu item routes
app.use('/api/menuitems', menuItemRoutes);

// Use the menu item controller
app.use('/api/menuitems', menuItemController);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
