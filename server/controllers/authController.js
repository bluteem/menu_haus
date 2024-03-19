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

		// Generate JWT token
		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

		// Set HTTPOnly cookie
		res.cookie("token", token, {
			httpOnly: true,
			sameSite: "Lax",
			// If the application requires the cookie to be sent in cross-site requests initiated by third-party websites, we should set the SameSite attribute to "None"; also include the Secure attribute to ensure that the cookie is only sent over HTTPS connections.
			// sameSite: 'None', secure: true
		});

		return res.status(200).json({ token });
	} catch (error) {
		console.error("Login failed", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

// Logout route
router.post("/logout", (req, res) => {
	// Clear the token cookie
	res.clearCookie("token");
	res.status(200).json({ message: "Logout successful" });
});

// Register a new user
router.post("/signup", async (req, res) => {
	try {
		// Check if username already exists
		const existingUser = await User.findOne({ username: req.body.username });
		if (existingUser) {
			return res.status(400).json({ message: "Username already exists" });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(req.body.password, 10);

		// Create a new user
		const newUser = new User({
			username: req.body.username,
			password: hashedPassword,
		});
		await newUser.save();

		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
});

// Middleware to verify JWT token
export const authMiddleware = async (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return res.status(401).json({ message: "Missing authentication token" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = decoded.userId; // Attach user information for further use
		next();
	} catch (error) {
		console.error("Token verification failed", error.message);
		return res.status(401).json({ message: "Invalid or expired authentication token" });
	}
};

export default router;
