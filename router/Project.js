import express from "express";
import {addProject,getProjects} from "../Controller/Project.js";
const router = express.Router();
router.post("/Project",addProject);
router.get("/GetProjet",getProjects);


export default router;