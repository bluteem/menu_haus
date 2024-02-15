import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		fullName: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String, // You may store the URL of the profile picture
		},
		accountStatus: {
			type: String,
			enum: ["active", "inactive", "suspended"],
			default: "active",
		},
		role: {
			type: String,
			enum: ["Admin", "Team"],
			default: "Team",
		},
		dateCreated: {
			type: Date,
			default: Date.now,
		},
		lastLogin: {
			type: Date,
		},
	},
	{ collection: "users" }
); // Specify your collection name here

const User = mongoose.model("User", UserSchema);

export default User;
