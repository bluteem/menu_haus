import mongoose from 'mongoose';

const menuCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true // Ensure each category name is unique
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { collection: 'menucategories' }); // Specify your collection name here

const MenuCategory = mongoose.model('MenuCategory', menuCategorySchema);

export default MenuCategory;
