import express from 'express';
import mongoose from 'mongoose';
import MenuItem from '../models/menuItem.js';

const router = express.Router();

// Route: GET /api/menuitems
// Description: Get all menu items with their corresponding category information
router.get('/', async (req, res) => {
    try {
        const menuItemData = await MenuItem.aggregate([
            {
                $lookup: {
                    from: 'menucategories',
                    localField: 'categoryId',
                    foreignField: '_id',
                    as: 'categoryInfo'
                }
            }
        ]);
        res.status(200).json({ menuItemData });
    } catch (error) {
        console.error('Error fetching menu items with categories:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: GET /api/menuitems/:id
// Description: Get a menu item by ID
router.get('/:id', async (req, res) => {
    try {
        const menuItemId = req.params.id;

        // Find the menu item by its ID using findOne
        const menuItemData = await MenuItem.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(menuItemId) }
            },
            {
                $lookup: {
                    from: 'menucategories',
                    localField: 'categoryId',
                    foreignField: '_id',
                    as: 'categoryInfo'
                }
            }
        ]);

        if (!menuItemData || menuItemData.length === 0) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.status(200).json({ menuItemData: menuItemData[0] });
    } catch (error) {
        console.error('Error fetching menu item with category:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: POST /api/menuitems
// Description: Add a new menu item
router.post('/', async (req, res) => {
    try {
        const { name, images, description, price, categoryId } = req.body;
        const menuItemData = new MenuItem({
            name,
            images,
            description,
            price,
            categoryId,
        });
        await menuItemData.save();
        res.status(201).json({ message: 'Menu item created successfully', menuItemData });
    } catch (error) {
        console.error('Error creating menu item:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: PUT /api/menuitems/:id
// Description: Update a menu item by ID
router.put('/:id', async (req, res) => {
    try {
        const { name, images, description, price, categoryId } = req.body;
        const updatedMenuItemData = await MenuItem.findByIdAndUpdate(req.params.id, {
            name,
            images,
            description,
            price,
            categoryId,
        }, { new: true }); // { new: true } returns the updated document
        if (!updatedMenuItemData) {
            return res.status(404).json({ error: 'Menu item not found' });
        }
        res.json({ message: 'Menu item updated successfully', menuItemData: updatedMenuItemData });
    } catch (error) {
        console.error('Error updating menu item:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: DELETE /api/menuitems/:id
// Description: Delete a menu item by ID
router.delete('/:id', async (req, res) => {
    try {
        const menuItemData = await MenuItem.findByIdAndDelete(req.params.id);
        if (!menuItemData) {
            return res.status(404).json({ error: 'Menu item not found' });
        }
        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu item:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
