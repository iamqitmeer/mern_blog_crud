// const express = require("express");
import express from "express";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import { BlogModal } from "./db/models/BlogSchema.js";

const app = express();
const PORT = 5000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Data Fetched Succesfully",
    success: true,
  });
});

// POST Blog

app.post("/blog-post", async (req, res) => {
  const { title, description, category } = req.body;
  if (!title || !description || !category) {
    return res.status(400).json({
      message: "Something missing",
      success: false,
    });
  }
  const blog = {
    title,
    description,
    category,
  };

  const addBlog = new BlogModal(blog);
  await addBlog.save();

  return res.status(201).json({
    message: "Blog Add Succesfully",
    success: true,
  });
});

// Delete Single Blog

app.delete("/delete-blog/:id", async (req, res) => {
  const blog = await BlogModal.findByIdAndDelete(req.params.id);

  if (!blog)
    res.status(400).json({ message: "Blog Not Found", success: false });

  return res.status(200).json({
    message: "Blog Deleted Succesfully",
    success: true,
  });
});

// Update Single Blog
app.put("/edit-blog/:id", async (req, res) => {
  let blog = await BlogModal.findByIdAndUpdate(req.params.id);

  if (!blog)
    res.status(400).json({ message: "Blog Not Found", success: false });

  const { title, description, category } = req.body;

  if (!title || !description || !category) {
    return res.status(400).json({
      message: "Something missing",
      success: false,
    });
  }

  blog.title = title;
  blog.description = description;
  blog.category = category;

  await blog.save()

  res.status(200).json({ message: "Blog Update Succesfully", success: true });
});

// Get ALL blogs

app.get("/blogs", async (req, res) => {
  const allBlogs = await BlogModal.find();

  return res.status(200).json({
    message: "Blogs Fetched Succesfully",
    success: true,
    blog: allBlogs,
  });
});

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
  connectDB();
});
