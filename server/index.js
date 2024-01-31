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


// handle file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/public/images'); // Destination folder for uploaded images
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original filename
    }
  });

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('images'), (req, res) => {
    try {
      res.status(201).json({ message: 'File uploaded successfully' });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'Failed to upload file' });
    }
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
