import mongoose from 'mongoose';

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
}, { collection: 'menuitems' }); // Specify your collection name here

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;
