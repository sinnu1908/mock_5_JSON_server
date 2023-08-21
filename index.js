//basic deployment structure

const express=require('express');
const cors=require("cors");
const connection = require('./db');
const { userRoutes } = require('./routes/user.routes');
const { apptRoutes } = require('./routes/appointment.routes');
const app=express();
app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(apptRoutes);

app.listen(process.env.port||8080,async()=>{

    try {
        await connection;
        console.log("server is running");
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
})