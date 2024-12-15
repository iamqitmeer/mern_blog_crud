import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://blog:blog@blog.2jqcc.mongodb.net/learnBackend";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(MONGO_URI)
      .then(() => console.log("Database Connected Succesfully"));
  } catch (error) {
    console.log(error);
  }
};
