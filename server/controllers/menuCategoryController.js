// menuItemController.js
import express from 'express';
import MenuItem from '../models/menuCategory.js';

const router = express.Router();

// Route: GET /api/menuitems
// Description: Get all menu items
router.get('/', async (req, res) => {
    try {
        const menuCategories = await MenuCategory.find();
        res.status(200).json({ menuCategories });
    } catch (error) {
        console.error('Error fetching menu categories:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: GET /api/menuitems/:id
// Description: Get a menu item by ID
router.get('/:id', async (req, res) => {
    try {
        const menuCategory = await MenuCategory.findById(req.params.id);
        if (!menuCategory) {
            return res.status(404).json({ error: 'Menu category not found' });
        }
        res.status(200).json({ menuItem });
    } catch (error) {
        console.error('Error fetching menu category:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: POST /api/menuitems
// Description: Add a new menu item
router.post('/', async (req, res) => {
    try {
        const { name, description } = req.body;
        const menuCategory = new MenuCategory({
            name,
            description
        });
        await menuCategory.save();
        res.status(201).json({ message: 'Menu category created successfully', menuCategory });
    } catch (error) {
        console.error('Error creating menu category:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: PUT /api/menuitems/:id
// Description: Update a menu item by ID
router.put('/:id', async (req, res) => {
    try {
        const { name, description } = req.body;
        const updatedMenuCategory = await MenuCategory.findByIdAndUpdate(req.params.id, {
            name,
            description
        }, { new: true }); // { new: true } returns the updated document
        if (!updatedMenuCategory) {
            return res.status(404).json({ error: 'Menu category not found' });
        }
        res.json({ message: 'Menu category updated successfully', menuCategory: updatedMenuCategory });
    } catch (error) {
        console.error('Error updating menu category:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: DELETE /api/menuitems/:id
// Description: Delete a menu item by ID
router.delete('/:id', async (req, res) => {
    try {
        const menuCategory = await MenuCategory.findByIdAndDelete(req.params.id);
        if (!menuCategory) {
            return res.status(404).json({ error: 'Menu category not found' });
        }
        res.json({ message: 'Menu category deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu category:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
