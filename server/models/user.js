import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		unverifiedEmail: {
			type: String,
		},
		password: {
			type: String,
			required: true,
		},
		unverifiedPassword: {
			type: String,
		},
		fullName: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
		},
		phone: {
			type: String,
		},
		unverifiedPhone: {
			type: String,
		},
		accountStatus: {
			type: String,
			enum: ["active", "inactive", "suspended"],
			default: "active",
		},
		verificationCodeHolder: {
			type: String,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		role: {
			type: String,
			enum: ["Administrator", "Team"],
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
		if (!this.isModified("password") && !this.isModified("unverifiedPassword")) {
			// If neither password nor unverifiedPassword is modified, move to the next middleware
			return next();
		}

		const salt = await bcrypt.genSalt(10);

		// Hash the password if modified
		if (this.isModified("password")) {
			const hashedPassword = await bcrypt.hash(this.password, salt);
			this.password = hashedPassword;
		}

		// Hash the unverifiedPassword if modified
		if (this.isModified("unverifiedPassword")) {
			const hashedUnverifiedPassword = await bcrypt.hash(this.unverifiedPassword, salt);
			this.unverifiedPassword = hashedUnverifiedPassword;
		}
		next();
	} catch (error) {
		next(error);
	}
});

const User = mongoose.model("User", UserSchema);

export default User;
