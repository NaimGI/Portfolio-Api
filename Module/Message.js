import mongoose from "mongoose";
const { Schema } = mongoose;

const Message = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  MessageDesc: {
    type: String,
    required:true,
  },
});
export default mongoose.model("Message", Message);