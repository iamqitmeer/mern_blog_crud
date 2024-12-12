import { useState } from "react";

const AddBlogPage = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 p-6">
      <div className="max-w-4xl mx-auto bg-zinc-800 shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Blog</h1>

        {/* Add Blog Form */}
        <form className="mb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-2 block w-full rounded-md bg-zinc-700 border border-zinc-600 focus:border-zinc-500 focus:ring focus:ring-zinc-500 text-zinc-100 placeholder-zinc-500"
              placeholder="Enter blog title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-2 block w-full rounded-md bg-zinc-700 border border-zinc-600 focus:border-zinc-500 focus:ring focus:ring-zinc-500 text-zinc-100 placeholder-zinc-500"
              placeholder="Enter blog description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="mt-2 block w-full rounded-md bg-zinc-700 border border-zinc-600 focus:border-zinc-500 focus:ring focus:ring-zinc-500 text-zinc-100 placeholder-zinc-500"
              placeholder="Enter blog category"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-zinc-600 text-zinc-100 py-2 px-4 rounded-md hover:bg-zinc-500 focus:outline-none focus:ring focus:ring-zinc-400"
          >
            Add Blog
          </button>
        </form>

        {/* Blog List */}
        <h2 className="text-2xl font-bold mb-4">All Blogs</h2>

        <ul className="space-y-4">
          <li className="p-4 bg-zinc-700 rounded-lg shadow-sm border border-zinc-600">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-zinc-100">
                You will get Custom LMS Development | MERN Stack & Next.js
                Website | E-Learning Platform
              </h3>

              <div className="flex gap-1">
                <button className="py-2 px-6  bg-zinc-950 rounded-xl hover:bg-zinc-900 text-zinc-100">
                  Delete
                </button>
                <button className="py-2 px-6  bg-zinc-950 rounded-xl hover:bg-zinc-900 text-zinc-100">
                  Edit
                </button>
              </div>
            </div>
            <p className="text-zinc-300 mt-2">
              We help you build the perfect Learning Management System (LMS) for
              your educational needs. Whether you want to create a course
              marketplace like Udemy or a learning platform for students and
              teachers, we can help. Our LMS is fully responsive, which means it
              works great on all devices. We use the MERN stack and Next.js to
              make sure your platform is fast, secure, and easy to find online.
              Our LMS includes everything you need for a smooth learning
              experience. It offers secure logins, video hosting, payment
              integration, quizzes, certificates, and reports to track progress.
              We also create separate areas for Admins, Students, and
              Instructors to manage everything easily. Whether you’re starting a
              course marketplace or running an educational institution, our LMS
              is scalable and ready to grow with you. We follow clear process to
              build your platform: understanding your needs, designing your
              solution, building your platform, and offering ongoing support. We
              answer common questions like how your platform will grow and how
              we keep it secure. Our goal is to make the process easy and help
              you create a powerful LMS for your learners. Let's work together
              to bring your e-learning project to life!
            </p>
            <span className="inline-block mt-2 text-sm text-zinc-400 font-medium">
              Category: JavaScript
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddBlogPage;
