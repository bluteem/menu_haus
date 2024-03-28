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
	const codeLength = length || 18; // Default length is 6 characters
	let code = "";

	for (let i = 0; i < codeLength; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		code += characters[randomIndex];
	}

	return code;
}

// Define a POST endpoint for sending emails
router.post("/verification/:id", async (req, res) => {
	try {
		const { to, newEmail } = req.body;

		// Generate a verification code
		const verificationCode = generateVerificationCode();
		// Save the verification code in the user document in DB

		const updatedUserData = await User.findByIdAndUpdate(
			req.params.id,
			{
				verificationCodeHolder: verificationCode,
				isVerified: false,
				unverifiedEmail: newEmail,
			},
			{ new: true }
		); // { new: true } returns the updated document
		if (!updatedUserData) {
			return res.status(404).json({ error: "User not found" });
		}

		// Send verification email
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to,
			subject: "Email Change Verification",
			html: `
				<p>Hi,</p>
				<p>You have requested to change your email address to ${newEmail}. </p>
				<p>Please use the link below to verify the change.</p>
				<p><a href="http://localhost:5000/api/email/verification/${verificationCode}">Verify</a></p>
				<p>If you haven't made this request, you can ignore this email.</p>
				<p>Have a wonderful day!!</p>
				<p>- Menu Haus Team</p>
			`,
		});

		// Log email information
		// console.log("Verification email sent successfully");
		// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

		// Send response
		res.status(200).json({ message: "Verification email sent successfully" });
	} catch (error) {
		console.error("Error sending verification email:", error);
		res.status(500).json({ error: "Failed to send verification email" });
	}
});

// Define a GET endpoint for verifying email change
router.get("/verification/:verificationCode", async (req, res) => {
	try {
		const verificationCode = req.params.verificationCode;

		// Find the user by verification code
		const user = await User.findOne({ verificationCodeHolder: verificationCode });

		// If no user found with the provided verification code
		if (!user) {
			return res.status(404).json({ error: "Invalid verification code" });
		}

		// Update user document in the database
		user.isVerified = true;
		user.email = user.unverifiedEmail;
		user.unverifiedEmail = "";
		user.verificationCodeHolder = "";

		// Save the updated user document
		await user.save();

		// Send response
		res.status(200).json({ message: "Email change verified successfully" });
	} catch (error) {
		console.error("Error verifying email change:", error);
		res.status(500).json({ error: "Failed to verify email change" });
	}
});

// Export the router
export default router;
