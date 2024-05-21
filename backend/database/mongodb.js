import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const MONGODBURI = process.env.MONGODB_URI;

const mongodb = async () => {
  try {
    await mongoose.connect(MONGODBURI, {});
    console.log("mogoDB connected successfully");
  } catch (error) {
    console.error("error connecting to mongodb :", error.message);
  }
};

export default mongodb;
