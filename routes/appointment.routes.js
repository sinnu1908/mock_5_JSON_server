const express=require("express");
const { registerUser, loginUser } = require("../controller/user.controller");
const { createAppointment, getAppointments, deleteDoctor, editDoctor } = require("../controller/appontment.controller");


const apptRoutes=express.Router();


apptRoutes.post("/appointments",createAppointment);
apptRoutes.get("/appointments",getAppointments);
apptRoutes.delete("/appointments/:myId",deleteDoctor);
apptRoutes.put("/appointments/:myId",editDoctor)





//exports modules

module.exports={
    apptRoutes
}

