import express from "express";
import MenuItem from "../models/menuItem.js"; // Changed to MenuItem

const menuItemRoutes = express.Router();

const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find({}); // Changed to MenuItem

        res.json({
            menuItems,
            pagination: {},
        });
    } catch (error) {
        console.error("Error fetching menu items:", error); // Added error handling
        res.status(500).json({ error: "Server error" });
    }
};

menuItemRoutes.route("/").get(getMenuItems);

export default menuItemRoutes;
