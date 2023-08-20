const { empModel } = require("../models/empl.model");




const addEmp=async(req,res)=>{

    const {name,age,department,email}=req.body;

    try {

        if(!name || !age || !department || !email){
            res.status(400).json({msg:"Please fill all the required fields",success:false});
        }else{
    
            const empAvailable=await empModel.findOne({email});
    
            if(empAvailable){
                res.status(200).json({msg:"Employee already added",success:false});
            }
    
            else{
    
                const newEmp=await new empModel(req.body);
                newEmp.save();
                res.status(201).json({msg:"Employee Added Successfully",success:true});
            }
        }
        
    } catch (error) {
        console.log(error)
    }

   

}


const getEmp=async(req,res)=>{

    try {

        const employee=await empModel.find();
        res.status(200).json({data:employee,success:true})
    
        
    } catch (error) {
        console.log(error)
    }

    

}




module.exports={
    addEmp,
    getEmp
}