const express=require("express")
const meetingRouter = express.Router();


const { addMeeting } = require("../controller/meeting");
meetingRouter.post("/add", addMeeting);
// propertyRouter.get("/get/:category", getProperty);
// propertyRouter.patch("/update/:id", updateProperty);
// propertyRouter.delete("/delete/:id", deleteProperty);
// propertyRouter.get("/getuserproperty/:id", getPropertyByUserId);
// propertyRouter.get("/getpropertydetails/:id", getPropertyDetailsById);

module.exports = meetingRouter;
