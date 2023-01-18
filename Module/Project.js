import mongoose from "mongoose";
const { Schema } = mongoose;

const Project = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Desciption: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
  },
  GitUrl:{
    type:String,
    
  }
});
export default mongoose.model("Project", Project);