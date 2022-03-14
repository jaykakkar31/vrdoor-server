const asyncHandler = require("express-async-handler");
// var bcrypt = require("bcryptjs");
const { Property } = require("../model/propertiesModel");

exports.addProperty = asyncHandler(async (req, res) => {
	const {
		title,
		propertyImage,
		overview,
		price,
		beds,
		bathroom,
		landArea,
		type,
		status,
		builtYear,
		parkingSpaces,
		roomCount,
		address,
		tvCable,
		barbeque,
		ac,
		lawn,
		laundry,
		ccCam,
	} = req.body;

	// console.log(req.body, "user");

	// const propertyExist = await Property.findOne({ email: email });
    try{const newProperty = new Property({
			title: title,
			propertyImage: propertyImage,
			overview: overview,
			price: price,
			beds: beds,
			bathroom: bathroom,
			landArea: landArea,
			type: type,
			status: status,
			builtYear: builtYear,
			parkingSpaces: parkingSpaces,
			roomCount: roomCount,
			address: address,
			tvCable: tvCable,
			barbeque: barbeque,
			ac: ac,
			lawn: lawn,
			laundry: laundry,
			ccCam: ccCam,
		});
		newProperty.save(() => {
			console.log("saved");
		});
		if (newProperty) {
			res.status(200).json("propertyAdded");
		} else {
			res.status(400);
			throw new Error("Property not found");
		}}catch(e){
            			res.status(400);

            			throw new Error(e.message);

        }
	// if (propertyExist) {
	// 	res.status(401);
	// 	throw new Error("Property already exist");
	// } else {
		
	// }
});
