import Project from "../Module/Project.js";
import mongoose from "mongoose";
export const addProject=async(req,res,next)=>{
    try {
        const NewProject =new Project(req.body);
        const CreatedProject=await NewProject.save();

        res.status(200).json(CreatedProject);
    } catch (error) {
        next(error);
    }
}
export const getProjects=async(req,res,next)=>{
try {
    const AllProject=await Project.find();
    res.status(200).json(AllProject);
} catch (error) {
    next(error);
}
}