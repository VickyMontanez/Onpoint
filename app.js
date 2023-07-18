import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
const appExpress = express();
dotenv.config();

appExpress.use(express.json());

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});


