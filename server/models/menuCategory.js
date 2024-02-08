import mongoose from 'mongoose';

const menuCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    sortNo: {
        type: Number,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false, // Set the default value to false
    }
}, { collection: 'menucategories' }); // Specify your collection name here

const MenuCategory = mongoose.model('MenuCategory', menuCategorySchema);

export default MenuCategory;
