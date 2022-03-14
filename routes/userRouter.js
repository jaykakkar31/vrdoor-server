const express = require("express");
const userRouter = express.Router();
const { loginUser, registerUser } = require("../controller/user");
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports=userRouter