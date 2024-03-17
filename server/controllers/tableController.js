import express from "express";
import Table from "../models/table.js";

const router = express.Router();

// Route: GET /api/tables
// Description: Get all menu categories
router.get("/", async (req, res) => {
	try {
		const tableData = await Table.find();
		res.status(200).json({ tableData });
	} catch (error) {
		console.error("Error fetching tables:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: GET /api/tables/:id
// Description: Get a user by ID
router.get("/:id", async (req, res) => {
	try {
		const tableData = await Table.findById(req.params.id);
		if (!tableData) {
			return res.status(404).json({ error: "Table not found" });
		}
		res.status(200).json({ tableData });
	} catch (error) {
		console.error("Error fetching user:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: POST /api/tables
// Description: Add a new user
router.post("/", async (req, res) => {
	try {
		const { tableName, tableNumber, qrCode, status } = req.body;
		const tableData = new Table({
			tableName,
			tableNumber,
			qrCode,
			status,
		});
		await tableData.save();
		res.status(201).json({ message: "Table created successfully", tableData });
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: PUT /api/tables/:id
// Description: Update a user by ID
router.put("/:id", async (req, res) => {
	try {
		const { tableName, tableNumber, qrCode, status } = req.body;
		const updatedTableData = await Table.findByIdAndUpdate(
			req.params.id,
			{
				tableName,
				tableNumber,
				qrCode,
				status,
			},
			{ new: true }
		); // { new: true } returns the updated document
		if (!updatedTableData) {
			return res.status(404).json({ error: "Table not found" });
		}
		res.json({ message: "Table updated successfully", tableData: updatedTableData });
	} catch (error) {
		console.error("Error updating user:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: DELETE /api/menucategories/:id
// Description: Delete a menu item by ID
router.delete("/:id", async (req, res) => {
	try {
		const tableData = await Table.findByIdAndDelete(req.params.id);
		if (!tableData) {
			return res.status(404).json({ error: "Table not found" });
		}
		res.json({ message: "Table deleted successfully" });
	} catch (error) {
		console.error("Error deleting user:", error);
		res.status(500).json({ error: "Server error" });
	}
});

export default router;
