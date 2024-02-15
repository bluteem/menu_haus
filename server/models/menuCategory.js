import mongoose from "mongoose";
import slugify from "slugify"; // Import slugify library to generate friendly URLs

const menuCategorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		sortNo: {
			type: Number,
			required: true,
		},
		isDeleted: {
			type: Boolean,
			default: false, // Set the default value to false
		},
		friendlyURL: {
			type: String,
			unique: true, // Ensure uniqueness of friendly URLs
		},
	},
	{ collection: "menucategories" }
); // Specify your collection name here

// Define pre-save hook to generate friendly URL
menuCategorySchema.pre("save", function (next) {
	// Check if the name has been modified or this is a new category
	if (this.isModified("name") || !this.friendlyURL) {
		// Generate friendly URL from the name using slugify
		this.friendlyURL = slugify(this.name, { lower: true });
	}
	next();
});

const MenuCategory = mongoose.model("MenuCategory", menuCategorySchema);

export default MenuCategory;
