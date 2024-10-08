import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/credito");
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
