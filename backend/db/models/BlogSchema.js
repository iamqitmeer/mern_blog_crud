import mongoose from "mongoose";

let BlogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

export const BlogModal = mongoose.model("Blog", BlogSchema);
