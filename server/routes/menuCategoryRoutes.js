import express from "express";
import MenuCategory from "../models/menuCategory.js";;

const router = express.Router();

// Route: GET /api/menuitems
router.get("/", getMenuCategories);

async function getMenuCategories(req, res) {
    try {
        const menuCategories = await MenuCategory.find({});
        res.json({
            menuCategories
        });
    } catch (error) {
        console.error("Error fetching menu categories:", error);
        res.status(500).json({ error: "Server error" });
    }
}

export default router;
