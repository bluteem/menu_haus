import mongoose, { mongo } from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
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

const menuItem = mongoose.model("MenuItem", menuItemSchema);

export default menuItem;