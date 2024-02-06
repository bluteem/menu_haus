import express from "express";
import MenuCategory from "../models/menuCategory.js";;

const menuCategoryRoutes = express.Router();

const getMenuCategories = async (req, res) => {
    try {
        const menuCategories = await MenuCategory.find({});
        res.json({
            menuCategories,
            pagination: {} // Add pagination logic if required
        });
    } catch (error) {
        console.error("Error fetching menu categories:", error);
        res.status(500).json({ error: "Server error" });
    }
};

menuCategoryRoutes.route("/").get(getMenuCategories);

export default menuCategoryRoutes;
