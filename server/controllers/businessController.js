import express from "express";
import Business from "../models/business.js";

const router = express.Router();

// Route: GET /api/businesses
// Description: Get all businesses
router.get("/", async (req, res) => {
	try {
		const businessData = await Business.find();
		res.status(200).json({ businessData });
	} catch (error) {
		console.error("Error fetching businesses:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: GET /api/business/:id
// Description: Get a business by ID
router.get("/:id", async (req, res) => {
	try {
		const businessData = await Business.findById(req.params.id);
		if (!businessData) {
			return res.status(404).json({ error: "Business not found" });
		}
		res.status(200).json({ businessData });
	} catch (error) {
		console.error("Error fetching business:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: POST /api/businesses
// Description: Add a new business
router.post("/", async (req, res) => {
	try {
		const {
			businessName,
			businessType,
			businessAddress,
			businessPhones,
			businessEmails,
			businessWebsite,
			businessSocials,
			businessImages,
		} = req.body;
		const userData = new User({
			businessName,
			businessType,
			businessAddress,
			businessPhones,
			businessEmails,
			businessWebsite,
			businessSocials,
			businessImages,
		});
		await businessData.save();
		res.status(201).json({ message: "Business created successfully", businessData });
	} catch (error) {
		console.error("Error creating business:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: PUT /api/businesses/:id
// Description: Update a business by ID
router.put("/:id", async (req, res) => {
	try {
		const {
			businessName,
			businessType,
			businessAddress,
			businessPhones,
			businessEmails,
			businessWebsite,
			businessSocials,
			businessImages,
		} = req.body;
		const updatedBusinessData = await Business.findByIdAndUpdate(
			req.params.id,
			{
				businessName,
				businessType,
				businessAddress,
				businessPhones,
				businessEmails,
				businessWebsite,
				businessSocials,
				businessImages,
			},
			{ new: true }
		); // { new: true } returns the updated document
		if (!updatedBusinessData) {
			return res.status(404).json({ error: "Business not found" });
		}
		res.json({ message: "Business updated successfully", businessData: updatedBusinessData });
	} catch (error) {
		console.error("Error updating business:", error);
		res.status(500).json({ error: "Server error" });
	}
});

// Route: DELETE /api/business/:id
// Description: Delete a business by ID
router.delete("/:id", async (req, res) => {
	try {
		const businessData = await Business.findByIdAndDelete(req.params.id);
		if (!businessData) {
			return res.status(404).json({ error: "Business not found" });
		}
		res.json({ message: "Business deleted successfully" });
	} catch (error) {
		console.error("Error deleting business:", error);
		res.status(500).json({ error: "Server error" });
	}
});

export default router;
