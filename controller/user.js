const asyncHandler = require("express-async-handler");
var bcrypt = require("bcryptjs");
const { User } = require("../model/userModel");

const { generateToken } = require("../utils/generateToken");
exports.loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	// console.log(req.body, "AUTH");
	const user = await User.findOne({ email: email });
	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,

			// userImage:user.userImage,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
});

exports.registerUser = asyncHandler(async (req, res) => {
	const {
		email,
		userpass,
		name,
		userImage,
		phoneno,
	
	} = req.body;

	console.log(req.body, "user");

	const userExist = await User.findOne({ email: email });
	if (userExist) {
		res.status(401);
		throw new Error("user already exist");
	} else {
		bcrypt.genSalt(10, function (err, salt) {
			bcrypt.hash(userpass, salt, function (err, hash) {
				// console.log(salt, password);
				if (!err) {
					hashedPassword = hash;
					const newuser = new User({
						email: email,
						name: name,
						userpass: hash,
						userImage: userImage,

						phoneno: phoneno,
					});
					newuser.save(() => {
						console.log("saved");
					});
					if (newuser) {
						res.status(200).json({
							_id: newuser._id,
							name: newuser.name,
							email: newuser.email,
							// userImage: newuser.userImage,

							token: generateToken(newuser._id),
						});
					} else {
						res.status(400);
						throw new Error("user not found");
					}
				} else {
					res.status(400);
					throw new Error(err);
				}
			});
		});
	}
});
