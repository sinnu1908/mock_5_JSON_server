const { userModel } = require("../modules/user.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();



const registerUser=async(req,res)=>{

    const {email,password}=req.body;


    try {
        const userAvailable=await userModel.findOne({email})

        if(userAvailable){
            res.status(200).json({msg:"User already present, Please Login"})
        }else{

            bcrypt.hash(password, 4, async(err, hash) =>{
                if(hash){
             const newUser=await new userModel({
                email,
                password:hash
             })
             await newUser.save();
             res.status(201).json({msg:"User registered successfully"})
            }else{

                res.status(400).json({msg:"Something went wrong"})

                }
               
            });
        }
        
    } catch (error) {
        console.log(error)
    }

}


//login users

const loginUser=async(req,res)=>{
    const {email,password}=req.body;

try {
    const userAvailable=await userModel.findOne({email}) 

    if(userAvailable){

        bcrypt.compare(password, userAvailable.password, async(err, result)=> {
        
            if(result){

             let accessToken=jwt.sign({
                user:{
                    userId:userAvailable._id,
                    email:userAvailable.email
                }
             },
             process.env.secretKey,
             {
                expiresIn:"21days"
             })

             res.status(200).json({msg:"User Login Successfull", token:accessToken})
    
            }else if(!result){
                res.status(200).json({msg:"Password is Incorrect"})
    
            }else{
                res.status(400).json({msg:"Something went wrong"})

            }
        });
        
    }else{

        res.status(200).json({msg:"Invalid Credentials"})
    }

    
    
} catch (error) {
    console.log(error)
}
   
}



//export modules

module.exports={
    registerUser,
    loginUser,
}