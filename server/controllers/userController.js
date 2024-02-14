import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// Route: GET /api/users
// Description: Get all menu categories
router.get('/', async (req, res) => {
    try {
        const userData = await User.find();
        res.status(200).json({ userData });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: GET /api/users/:id
// Description: Get a user by ID
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findById(req.params.id);
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ userData });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: POST /api/users
// Description: Add a new user
router.post('/', async (req, res) => {
    try {
        const { email, password, fullName, profilePicture } = req.body;
        const userData = new User({
            email,
            password, 
            fullName, 
            profilePicture
        });
        await userData.save();
        res.status(201).json({ message: 'User created successfully', userData });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: PUT /api/users/:id
// Description: Update a user by ID
router.put('/:id', async (req, res) => {
    try {
        const { email, password, fullName, profilePicture } = req.body;
        const updatedUserData = await User.findByIdAndUpdate(req.params.id, {
            email,
            password,
            fullName,
            profilePicture
        }, { new: true }); // { new: true } returns the updated document
        if (!updatedUserData) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User updated successfully', userData: updatedUserData });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route: DELETE /api/menucategories/:id
// Description: Delete a menu item by ID
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.findByIdAndDelete(req.params.id);
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
