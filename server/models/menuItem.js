import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		images: {
			type: [String],
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		isDeleted: {
			type: Boolean,
			default: false, // Set the default value to false
		},
		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "MenuCategory", // Reference to the Category model
			required: true,
		},
	},
	{ collection: "menuitems" }
); // Specify your collection name here

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;
