// index.js

import express from 'express';
import dotenv from 'dotenv';
import connectToDatabase from './db.js';
import cors from 'cors';
import menuItemRoutes from './routes/menuItemRoutes.js';
import menuItemController from './controllers/menuItemController.js';

dotenv.config();
connectToDatabase();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Use existing menu item routes
app.use('/api/menuitems', menuItemRoutes);

// Use the new menu item controller
app.use('/api/menuitems', menuItemController);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
