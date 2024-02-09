import express from 'express';
import MenuItem from '../models/menuItem.js';
import mongoose from 'mongoose';

const router = express.Router();

// Route: GET /api/menuitems
// Description: Get all menu items
/* router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find().populate('category');
        res.status(200).json({ menuItems });
    } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).json({ error: 'Server error' });
    }
}); */


// Route: GET /api/menuitems
// Description: Get all menu items with their corresponding category information
router.get('/', async (req, res) => {
    try {
        const menuItemsWithCategories = await MenuItem.aggregate([
            {
                $lookup: {
                    from: 'menucategories',
                    localField: 'categoryId',
                    foreignField: '_id',
                    as: 'categoryInfo'
                }
            }
        ]);
        res.status(200).json({ menuItemsWithCategories });
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
        const menuItemWithCategory = await MenuItem.aggregate([
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

        if (!menuItemWithCategory || menuItemWithCategory.length === 0) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.status(200).json({ menuItemWithCategory: menuItemWithCategory[0] });
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
        const menuItem = new MenuItem({
            name,
            images,
            description,
            price,
            categoryId,
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
        const { name, images, description, price, categoryId } = req.body;
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id, {
            name,
            images,
            description,
            price,
            categoryId,
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
