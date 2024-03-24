// Import required modules
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create an Express router
const router = express.Router();

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

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

// Define a POST endpoint for sending emails
router.post("/send-email", async (req, res) => {
	try {
		const { to, subject, text } = req.body;

		// Send email
		const info = await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to,
			subject,
			text,
		});

		// Log email information
		console.log("Email sent successfully");
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

		// Send response
		res.status(200).json({ message: "Email sent successfully" });
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).json({ error: "Failed to send email" });
	}
});

// Export the router
export default router;
