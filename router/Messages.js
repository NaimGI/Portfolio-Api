import express from "express";
import {AddNewMessage,GetMessages} from "../Controller/Messages.js";
const router = express.Router();
router.post("/Message",AddNewMessage);
router.get("/allMessage",GetMessages)

export default router;