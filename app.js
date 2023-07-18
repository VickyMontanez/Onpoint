import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import teachersHub from "./routers/teachers.js";
const appExpress = express();
dotenv.config();

appExpress.use(express.json());
appExpress.use('/teachers', teachersHub)

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});


