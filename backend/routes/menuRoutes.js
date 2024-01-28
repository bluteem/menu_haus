// backend/routes/menuRoutes.js
const express = require('express');
const MenuItem = require('../models/menuItem');

const router = express.Router();

// GET all menu items
router.get('/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new menu item
router.post('/menu', async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const menuItem = new MenuItem({ name, description, price, category });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    console.error('Error creating menu item:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;