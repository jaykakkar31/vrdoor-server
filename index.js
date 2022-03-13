require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
app.use(
	cors({
		origin: "*",
	})
);

if (process.env.NODE_ENV == "development") {
    //middleware
	app.use(morgan("dev"));
}
const mongodb=process.env.MONGO_URI
mongoose
	.connect(mongodb, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Mongodb is connected");
	})
	.catch((e) => {
		console.log("Mogodb not connected");
	});
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

app.listen(port, () => {
	console.log(`Server listens at http://localhost:${port}`);
});
