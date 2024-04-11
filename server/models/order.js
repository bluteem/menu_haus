import mongoose from "mongoose";

// Define the schema for the order
const OrderSchema = new mongoose.Schema(
	{
		// Customer information
		customerName: {
			type: String,
			required: true,
		},
		customerEmail: {
			type: String,
			required: true,
			lowercase: true,
		},
		customerPhone: {
			type: String,
			required: true,
		},
		// Order details
		items: [
			{
				name: {
					type: String,
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
					min: 1,
				},
				price: {
					type: Number,
					required: true,
					min: 0,
				},
			},
		],
		// Order status
		status: {
			type: String,
			enum: ["Pending", "Confirmed", "Preparing", "Ready", "Delivered"],
			default: "Pending",
		},
		// Timestamps
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "orders" }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
