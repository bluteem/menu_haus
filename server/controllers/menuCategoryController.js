import express from "express";
import MenuCategory from "../models/menuCategory.js";

const router = express.Router();

// Route: GET /api/menucategories
// Description: Get all menu categories
router.get("/", async (req, res) => {
	try {
		const menuCategoryData = await MenuCategory.find();
		res.status(200).json({ menuCategoryData });
	} catch (error) {
		console.error("Error fetching menu categories:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: GET /api/menucategories/:id
// Description: Get a menu category by ID
router.get("/:id", async (req, res) => {
	try {
		const menuCategoryData = await MenuCategory.findById(req.params.id);
		if (!menuCategoryData) {
			return res.status(404).json({ error: "Menu category not found" });
		}
		res.status(200).json({ menuCategoryData });
	} catch (error) {
		console.error("Error fetching menu category:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: POST /api/menucategories
// Description: Add a new menu category
router.post("/", async (req, res) => {
	try {
		const { name, description } = req.body;
		const menuCategoryData = new MenuCategory({
			name,
			description,
		});
		await menuCategoryData.save();
		res.status(201).json({ message: "Menu category created successfully", menuCategoryData });
	} catch (error) {
		console.error("Error creating menu category:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: PUT /api/menucategories/:id
// Description: Update a menu category by ID
router.put("/:id", async (req, res) => {
	try {
		const { name, description } = req.body;
		const updatedMenuCategoryData = await MenuCategory.findByIdAndUpdate(
			req.params.id,
			{
				name,
				description,
			},
			{ new: true }
		); // { new: true } returns the updated document
		if (!updatedMenuCategoryData) {
			return res.status(404).json({ error: "Menu category not found" });
		}
		res.json({ message: "Menu category updated successfully", menuCategoryData: updatedMenuCategoryData });
	} catch (error) {
		console.error("Error updating menu category:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: DELETE /api/menucategories/:id
// Description: Delete a menu item by ID
router.delete("/:id", async (req, res) => {
	try {
		const menuCategoryData = await MenuCategory.findByIdAndDelete(req.params.id);
		if (!menuCategoryData) {
			return res.status(404).json({ error: "Menu category not found" });
		}
		res.json({ message: "Menu category deleted successfully" });
	} catch (error) {
		console.error("Error deleting menu category:", error);
		res.status(500).json({ error: "Server error" });
	}
});

export default router;
