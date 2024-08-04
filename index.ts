import express from 'express';
import 'reflect-metadata';
import mongoose from 'mongoose';
import {json} from 'body-parser';
import userRoutes from './routes/user.routes';

const app=express();
const port=process.env.PORT || 9999;
const dbUrl='mongodb://localhost/mydb';

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})