const express = require("express");
const propertyRouter = express.Router();
const { addProperty } = require("../controller/properties");
propertyRouter.post("/add", addProperty);
// userRouter.post("/login", loginUser);

module.exports = propertyRouter;
