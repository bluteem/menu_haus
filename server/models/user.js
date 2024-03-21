import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
		phone: {
			type: String,
		},
		accountStatus: {
			type: String,
			enum: ["active", "inactive", "suspended"],
			default: "active",
		},
		role: {
			type: String,
			enum: ["Admin", "Team", "Super Admin"],
			default: "Team",
		},
		dateCreated: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "users" }
); // Specify your collection name here

// Hash password before saving to the database
UserSchema.pre("save", async function (next) {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(this.password, salt);
		this.password = hashedPassword;
		next();
	} catch (error) {
		next(error);
	}
});

const User = mongoose.model("User", UserSchema);

export default User;
