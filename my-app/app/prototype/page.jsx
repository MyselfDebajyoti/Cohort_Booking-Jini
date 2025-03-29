"use client";

import Link from "next/link";
import { useState } from "react";

export default function SocialMediaPost() {
  const [formData, setFormData] = useState({
    product_name: "",
    description: "",
    target_audience: "",
  });

  const [postData, setPostData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        product_name: formData.productName,
        description: formData.productDescription,
        target_audience: formData.targetAudience,
      };

      const response = await fetch("http://127.0.0.1:8000/api/generate-post/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      console.log("Response Data:", data);
      setPostData(data);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };
  const handleEdit = () => {
    if (postData) {
      router.push({
        pathname: "/edit-post",
        query: {
          image: postData.image_url,
          description: postData.caption,
          tags: postData.hashtags,
        },
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-100">
      {postData ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center border border-red-300">
          <h2 className="text-xl font-bold text-red-600 mb-4">
            {postData.product_name}
          </h2>
          <img
            src={postData.image_url}
            alt="Product"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 mb-2">{postData.caption}</p>
          <p className="text-red-500 font-semibold">{postData.hashtags}</p>
          <button
            href="/edit-post"
            onClick={handleEdit}
            className="w-full p-2 mt-10 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition"
          >
            Edit Post
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-96 text-center border border-red-300"
        >
          <h2 className="text-xl font-bold text-red-600 mb-4">
            ✨ Generate a Social Media Post ✨
          </h2>
          <label className="block text-left text-red-500 font-medium">
            🖍 Product Name:
          </label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full p-2 border rounded-md focus:ring focus:ring-red-300 mb-4"
          />
          <label className="block text-left text-red-500 font-medium">
            🗄 Product Description:
          </label>
          <input
            type="text"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            placeholder="Enter a short description"
            className="w-full p-2 border rounded-md focus:ring focus:ring-red-300 mb-4"
          />
          <label className="block text-left text-red-500 font-medium">
            🎯 Target Audience:
          </label>
          <input
            type="text"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            placeholder="E.g., students, professionals"
            className="w-full p-2 border rounded-md focus:ring focus:ring-red-300 mb-4"
          />
          <button
            type="submit"
            className="w-full p-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition"
          >
            🚀 Generate Post
          </button>
        </form>
      )}
    </div>
  );
}
