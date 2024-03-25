// Import required modules
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import User from "../models/user.js";

// Load environment variables from .env file
dotenv.config();

// Create an Express router
const router = express.Router();

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
	host: "mail.abdullahguc.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

// Define a function to generate a verification code
function generateVerificationCode(length) {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const codeLength = length || 12; // Default length is 6 characters
	let code = "";

	for (let i = 0; i < codeLength; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		code += characters[randomIndex];
	}

	return code;
}

// Define a POST endpoint for sending emails
router.post("/verification", async (req, res) => {
	try {
		const { to, newEmail } = req.body;

		// Generate a verification code
		const verificationCode = generateVerificationCode();
		// Save the verification code in the user document in DB
		User.verificationCode = verificationCode;
		await User.save();

		// Send verification email
		const info = await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to,
			subject: "Email Verification",
			text: `You have requested to change your email address to ${newEmail}. Please use the link below to finalize the change. If you haven't made this request, you can ignore this email. Have a wonderful day!! Your verification code is: ${verificationCode}`,
		});

		// Log email information
		console.log("Verification email sent successfully");
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

		// Send response
		res.status(200).json({ message: "Verification email sent successfully" });
	} catch (error) {
		console.error("Error sending verification email:", error);
		res.status(500).json({ error: "Failed to send verification email" });
	}
});

// Export the router
export default router;
