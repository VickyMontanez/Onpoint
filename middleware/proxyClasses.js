import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {classes} from '../controllerDto/classes.js';
import { validate } from 'class-validator';

const proxyClasses = express();
proxyClasses.use(async(req, res, next)=>{
    try {
        let data = plainToClass(classes, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        console.log(err);
        res.end();
    }
})

export default proxyClasses;