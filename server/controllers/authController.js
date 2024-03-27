import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";

const router = express.Router();

// Login endpoint
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		if (!user || !bcrypt.compareSync(password, user.password)) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		// Set expiration time for the token (e.g., 1 day)
		const expiresIn = "1h";

		// Generate JWT token with expiration time
		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn });

		// Return token in JSON response
		return res.status(200).json({ token });
	} catch (error) {
		console.error("Login failed", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

// Signup endpoint
router.post("/signup", async (req, res) => {
	try {
		// Check if user already exists
		const existingUser = await User.findOne({ email: req.body.email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		// Create a new user
		const newUser = new User({
			fullName: req.body.fullName,
			email: req.body.email,
			password: req.body.password,
		});
		await newUser.save();

		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
});

// Logout route
router.post("/logout", async (req, res) => {
	try {
		// Clear the token cookie
		res.clearCookie("token");
		// Send a successful response with a message
		res.status(200).json({ message: "Logged out successfully (backend)" });
	} catch (error) {
		console.error("Logout error:", error);
		res.status(500).json({ message: "Logout failed (backend)" }); // Handle errors
	}
});

// Middleware to verify JWT token
export const authMiddleware = async (req, res, next) => {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(401).json({ message: "Missing authentication token" });
	}

	try {
		// Extract the token from the "Bearer" scheme
		const tokenParts = token.split(" ");
		if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
			throw new Error("Invalid token format");
		}
		const decoded = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
		req.userId = decoded.userId; // Attach user information for further use
		next();
	} catch (error) {
		console.error("Token verification failed", error.message);
		return res.status(401).json({ message: "Invalid or expired authentication token" });
	}
};

export default router;
