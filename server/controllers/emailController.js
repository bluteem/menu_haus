// Import required modules
import express from "express";
import nodemailer from "nodemailer";

// Create an Express router
const router = express.Router();

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: "your_ethereal_username",
		pass: "your_ethereal_password",
	},
});

// Define a POST endpoint for sending emails
router.post("/send-email", async (req, res) => {
	try {
		const { to, subject, text } = req.body;

		// Send email
		const info = await transporter.sendMail({
			from: "your_sender_address@example.com",
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
