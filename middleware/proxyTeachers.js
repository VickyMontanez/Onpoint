import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {teachers} from '../controllerDto/teachers.js';
import { validate } from 'class-validator';

const proxyTeachers = express();
proxyTeachers.use(async(req, res, next)=>{
    try {
        let data = plainToClass(teachers, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        console.log(err);
        res.end();
    }
})

export default proxyTeachers;