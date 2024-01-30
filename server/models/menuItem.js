import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    images: {
        type: [String], // Changed to an array of strings
        required: true,
    },
    category: {
        type: String,
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
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema); // Changed to MenuItem

export default MenuItem; // Changed to MenuItem
