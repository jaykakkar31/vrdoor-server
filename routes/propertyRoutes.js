const express = require("express");
const propertyRouter = express.Router();
const { addProperty, getProperty } = require("../controller/properties");
propertyRouter.post("/add", addProperty);
propertyRouter.get("/get/:category", getProperty);

module.exports = propertyRouter;
