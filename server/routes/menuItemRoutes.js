import express from "express";
import MenuItem from "../models/menuItem.js";

const router = express.Router();

// Route: GET /api/menuitems
router.get("/", getMenuItems);

async function getMenuItems(req, res) {
    try {
        const menuItemsWithCategories = await MenuItem.aggregate([
            {
                $lookup: {
                    from: 'menucategories',
                    localField: 'category',
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
}

export default router;
