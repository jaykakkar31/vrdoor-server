const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
	{
		title: {
			type: String,
			// required: true,
		},
		propertyImage: {
			type: String,
			// required: true,
		},
		overview: {
			type: String,
			// required: true,
		},
		price: {
			type: Number,
			// required: true,
		},
		beds: {
			type: Number,
			// required: true,
		},
		bathroom: {
			type: Number,
			// required: true,
		},
		landArea: {
			type: Number,
			// required: true,
		},
		type: {
			type: String,
			// required: true,
		},
		status: {
			type: String,
			// required: true,
		},
		builtYear: {
			type: String,
			// required: true,
		},
		parkingSpaces: {
			type: Boolean,
			// required: true,
		},
		roomCount: {
			type: Number,
			// required: true,
		},
		address: {
			type: String,
			// required: true,
		},
		tvCable: {
			type: Boolean,
			// required: true,
		},
		barbeque: {
			type: Boolean,
			// required: true,
		},
		ac: {
			type: Boolean,
			// required: true,
		},
		gym: {
			type: Boolean,
			// required: true,
		},
		lawn: {
			type: Boolean,
			// required: true,
		},
		laundry: {
			type: Boolean,
			// required: true,
		},
		ccCam: {
			type: Boolean,
			// required: true,
		},
	},
	// Mongoose schemas have a timestamps option that tells Mongoose
	//to automatically manage createdAt and updatedAt properties on your documents.
	{ timestamps: true }
);

const property = mongoose.model("property", propertySchema);

exports.Property = property;
