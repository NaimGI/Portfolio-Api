import express from "express"
import mongoose from "mongoose"
import AddNewMessage from "./router/Messages.js";
import Project from "./router/Project.js";
import cors from "cors";
const app =express();
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,  
  optionSuccessStatus:200 ,  
}
const PORT=process.env.PORT || 4000
const mongooseUrl="mongodb+srv://naim:234@cluster0.gecowfn.mongodb.net/gestion?retryWrites=true&w=majority";
const connect = async () => {
    try {
      mongoose.connect(
        mongooseUrl
      );
      console.log("monog db connected");
    } catch (error) {
      console.log(error);
    }
  };
  mongoose.connection.on("disconnected", () => {
    console.log("mongoBd disconnected");
  });
  mongoose.connection.on("connected", () => {
    console.log("mongoDb connected");
  });
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/", AddNewMessage);
app.use("/api/",Project);

app.listen(PORT,()=>{
console.log("Port is running");
connect();
})