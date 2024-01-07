//Importations
import mongoose from "mongoose";

//Define the Task schemas
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, //Delete the spaces on the title fiel
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);
