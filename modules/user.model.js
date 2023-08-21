const mongoose=require("mongoose");

//user Schema
const userSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
})


//user Model

const userModel=mongoose.model("user",userSchema);


//export model

module.exports={
    userModel
}