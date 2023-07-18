import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {bonusPoints} from '../controllerDto/bonusPoints.js';
import { validate } from 'class-validator';

const proxyBonusPoints = express();
proxyBonusPoints.use(async(req, res, next)=>{
    try {
        let data = plainToClass(bonusPoints, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        console.log(err);
        res.end();
    }
})

export default proxyBonusPoints;