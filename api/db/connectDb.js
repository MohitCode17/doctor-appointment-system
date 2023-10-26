import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB databse is connected successfully");
  } catch (error) {
    console.log("MongoDB databse is connection failed");
  }
};
