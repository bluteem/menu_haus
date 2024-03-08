import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema(
	{
		businessName: {
			type: String,
			required: true,
		},
		businessType: {
			type: String,
		},
		businessAddress: {
			type: String,
		},
		businessPhones: {
			type: [String],
		},
		businessEmails: [
			{
				type: String, // This approach for the array provides more flexibility. It allows to define more complex schemas for each email address, should the need arise in the future. For example, you might want to add additional properties like verified or primary to each email address object.
			},
		],
		businessWebsite: {
			type: String,
		},
		businessSocials: {
			type: [String],
		},
		businessImages: {
			type: [String],
		},
		isActive: {
			type: Boolean,
			default: true,
		},
	},
	{ collection: "businesses" }
); // Specify your collection name here

const Business = mongoose.model("Business", BusinessSchema);

export default Business;
