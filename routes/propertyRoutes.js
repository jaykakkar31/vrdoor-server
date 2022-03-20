const express = require("express");
const propertyRouter = express.Router();
const { addProperty, getProperty, updateProperty, deleteProperty } = require("../controller/properties");
propertyRouter.post("/add", addProperty);
propertyRouter.get("/get/:category", getProperty);
propertyRouter.patch("/update/:id", updateProperty);
propertyRouter.delete("/delete/:id", deleteProperty);

module.exports = propertyRouter;
