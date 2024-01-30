// menuItemController.js

import express from 'express';
import MenuItem from '../models/menuItem.js';

const router = express.Router();

// Route: POST /api/menuitems
// Description: Add a new menu item
router.post('/', async (req, res) => {
    try {
        const { name, images, category, description, price } = req.body;
        const menuItem = new MenuItem({
            name,
            images,
            category,
            description,
            price
        });
        await menuItem.save();
        res.status(201).json({ message: 'Menu item created successfully', menuItem });
    } catch (error) {
        console.error('Error creating menu item:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
