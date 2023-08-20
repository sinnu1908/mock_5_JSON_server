
const mongoose=require("mongoose");

const empSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    department:{type:String,required:true},
})


const empModel=mongoose.model("employee",empSchema);


module.exports={
    empModel
}