import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {extraPoints} from '../controllerDto/extraPoints.js';
import { validate } from 'class-validator';

const proxyExtraPoints = express();
proxyExtraPoints.use(async(req, res, next)=>{
    try {
        let data = plainToClass( extraPoints, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        console.log(err);
        res.end();
    }
})

export default proxyExtraPoints;