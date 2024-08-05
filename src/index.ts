import express from 'express';
// import 'reflect-metadata';
import mongoose from 'mongoose';
import {json} from 'body-parser';
import userRoutes from './routes/user.routes';

const app=express();
const port=process.env.PORT || 9999;
const dbUrl='mongodb://localhost/typescriptCRUD';

mongoose.connect(dbUrl,{})


const db=mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo Connection error'))
db.once('open', ()=>{
    console.log("Mongo connected");  
})

app.use(json());
app.use('/users',userRoutes);

app.listen(port,()=>{
    console.log(`Connection established at port ${port}`);
    
})