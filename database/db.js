import dotEnv from "dotenv";
import mongoose from "mongoose";

dotEnv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DATABASE connected succesfully...");
  } catch (error) {
    console.log("Error while connecting DATABASE ", error.message);
  }
};

export default connectDB;
