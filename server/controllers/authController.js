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
		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

		// Set HTTPOnly cookie
		res.cookie("token", token, {
			httpOnly: true,
			sameSite: "Lax",
			// If the application requires the cookie to be sent in cross-site requests initiated by third-party websites, we should set the SameSite attribute to "None"; also include the Secure attribute to ensure that the cookie is only sent over HTTPS connections.
			// sameSite: 'None', secure: true
		});

		return res.status(200).json({ message: "Login successful" });
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

// Middleware to verify JWT token
export const authMiddleware = async (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded; // Attach user information for further use

		// Check if the token is still valid based on expiration time (optional)
		if (decoded.exp < Date.now() / 1000) {
			return res.status(401).json({ message: "Token expired" });
		}

		next();
	} catch (error) {
		console.error("Invalid token", error);
		return res.status(401).json({ message: "Unauthorized" });
	}
};

export default router;
