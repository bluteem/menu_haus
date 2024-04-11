import express from "express";
import Order from "../models/order.js";

const router = express.Router();

// Route: GET /api/orders
// Description: Get all orders info
router.get("/", async (req, res) => {
	try {
		const orderData = await Order.find();
		res.status(200).json({ orderData });
	} catch (error) {
		console.error("Error fetching orders:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: GET /api/order/:id
// Description: Get an order info by ID
router.get("/:id", async (req, res) => {
	try {
		const orderData = await Order.findById(req.params.id);
		if (!orderData) {
			return res.status(404).json({ error: "Order info not found" });
		}
		res.status(200).json({ orderData });
	} catch (error) {
		console.error("Error fetching order info:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: POST /api/orders
// Description: Add a new order
router.post("/", async (req, res) => {
	try {
		const { items, table } = req.body;
		const orderData = new Order({
			items,
			table,
		});
		await orderData.save();
		res.status(201).json({ message: "Order created successfully", orderData });
	} catch (error) {
		console.error("Error creating the order:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: PUT /api/orders/:id
// Description: Update an order by ID
router.put("/:id", async (req, res) => {
	try {
		const { items, table } = req.body;
		const updatedOrderData = await Order.findByIdAndUpdate(
			req.params.id,
			{
				items,
				table,
			},
			{ new: true }
		); // { new: true } returns the updated document
		if (!updatedOrderData) {
			return res.status(404).json({ error: "Order not found" });
		}
		res.json({ message: "Order updated successfully", orderData: updatedOrderData });
	} catch (error) {
		console.error("Error updating order:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: DELETE /api/orders/:id
// Description: Delete an order by ID
router.delete("/:id", async (req, res) => {
	try {
		const orderData = await Order.findByIdAndDelete(req.params.id);
		if (!orderData) {
			return res.status(404).json({ error: "Order not found" });
		}
		res.json({ message: "Order deleted successfully" });
	} catch (error) {
		console.error("Error deleting the order:", error);
		res.status(500).json({ error: "Server error" });
	}
});

export default router;
