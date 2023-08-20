const express=require('express');
require("dotenv").config();
const cors=require("cors");
const connection = require('./db');
const { empRoutes } = require('./routes/empl.routes');
const app=express();
app.use(cors());

app.use((req, res, next) => { res.header({"Access-Control-Allow-Origin": "*"}); next(); }) 
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