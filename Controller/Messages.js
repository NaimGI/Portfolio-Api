import Message from "../Module/Message.js"
import mongoose from "mongoose";
export const AddNewMessage=async(req,res,next)=>{
    try {
        const NewMessage =new Message(req.body);
        const Create= await NewMessage.save()
        res.status(200).json(Create);
    } catch (error) {
        next(error);
    }
}
export const GetMessages=async(req,res,next)=>{
    try {
        const msg=await Message.find();
        res.status(200).json(msg);
    } catch (error) {
        next(error);
    }
}