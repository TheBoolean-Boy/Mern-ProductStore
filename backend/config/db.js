import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connect ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error connecting to DB ${error.message}`);
    process.exit(1) // 1 means failure 0 means success <- it's good practice
  }
}