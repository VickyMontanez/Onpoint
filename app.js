import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import teachersHub from "./routers/teachers.js";
import studentsHub from "./routers/students.js";
import extrapointsHub from "./routers/extraPoints.js";
import usersHub from "./routers/users.js";

const appExpress = express();
dotenv.config();

appExpress.use(express.json());
appExpress.use('/teachers', teachersHub);
appExpress.use('/students', studentsHub);
appExpress.use('/extraPoints', extrapointsHub)
appExpress.use('/users', usersHub);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});


