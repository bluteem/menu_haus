import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
	{
		originalName: {
			type: String,
			required: true,
		},
		mimeType: {
			type: String,
			required: true,
		},
		storagePath: {
			type: String,
			required: true,
		},
		uploadedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "files" }
);

const File = mongoose.model("File", fileSchema);

export default File;
