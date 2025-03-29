// components/InstagramPostGenerator.jsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const InstagramPostGenerator = () => {
  const [postTitle, setPostTitle] = useState(
    "Celebrate the Colors of Holi at Yoyo 🎨"
  );
  const [postDescription, setPostDescription] = useState(
    "Create a vibrant and engaging Holi celebration post for Yoyo Hotels. Emphasize the cultural experience, inviting foreigners to join in and immerse themselves in India's Festival of Colors. Use a warm and welcoming tone, and make sure to add a call-to-action, encouraging them to book their stay at Yoyo Hotels to celebrate Holi in the most authentic way!"
  );
  const [hashtags, setHashtags] = useState(
    "#HappyHoli #FestivalOfColors #Holi2025 #YoyoHotels #TravelIndia"
  );
  const [targetAudience, setTargetAudience] = useState("Foreigners");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      // Handle post generation response
      alert("Post generated successfully!");
    }, 1500);
  };
  const router = useRouter();

  // Serialize the post data to pass to the edit page
  // const encodedData = encodeURIComponent(JSON.stringify(postData));
  // router.push(`/edit-post?data=${encodedData}`);

  const handleEditPost = () => {
    // Get data from local storage
    const storedData = localStorage.getItem("instagramPostData");
    if (storedData) {
      const siteData = JSON.parse(storedData);
      const encodedData = encodeURIComponent(storedData); // Already a string
      router.push(`/canvas?data=${encodedData}`);
    } else {
      alert("No post data found to edit");
    }
  };

  const postData = {
    image: "/WhatsApp Image 2025-03-23 at 23.02.47.jpeg", // Replace with your actual image path
    title: "Celebrate the Colors of Holi at Yoyo 🎨🎉",
    description:
      "Dive into India's most vibrant festival at YOYO Hotels—where colors, culture, and celebrations come alive! 🌈 From traditional music to festive treats, experience Holi like never before.",
    hashtags: [
      "#HappyHoliFestivalOfColors",
      "#Holi2025",
      "#YoyoHotels",
      "#TravelIndia",
    ],
  };

  const [formData, setFormData] = useState({
    product_name: "",
    description: "",
    target_audience: "",
  });

  const [postDataJson, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const requestBody = {
        product_name: formData.product_name,
        description: formData.description,
        target_audience: formData.target_audience,
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
      localStorage.setItem("instagramPostData", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-blend-soft-light bg-center p-4 pt-40 pb-40"
      style={{
        backgroundImage: "url('/Frame 51 (3).png')",
      }}
    >
      <div className="w-full max-w-3xl ">
        <h1 className="text-5xl font-bold text-center mb-8 text-black font-satoshi">
          How it works!
        </h1>

        <div className="bg-white rounded-lg  overflow-hidden shadow-[-5px_5px_400px_rgba(89,0,255,0.4)] border-[#73757D] border-2">
          {/* Browser header */}
          <div className="bg-[#E6E9FA] p-2 flex items-center border-b-2 text-center border-[#73757D]">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"></div>
            </div>
            <p className="flex-1  text-[#001ECC] text-sm pr-15">
              Bookingjini.com
            </p>
          </div>

          {/* Content area */}
          {!postDataJson ? (
            <div className="p-6 px-15 pb-12  bg-[#FFFFFF]">
              <div className="text-center text-[#4400FF] text-xl font-bold mb-6">
                Generate an instagram post ✨
              </div>

              <form>
                <div className="mb-4">
                  <label
                    htmlFor="postTitle"
                    onSubmit={handleSubmit}
                    className="block font-semibold mb-2 text-black text-lg"
                  >
                    Post Title
                  </label>
                  <input
                    type="text"
                    id="postTitle"
                    name="product_name"
                    className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
                    value={formData.product_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="postDescription"
                    className="block font-semibold mb-2 text-black text-lg"
                  >
                    Post Description
                  </label>
                  <textarea
                    id="postDescription"
                    name="description"
                    rows="6"
                    onChange={handleChange}
                    className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
                    value={formData.description}
                  />
                </div>

                {/* <div className="mb-4">
                  <label
                    htmlFor="hashtags"
                    className="block font-semibold mb-2 text-black text-lg"
                  >
                    Target Audience
                  </label>
                  <input
                    type="text"
                    id="hashtags"
                    onChange={handleChange}
                    name="targetAudience"
                    className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
                    value={hashtags}
                  />
                </div> */}

                <div className="mb-6">
                  <label
                    htmlFor="targetAudience"
                    className="block font-semibold mb-2 text-black text-lg"
                  >
                    Target Audience
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="target_audience"
                    className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF]  rounded  text-black border-1 border-[#A6A6A6]"
                    value={formData.target_audience}
                  />
                </div>

                <div className="relative">
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-200 font-semibold"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Loading...
                      </span>
                    ) : (
                      "Generate post ✨"
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="max-w-xl mx-auto bg-white  rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-white p-2 text-center pb-8 pt-8">
                <h1 className=" text-xl font-bold text-[#4400FF] font-satoshi">
                  {postDataJson.product_name}
                </h1>
              </div>

              {/* Image */}
              <div className="relative w-full h-150 mb-5 rounder-lg">
                <Image
                  src={postDataJson.image_url}
                  alt="Holi Festival Celebration"
                  fill
                  className="object-cover rounded-lg border-2 border-[#4A4A4A]"
                />
              </div>

              {/* Description */}
              <div className="p-4  border-1 border-[#A6A6A6] rounded-lg bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] text-black">
                <p className="text-gray-700 mb-3 font-semibold">
                  {postDataJson.caption}
                </p>
                <p className="text-red-500 font-semibold">
                  {postDataJson.hashtags}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {postData.hashtags.map((hashtag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-[#001ECC] font-semibold px-2.5 py-0.5 rounded"
                    >
                      {hashtag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Edit Post Button */}
              <div className="p-4 pt-7 pb-5">
                <button
                  onClick={handleEditPost}
                  className="w-full  bg-gradient-to-r from-[#001ECC]  to-[#5900FF] transition-transform duration-300 transform hover:-translate-y-1 hover:translate-x-1 text-white py-3 rounded-lg hover:bg-purple-700  font-semibold"
                >
                  Edit Post
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstagramPostGenerator;
