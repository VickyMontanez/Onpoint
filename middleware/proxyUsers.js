import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {users} from '../controllerDto/users.js';
import { validate } from 'class-validator';

const proxyUsers = express();
proxyUsers.use(async(req, res, next)=>{
    try {
        let data = plainToClass(users, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        console.log(err);
        res.end();
    }
})

export default proxyUsers;