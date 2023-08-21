const mongoose=require("mongoose");

//user Schema
const apptSchema=mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    specialization:{type:String,required:true},
    experience:{type:Number,required:true},
    location:{type:String,required:true},
    date:{type:Date,required:true},
    slots:{type:Number,required:true},
    fees:{type:Number,required:true},
    
})


//user Model

const apptModel=mongoose.model("appontment",apptSchema);


//export model

module.exports={
    apptModel
}
