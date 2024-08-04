import mongoose, {Schema, Document} from "mongoose";

export interface IUser extends Document{
    name: string;
    email: string;
    password: number;
}


const userSchema: Schema<IUser> = new Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique:true},
    password:{type:Number, required:true},
})

export default mongoose.model<IUser>("User", userSchema)