import mongoose from "mongoose";

export const databaseConnection = async (req, res) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/merndb");
    console.log("Database is connected!");
  } catch (error) {
    console.log(error);
  }
};
