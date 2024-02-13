import express from "express";
import User from "../models/user.js";;

const router = express.Router();

// Route: GET /api/users
router.get("/", getUsers);

async function getUsers(req, res) {
    try {
        const UsersGot = await User.find({});
        res.json({
            UsersGot
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Server error" });
    }
}

export default router;
