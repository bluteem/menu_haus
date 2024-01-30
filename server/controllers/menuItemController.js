// menuItemController.js
import express from 'express';
import MenuItem from '../models/menuItem.js';

const router = express.Router();

// Route: GET /api/menuitems
// Description: Get all menu items
router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json({ menuItems });
    } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: GET /api/menuitems/:id
// Description: Get a menu item by ID
router.get('/:id', async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);
        if (!menuItem) {
            return res.status(404).json({ error: 'Menu item not found' });
        }
        res.status(200).json({ menuItem });
    } catch (error) {
        console.error('Error fetching menu item:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

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

// Route: PUT /api/menuitems/:id
// Description: Update a menu item by ID
router.put('/:id', async (req, res) => {
    try {
        const { name, images, category, description, price } = req.body;
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id, {
            name,
            images,
            category,
            description,
            price
        }, { new: true }); // { new: true } returns the updated document
        if (!updatedMenuItem) {
            return res.status(404).json({ error: 'Menu item not found' });
        }
        res.json({ message: 'Menu item updated successfully', menuItem: updatedMenuItem });
    } catch (error) {
        console.error('Error updating menu item:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: DELETE /api/menuitems/:id
// Description: Delete a menu item by ID
router.delete('/:id', async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
        if (!menuItem) {
            return res.status(404).json({ error: 'Menu item not found' });
        }
        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu item:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
