const express = require("express");
const propertyRouter = express.Router();
const { addProperty, getProperty, getPropertyByUserId } = require("../controller/properties");
propertyRouter.post("/add", addProperty);
propertyRouter.get("/get/:category", getProperty);
propertyRouter.get("/getuserproperty/:id", getPropertyByUserId);
module.exports = propertyRouter;
