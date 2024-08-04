import {Request, Response} from 'express';
import User,{IUser} from '../models/user.model';

export const createUSer= async(req:Request, res:Response): Promise<void>=>{
    const {name,email,password}=req.body;

    if(!name || !email || !password){
        res.status(400).json({message:"All fiels are required"})
        return;
    }

    try{
        const newUser:IUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const getAllUsers=async(req:Request, res:Response): Promise<void>=>{
    try{
        const users: IUser[]=await User.find();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const updateUser = async(req:Request, res: Response): Promise<void>=>{
try{
    const {id}=req.params.id;
    const updatedUser:IUser|null = await User.findByIdAndUpdate(id, req.body,{new:true}) 
    if(!updatedUser){
        res.status(404).json({error:"User not found"});
        return;
    }
    res.status(200).json(updatedUser)
}catch(error){
        res.status(500).json({error:"Internal Server Error"})
    }
} 

export const deleteUser = async(req: Request, res: Response): Promise<void>=>{
try{
    const {id}=req.params;
    const deleteUser: IUser|null=await User.findByIdAndDelete(id);
    if(!deleteUser){
        res.status(404).json({error:"User not found"});
        return;
    }
    res.status(204).end();
}catch(error){
    res.status(500).json({error:'Internal Error'})
}
};