import React, { useState } from "react";

const AddBlogPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Submitted:", formData);
    // You can add your logic to send the data to an API or backend here.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Add New Blog</h2>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter blog title"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter blog description"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            required
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Finance">Finance</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogPage;