// backend/models/menuItem.js
const mongoose = require('mongoose');

// Define the MenuItem schema
const menuItemSchema = new mongoose.Schema({
  name: {
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
  category: {
    type: String,
    required: true,
  },
});

// Create and export the MenuItem model
module.exports = mongoose.model('MenuItem', menuItemSchema);