import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {students} from '../controllerDto/students.js';
import { validate } from 'class-validator';

const proxyStudents = express();
proxyStudents.use(async(req, res, next)=>{
    try {
        let data = plainToClass(students, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        console.log(err);
        res.end();
    }
})

export default proxyStudents;