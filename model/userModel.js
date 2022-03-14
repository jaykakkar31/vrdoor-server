const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		userImage: {
			type: String,
			// required: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
		contact: {
			type: Number,
			required: true,
		},
	
	},
	// Mongoose schemas have a timestamps option that tells Mongoose
	//to automatically manage createdAt and updatedAt properties on your documents.
	{ timestamps: true }
);

const user = mongoose.model("user", userSchema);

exports.User = user;
