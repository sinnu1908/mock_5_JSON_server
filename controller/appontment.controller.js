const { apptModel } = require("../modules/appointment.module")




const createAppointment=async(req,res)=>{



    try {

        const newAppt=await new apptModel(req.body);
        await newAppt.save();
        res.status(201).json({msg:"Appointment placed successfully"})
        
    } catch (error) {
        console.log(error)
    }
}

const getAppointments=async(req,res)=>{

    try {

       const appt=await apptModel.find();
        res.status(200).json({data:appt})
        
    } catch (error) {
        console.log(error)
    }
}


//delete doctor

const deleteDoctor=async(req,res)=>{

    const myId=req.params;

    await apptModel.findByIdAndDelete({_id:myId});

    res.status(200).json({msg:"Doctor deleted successfully"})

    try {
        
    } catch (error) {
        console.log(error)
    }
}


//edit doctor

const editDoctor=async(req,res)=>{

    const myId=req.params;

      await apptModel.findByIdAndUpdate(req.body);

    res.status(200).json({msg:"Doctor updated successfully"})

    try {
        
    } catch (error) {
        console.log(error)
    }
}





module.exports={
    createAppointment,
    getAppointments,
    deleteDoctor,
    editDoctor,

}