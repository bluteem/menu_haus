import express from "express";
import menuItem from "../models/menuitem";

const menuItemRoutes = express.Router();

const getMenuItems = async (req, res) => {
    const menuItems = await menuItem.find({});

    res.json({
        menuItems,
        pagination: {},
    });
};

menuItemRoutes.route("/").get(getMenuItems);

export default menuItemRoutes;