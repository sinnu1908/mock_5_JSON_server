const express=require("express");
const { registerUser, loginUser } = require("../controller/user.controller");


const userRoutes=express.Router();


userRoutes.post("/signup",registerUser);
userRoutes.post("/login",loginUser);





//exports modules

module.exports={
    userRoutes
}