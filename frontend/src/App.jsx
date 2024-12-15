import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddBlogPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [currentID, setCurrentID] = useState();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchAllBlog();
  }, [blogs]);

  const fetchAllBlog = async () => {
    try {
      let res = await fetch("http://localhost:5000/blogs");
      let blogs = await res.json();
      setBlogs(blogs.blog);
    } catch (error) {
      setBlogs([]);
    }
  };

  const handleClick = async () => {
    let obj = {
      title,
      description,
      category,
    };
    let post_blog = await fetch("http://localhost:5000/blog-post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj),
    });

    if (post_blog.status == 201) {
      alert("Blog Post Succesfully");

      setTitle("");
      setDescription("");
      setCategory("");
    } else {
      alert("Something went wrong");
    }
  };

  const handleDeleteBtnClick = async (id) => {
    let res = await fetch(`http://localhost:5000/delete-blog/${id}`, {
      method: "DELETE",
    });

    if (res.status == 200) {
      alert("Blog Posted Succesfully");

      setTitle("");
      setDescription("");
      setCategory("");

      setIsEdit(false);
    } else {
      alert("Something went wrong");
    }
  };

  const handleEditBtnClick = (id, index) => {
    setIsEdit(true);

    const updatedBlog = blogs[index];
    const { title, description, category } = updatedBlog;
    setTitle(title);
    setDescription(description);
    setCategory(category);

    setCurrentID(id);
  };

  const handleUpdateClick = async () => {
    const obj = {
      title,
      description,
      category,
    };

    let updateData = await fetch(
      `http://localhost:5000/edit-blog/${currentID}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(obj),
      }
    );

    if (updateData.status == 200) {
      alert("Blog Updated Succesfully");

      setTitle("");
      setDescription("");
      setCategory("");

      setIsEdit(false);
    } else {
      alert("Something went wrong");
    }

    // const blog = blogs[currentIndex];
    // blog.title = title;
    // blog.description = description;
    // blog.category = category;
    // console.log(blog);
    // const copyBlogs = [...blogs];
    // copyBlogs[currentIndex] = blog;
    // setBlogs(copyBlogs);
    // setIsEdit(false);
    // setTitle("");
    // setDescription("");
    // setCategory("");
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 p-6">
      <div className="max-w-4xl mx-auto bg-zinc-800 shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Blog</h1>

        {/* Add Blog Form */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 p-2 block w-full rounded-md bg-zinc-700 border border-zinc-600 focus:border-zinc-500 focus:ring focus:ring-zinc-500 text-zinc-100 placeholder-zinc-500"
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 p-2 block w-full rounded-md bg-zinc-700 border border-zinc-600 focus:border-zinc-500 focus:ring focus:ring-zinc-500 text-zinc-100 placeholder-zinc-500"
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="mt-2 p-2 block w-full rounded-md bg-zinc-700 border border-zinc-600 focus:border-zinc-500 focus:ring focus:ring-zinc-500 text-zinc-100 placeholder-zinc-500"
              placeholder="Enter blog category"
              required
            />
          </div>

          {isEdit ? (
            <button
              onClick={handleUpdateClick}
              // type="submit"
              className="w-full bg-zinc-600 text-zinc-100 py-2 px-4 rounded-md hover:bg-zinc-500 focus:outline-none focus:ring focus:ring-zinc-400"
            >
              Update Blog
            </button>
          ) : (
            <button
              onClick={handleClick}
              // type="submit"
              className="w-full bg-zinc-600 text-zinc-100 py-2 px-4 rounded-md hover:bg-zinc-500 focus:outline-none focus:ring focus:ring-zinc-400"
            >
              Add Blog
            </button>
          )}
        </div>

        {/* Blog List */}
        <h2 className="text-2xl font-bold mb-4">All Blogs</h2>

        <ul className="space-y-4">
          {blogs &&
            blogs.map((blog, index) => {
              return (
                <li
                  key={blog._id}
                  className="p-4 bg-zinc-700 rounded-lg shadow-sm border border-zinc-600"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {blog.title}
                    </h3>

                    <div className="flex gap-1">
                      <button
                        onClick={() => handleDeleteBtnClick(blog._id)}
                        className="py-2 px-6  bg-zinc-950 rounded-xl hover:bg-zinc-900 text-zinc-100"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEditBtnClick(blog._id, index)}
                        className="py-2 px-6  bg-zinc-950 rounded-xl hover:bg-zinc-900 text-zinc-100"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <p className="text-zinc-300 mt-2">{blog.description}</p>
                  <span className="inline-block mt-2 text-sm text-zinc-400 font-medium">
                    Category: {blog.category}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default AddBlogPage;
