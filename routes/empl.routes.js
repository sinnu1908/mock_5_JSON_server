
const express=require('express');
const { addEmp, getEmp } = require('../controller/empl.controller');
const empRoutes=express.Router();


empRoutes.post("/addEmployee",addEmp);
empRoutes.get("/employee",getEmp);





module.exports={
    empRoutes,
}