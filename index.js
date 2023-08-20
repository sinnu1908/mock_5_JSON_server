const express=require('express');
require("dotenv").config();
const cors=require("cors");
const connection = require('./db');
const { empRoutes } = require('./routes/empl.routes');
console.log(cors)
const app=express();
app.use(cors({ origin: true }));
app.use(express.json());


app.use(empRoutes);


app.listen(process.env.port||8080,async()=>{

    try {
        await connection;
        console.log("server is running");
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
})