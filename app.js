import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import teachersHub from "./routers/teachers.js";
import studentsHub from "./routers/students.js";
import classesHub from "./routers/classes.js";
const appExpress = express();
dotenv.config();

appExpress.use(express.json());
appExpress.use('/teachers', teachersHub);
appExpress.use('/students', studentsHub);
appExpress.use('/classes', classesHub)

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});


