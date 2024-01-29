import mongoose, { mongo } from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
        default: [],
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: {
        type: String,
        required: true,
        default: [],
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numberOfReviews: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
},
{ timestamps: true }
);

const menuItem = mongoose.model("menuItem", menuItemSchema);

export default menuItem;
