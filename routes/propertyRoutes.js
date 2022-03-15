const express = require("express");
const propertyRouter = express.Router();
const { addProperty, getProperty } = require("../controller/properties");
propertyRouter.post("/add", addProperty);
propertyRouter.get("/get", getProperty);

module.exports = propertyRouter;
