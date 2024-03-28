import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
	{
		fileName: {
			type: String,
			required: true,
		},
		fileType: {
			type: String,
			required: true,
		},
		filePath: {
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
