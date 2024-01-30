import express from "express";
import MenuItem from "../models/menuItem.js";

const menuItemRoutes = express.Router();

const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find({});
        res.json({
            menuItems,
            pagination: {} // Add pagination logic if required
        });
    } catch (error) {
        console.error("Error fetching menu items:", error);
        res.status(500).json({ error: "Server error" });
    }
};

menuItemRoutes.route("/").get(getMenuItems);

export default menuItemRoutes;
