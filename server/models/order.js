import mongoose from "mongoose";

// Define the schema for the order
const OrderSchema = new mongoose.Schema(
	{
		// Order details
		items: [
			{
				menuItem: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "MenuItem", // Reference to the MenuItem model
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
					min: 1,
				},
				price: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "MenuItem", // Reference to the MenuItem model
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
		table: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Table",
			required: true,
		},
	},
	{ collection: "orders" }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
