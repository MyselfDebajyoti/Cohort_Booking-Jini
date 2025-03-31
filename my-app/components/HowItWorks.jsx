// components/InstagramPostGenerator.jsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const  InstagramPostGenerator = () => {
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
      router.push(`/canvas`);
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
    hotel_name: "",
    hotel_type: "",
    post_reason: [],
    festival_name: "",
    festival_type: "",
    discount_percentage: "",
    occasion_type: "",
  });

  const [generatedContent, setGeneratedContent] = useState({
    description: "",
    audience: "",
  });

  const [postDataJson, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    generateDescription();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const currentReasons = [...formData.post_reason];
      if (checked) {
        currentReasons.push(value);
      } else {
        const index = currentReasons.indexOf(value);
        if (index > -1) {
          currentReasons.splice(index, 1);
        }
      }
      setFormData({ ...formData, post_reason: currentReasons });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const generateDescription = () => {
    const {
      hotel_name,
      post_reason,
      festival_name,
      festival_type,
      discount_percentage,
      occasion_type,
    } = formData;

    let hotelName = hotel_name || "[Hotel Name]";

    // Default Description
    let description = `Experience comfort and elegance at ${hotelName} with world-class amenities and exceptional hospitality.`;
    let audience = "General Travelers, Business Executives";

    // Additional Fields
    let festivalName = festival_name || "this festival";
    let festivalType = festival_type || "festival";
    let discountPercentage = discount_percentage || "exciting";
    let occasionType = occasion_type || "special moments";

    // Dynamic Content Generation
    if (post_reason.includes("Festival")) {
      description += `Luxury hotel with festive decorations and cultural celebrations for ${festivalName}.`;
      audience += "Families, Tourists, Event Planners";
    }
    if (post_reason.includes("Discount")) {
      description += ` Hotel special offer with ${discountPercentage}% discount.`;
      audience +=
        (audience ? ", " : "") + "Budget Travelers, Corporate Clients";
    }
    if (post_reason.includes("Location")) {
      description += ` New hotel location with a grand opening.`;
      audience += (audience ? ", " : "") + "Local Residents, Travelers";
    }
    if (post_reason.includes("Occasion")) {
      description += ` Elegant hotel setup for ${occasionType} celebrations.`;
      audience +=
        (audience ? ", " : "") + "Couples, Families, Event Organizers";
    }

    setGeneratedContent({
      description,
      audience,
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const requestBody = {
        product_name: formData.hotel_name,
        description: generatedContent.description,
        target_audience: generatedContent.audience,
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you would typically send the data to your backend
  //   console.log('Submitting:', {
  //     product_name: formData.hotel_name,
  //     description: generatedContent.description,
  //     target_audience: generatedContent.audience,
  //     ...formData
  //   });

  //   // For demo purposes, we'll just show an alert
  //   alert('Post generated successfully! Check the console for the data.');
  // };

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
                    Hotel Name:
                  </label>
                  <input
                    type="text"
                    id="postTitle"
                    name="hotel_name"
                    value={formData.hotel_name}
                    className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
                    // value={formData.product_name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="hotel_type"
                    className="block font-semibold mb-2 text-black text-lg"
                  >
                    <i className="block font-semibold mb-2 text-black text-lg"></i>{" "}
                    Hotel Type:
                  </label>
                  <select
                    id="hotel_type"
                    name="hotel_type"
                    value={formData.hotel_type}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
                  >
                    <option value="" disabled selected>
                      Select hotel type
                    </option>
                    <option value="Luxury">Luxury Hotel</option>
                    <option value="Budget">Budget Hotel</option>
                    <option value="Resort">Resort</option>
                    <option value="Business">Business Hotel</option>
                  </select>
                </div>

                <p className="block font-semibold mb-3 text-black text-lg mt-3">
                  <i className="fas fa-bullseye text-[#FF4F70] "></i> Post
                  Purpose (Select all that apply):
                </p>

                <div className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6] mt-2">
                  {/* <p className="text-gray-800 font-medium mb-4 flex items-center">
                    <i className="fas fa-bullseye text-[#FF4F70] mr-3"></i> Post
                    Purpose (Select all that apply):
                  </p> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="festival_check"
                        name="post_reason"
                        value="Festival"
                        checked={formData.post_reason.includes("Festival")}
                        onChange={handleInputChange}
                        className="w-4 h-4 mr-3 accent-[#001ECC]"
                      />
                      <label
                        htmlFor="festival_check"
                        className="text-sm cursor-pointer transition-all hover:text-[#001ECC]"
                      >
                        Festival Promotion
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="discount_check"
                        name="post_reason"
                        value="Discount"
                        checked={formData.post_reason.includes("Discount")}
                        onChange={handleInputChange}
                        className="w-4 h-4 mr-3 accent-[#001ECC]"
                      />
                      <label
                        htmlFor="discount_check"
                        className="text-sm cursor-pointer transition-all hover:text-[#001ECC]"
                      >
                        Special Discount
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="location_check"
                        name="post_reason"
                        value="Location"
                        checked={formData.post_reason.includes("Location")}
                        onChange={handleInputChange}
                        className="w-4 h-4 mr-3 accent-[#001ECC]"
                      />
                      <label
                        htmlFor="location_check"
                        className="text-sm cursor-pointer transition-all hover:text-[#001ECC]"
                      >
                        New Location
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="occasion_check"
                        name="post_reason"
                        value="Occasion"
                        checked={formData.post_reason.includes("Occasion")}
                        onChange={handleInputChange}
                        className="w-4 h-4 mr-3 accent-[#001ECC]"
                      />
                      <label
                        htmlFor="occasion_check"
                        className="text-sm cursor-pointer transition-all hover:text-[#001ECC]"
                      >
                        Special Occasion
                      </label>
                    </div>
                  </div>
                </div>
                {formData.post_reason.includes("Festival") && (
                  <>
                    <div className="relative">
                      <label
                        htmlFor="festival_name"
                        className="block text-gray-800 font-medium mb-2 text-sm transition-all"
                      >
                        <i className="fas fa-glass-cheers text-[#FF4F70] w-5 text-center mr-2"></i>{" "}
                        Festival Name:
                      </label>
                      <input
                        type="text"
                        id="festival_name"
                        name="festival_name"
                        value={formData.festival_name}
                        onChange={handleInputChange}
                        placeholder="E.g. Christmas, Diwali"
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:border-[#FF6B81] focus:bg-white focus:ring-3 focus:ring-[#FF6B81]/20 transition-all font-['Poppins']"
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="festival_type"
                        className="block text-gray-800 font-medium mb-2 text-sm transition-all"
                      >
                        <i className="fas fa-tag text-[#FF4F70] w-5 text-center mr-2"></i>{" "}
                        Festival Type:
                      </label>
                      <input
                        type="text"
                        id="festival_type"
                        name="festival_type"
                        value={formData.festival_type}
                        onChange={handleInputChange}
                        placeholder="E.g. Cultural, Religious"
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:border-[#FF6B81] focus:bg-white focus:ring-3 focus:ring-[#FF6B81]/20 transition-all font-['Poppins']"
                      />
                    </div>
                  </>
                )}

                {formData.post_reason.includes("Discount") && (
                  <div className="relative">
                    <label
                      htmlFor="discount_percentage"
                      className="block text-gray-800 font-medium mb-2 text-sm transition-all"
                    >
                      <i className="fas fa-percentage text-[#FF4F70] w-5 text-center mr-2"></i>{" "}
                      Discount (%):
                    </label>
                    <input
                      type="number"
                      id="discount_percentage"
                      name="discount_percentage"
                      value={formData.discount_percentage}
                      onChange={handleInputChange}
                      min="0"
                      max="100"
                      placeholder="Enter discount percentage"
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:border-[#FF6B81] focus:bg-white focus:ring-3 focus:ring-[#FF6B81]/20 transition-all font-['Poppins']"
                    />
                  </div>
                )}

                {formData.post_reason.includes("Occasion") && (
                  <div className="relative">
                    <label
                      htmlFor="occasion_type"
                      className="block text-gray-800 font-medium mb-2 text-sm transition-all"
                    >
                      <i className="fas fa-calendar-alt text-[#FF4F70] w-5 text-center mr-2"></i>{" "}
                      Occasion Type:
                    </label>
                    <input
                      type="text"
                      id="occasion_type"
                      name="occasion_type"
                      value={formData.occasion_type}
                      onChange={handleInputChange}
                      placeholder="E.g. Wedding, Anniversary"
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:border-[#FF6B81] focus:bg-white focus:ring-3 focus:ring-[#FF6B81]/20 transition-all font-['Poppins']"
                    />
                  </div>
                )}

                <div className="mb-2 mt-3">
                  <label
                    htmlFor="postDescription"
                    className="block font-semibold mb-2 text-black text-lg"
                  >
                    Post Description:
                  </label>
                  <textarea
                    id="postDescription"
                    name="description"
                    rows="6"
                    // onChange={handleChange}
                    readOnly
                    className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
                    value={generatedContent.description}
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
                    Target Audience:
                  </label>
                  <input
                    type="text"
                    // onChange={handleChange}
                    readOnly
                    name="target_audience"
                    className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF]  rounded  text-black border-1 border-[#A6A6A6]"
                    value={generatedContent.audience}
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



// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const InstagramPostGenerator = () => {
//   const [postTitle, setPostTitle] = useState(
//     "Celebrate the Colors of Holi at Yoyo 🎨"
//   );
//   const [postDescription, setPostDescription] = useState(
//     "Create a vibrant and engaging Holi celebration post for Yoyo Hotels. Emphasize the cultural experience, inviting foreigners to join in and immerse themselves in India's Festival of Colors. Use a warm and welcoming tone, and make sure to add a call-to-action, encouraging them to book their stay at Yoyo Hotels to celebrate Holi in the most authentic way!"
//   );
//   const [hashtags, setHashtags] = useState(
//     "#HappyHoli #FestivalOfColors #Holi2025 #YoyoHotels #TravelIndia"
//   );
//   const [targetAudience, setTargetAudience] = useState("Foreigners");
//   const [isGenerating, setIsGenerating] = useState(false);

//   const handleGenerate = () => {
//     setIsGenerating(true);
//     // Simulate API call
//     setTimeout(() => {
//       setIsGenerating(false);
//       // Handle post generation response
//       alert("Post generated successfully!");
//     }, 1500);
//   };
//   const router = useRouter();

//   // Fixed: proper encoding for JSON data when navigating
//   const handleEditPost = () => {
//     // Get data from local storage
//     const storedData = localStorage.getItem("instagramPostData");
//     if (storedData) {
//       try {
//         // Parse to verify it's valid JSON
//         const siteData = JSON.parse(storedData);
        
//         // Base64 encode the data to avoid URI malformed issues
//         const encodedData = btoa(storedData);
//         router.push(`/canvas?data=${encodedData}`);
//       } catch (error) {
//         console.error("Error parsing stored data:", error);
//         alert("Invalid post data format");
//       }
//     } else {
//       alert("No post data found to edit");
//     }
//   };

//   const postData = {
//     image: "/WhatsApp Image 2025-03-23 at 23.02.47.jpeg", // Replace with your actual image path
//     title: "Celebrate the Colors of Holi at Yoyo 🎨🎉",
//     description:
//       "Dive into India's most vibrant festival at YOYO Hotels—where colors, culture, and celebrations come alive! 🌈 From traditional music to festive treats, experience Holi like never before.",
//     hashtags: [
//       "#HappyHoliFestivalOfColors",
//       "#Holi2025",
//       "#YoyoHotels",
//       "#TravelIndia",
//     ],
//   };

//   const [formData, setFormData] = useState({
//     hotel_name: "",
//     hotel_type: "",
//     post_reason: [],
//     festival_name: "",
//     festival_type: "",
//     discount_percentage: "",
//     occasion_type: "",
//   });

//   const [generatedContent, setGeneratedContent] = useState({
//     description: "",
//     audience: "",
//   });

//   const [postDataJson, setPostData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     generateDescription();
//   }, [formData]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       const currentReasons = [...formData.post_reason];
//       if (checked) {
//         currentReasons.push(value);
//       } else {
//         const index = currentReasons.indexOf(value);
//         if (index > -1) {
//           currentReasons.splice(index, 1);
//         }
//       }
//       setFormData({ ...formData, post_reason: currentReasons });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const generateDescription = () => {
//     const {
//       hotel_name,
//       post_reason,
//       festival_name,
//       festival_type,
//       discount_percentage,
//       occasion_type,
//     } = formData;

//     let hotelName = hotel_name || "[Hotel Name]";

//     // Default Description
//     let description = `Experience comfort and elegance at ${hotelName} with world-class amenities and exceptional hospitality.`;
//     let audience = "General Travelers, Business Executives";

//     // Additional Fields
//     let festivalName = festival_name || "this festival";
//     let festivalType = festival_type || "festival";
//     let discountPercentage = discount_percentage || "exciting";
//     let occasionType = occasion_type || "special moments";

//     // Dynamic Content Generation
//     if (post_reason.includes("Festival")) {
//       description += ` Luxury hotel with festive decorations and cultural celebrations for ${festivalName}.`;
//       audience += ", Families, Tourists, Event Planners";
//     }
//     if (post_reason.includes("Discount")) {
//       description += ` Hotel special offer with ${discountPercentage}% discount.`;
//       audience += ", Budget Travelers, Corporate Clients";
//     }
//     if (post_reason.includes("Location")) {
//       description += ` New hotel location with a grand opening.`;
//       audience += ", Local Residents, Travelers";
//     }
//     if (post_reason.includes("Occasion")) {
//       description += ` Elegant hotel setup for ${occasionType} celebrations.`;
//       audience += ", Couples, Families, Event Organizers";
//     }

//     setGeneratedContent({
//       description,
//       audience,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     try {
//       const requestBody = {
//         product_name: formData.hotel_name,
//         description: generatedContent.description,
//         target_audience: generatedContent.audience,
//       };

//       const response = await fetch("http://127.0.0.1:8000/api/generate-post/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(requestBody),
//       });
      
//       if (!response.ok) {
//         throw new Error(`API error: ${response.status}`);
//       }
      
//       const data = await response.json();
//       console.log("Response Data:", data);
//       setPostData(data);
      
//       // Store data safely with error handling
//       try {
//         localStorage.setItem("instagramPostData", JSON.stringify(data));
//       } catch (storageError) {
//         console.error("Error storing data in localStorage:", storageError);
//       }
//     } catch (error) {
//       console.error("Error fetching API:", error);
//       alert("Failed to generate post. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-blend-soft-light bg-center p-4 pt-40 pb-40"
//       style={{
//         backgroundImage: "url('/Frame 51 (3).png')",
//       }}
//     >
//       <div className="w-full max-w-3xl ">
//         <h1 className="text-5xl font-bold text-center mb-8 text-black font-satoshi">
//           How it works!
//         </h1>

//         <div className="bg-white rounded-lg  overflow-hidden shadow-[-5px_5px_400px_rgba(89,0,255,0.4)] border-[#73757D] border-2">
//           {/* Browser header */}
//           <div className="bg-[#E6E9FA] p-2 flex items-center border-b-2 text-center border-[#73757D]">
//             <div className="flex space-x-2 mr-4">
//               <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></div>
//               <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"></div>
//               <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"></div>
//             </div>
//             <p className="flex-1  text-[#001ECC] text-sm pr-15">
//               Bookingjini.com
//             </p>
//           </div>

//           {/* Content area */}
//           {!postDataJson ? (
//             <div className="p-6 px-15 pb-12  bg-[#FFFFFF]">
//               <div className="text-center text-[#4400FF] text-xl font-bold mb-6">
//                 Generate an instagram post ✨
//               </div>

//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="postTitle"
//                     className="block font-semibold mb-2 text-black text-lg"
//                   >
//                     Hotel Name:
//                   </label>
//                   <input
//                     type="text"
//                     id="postTitle"
//                     name="hotel_name"
//                     value={formData.hotel_name}
//                     className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div className="relative">
//                   <label
//                     htmlFor="hotel_type"
//                     className="block font-semibold mb-2 text-black text-lg"
//                   >
//                     <i className="block font-semibold mb-2 text-black text-lg"></i>{" "}
//                     Hotel Type:
//                   </label>
//                   <select
//                     id="hotel_type"
//                     name="hotel_type"
//                     value={formData.hotel_type}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
//                   >
//                     <option value="" disabled>
//                       Select hotel type
//                     </option>
//                     <option value="Luxury">Luxury Hotel</option>
//                     <option value="Budget">Budget Hotel</option>
//                     <option value="Resort">Resort</option>
//                     <option value="Business">Business Hotel</option>
//                   </select>
//                 </div>

//                 <p className="block font-semibold mb-3 text-black text-lg mt-3">
//                   <i className="fas fa-bullseye text-[#FF4F70] "></i> Post
//                   Purpose (Select all that apply):
//                 </p>

//                 <div className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6] mt-2">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="festival_check"
//                         name="post_reason"
//                         value="Festival"
//                         checked={formData.post_reason.includes("Festival")}
//                         onChange={handleInputChange}
//                         className="w-4 h-4 mr-3 accent-[#001ECC]"
//                       />
//                       <label
//                         htmlFor="festival_check"
//                         className="text-sm cursor-pointer transition-all hover:text-[#001ECC]"
//                       >
//                         Festival Promotion
//                       </label>
//                     </div>
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="discount_check"
//                         name="post_reason"
//                         value="Discount"
//                         checked={formData.post_reason.includes("Discount")}
//                         onChange={handleInputChange}
//                         className="w-4 h-4 mr-3 accent-[#001ECC]"
//                       />
//                       <label
//                         htmlFor="discount_check"
//                         className="text-sm cursor-pointer transition-all hover:text-[#001ECC]"
//                       >
//                         Special Discount
//                       </label>
//                     </div>
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="location_check"
//                         name="post_reason"
//                         value="Location"
//                         checked={formData.post_reason.includes("Location")}
//                         onChange={handleInputChange}
//                         className="w-4 h-4 mr-3 accent-[#001ECC]"
//                       />
//                       <label
//                         htmlFor="location_check"
//                         className="text-sm cursor-pointer transition-all hover:text-[#001ECC]"
//                       >
//                         New Location
//                       </label>
//                     </div>
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="occasion_check"
//                         name="post_reason"
//                         value="Occasion"
//                         checked={formData.post_reason.includes("Occasion")}
//                         onChange={handleInputChange}
//                         className="w-4 h-4 mr-3 accent-[#001ECC]"
//                       />
//                       <label
//                         htmlFor="occasion_check"
//                         className="text-sm cursor-pointer transition-all hover:text-[#001ECC]"
//                       >
//                         Special Occasion
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 {formData.post_reason.includes("Festival") && (
//                   <>
//                     <div className="relative mt-4">
//                       <label
//                         htmlFor="festival_name"
//                         className="block font-semibold mb-2 text-black text-lg"
//                       >
//                         <i className="fas fa-glass-cheers text-[#FF4F70] w-5 text-center mr-2"></i>{" "}
//                         Festival Name:
//                       </label>
//                       <input
//                         type="text"
//                         id="festival_name"
//                         name="festival_name"
//                         value={formData.festival_name}
//                         onChange={handleInputChange}
//                         placeholder="E.g. Christmas, Diwali"
//                         className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
//                       />
//                     </div>
//                     <div className="relative mt-4">
//                       <label
//                         htmlFor="festival_type"
//                         className="block font-semibold mb-2 text-black text-lg"
//                       >
//                         <i className="fas fa-tag text-[#FF4F70] w-5 text-center mr-2"></i>{" "}
//                         Festival Type:
//                       </label>
//                       <input
//                         type="text"
//                         id="festival_type"
//                         name="festival_type"
//                         value={formData.festival_type}
//                         onChange={handleInputChange}
//                         placeholder="E.g. Cultural, Religious"
//                         className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
//                       />
//                     </div>
//                   </>
//                 )}

//                 {formData.post_reason.includes("Discount") && (
//                   <div className="relative mt-4">
//                     <label
//                       htmlFor="discount_percentage"
//                       className="block font-semibold mb-2 text-black text-lg"
//                     >
//                       <i className="fas fa-percentage text-[#FF4F70] w-5 text-center mr-2"></i>{" "}
//                       Discount (%):
//                     </label>
//                     <input
//                       type="number"
//                       id="discount_percentage"
//                       name="discount_percentage"
//                       value={formData.discount_percentage}
//                       onChange={handleInputChange}
//                       min="0"
//                       max="100"
//                       placeholder="Enter discount percentage"
//                       className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
//                     />
//                   </div>
//                 )}

//                 {formData.post_reason.includes("Occasion") && (
//                   <div className="relative mt-4">
//                     <label
//                       htmlFor="occasion_type"
//                       className="block font-semibold mb-2 text-black text-lg"
//                     >
//                       <i className="fas fa-calendar-alt text-[#FF4F70] w-5 text-center mr-2"></i>{" "}
//                       Occasion Type:
//                     </label>
//                     <input
//                       type="text"
//                       id="occasion_type"
//                       name="occasion_type"
//                       value={formData.occasion_type}
//                       onChange={handleInputChange}
//                       placeholder="E.g. Wedding, Anniversary"
//                       className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
//                     />
//                   </div>
//                 )}

//                 <div className="mb-2 mt-4">
//                   <label
//                     htmlFor="postDescription"
//                     className="block font-semibold mb-2 text-black text-lg"
//                   >
//                     Post Description:
//                   </label>
//                   <textarea
//                     id="postDescription"
//                     name="description"
//                     rows="6"
//                     readOnly
//                     className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded  text-black border-1 border-[#A6A6A6]"
//                     value={generatedContent.description}
//                   />
//                 </div>

//                 <div className="mb-6 mt-4">
//                   <label
//                     htmlFor="targetAudience"
//                     className="block font-semibold mb-2 text-black text-lg"
//                   >
//                     Target Audience:
//                   </label>
//                   <input
//                     type="text"
//                     readOnly
//                     name="target_audience"
//                     className="w-full p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF]  rounded  text-black border-1 border-[#A6A6A6]"
//                     value={generatedContent.audience}
//                   />
//                 </div>

//                 <div className="relative">
//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-200 font-semibold"
//                   >
//                     {isLoading ? (
//                       <span className="flex items-center justify-center">
//                         <svg
//                           className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Loading...
//                       </span>
//                     ) : (
//                       "Generate post ✨"
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           ) : (
//             <div className="max-w-xl mx-auto bg-white  rounded-lg overflow-hidden">
//               {/* Header */}
//               <div className="bg-white p-2 text-center pb-8 pt-8">
//                 <h1 className=" text-xl font-bold text-[#4400FF] font-satoshi">
//                   {postDataJson.product_name}
//                 </h1>
//               </div>

//               {/* Image */}
//               <div className="relative w-full h-64 mb-5 rounded-lg">
//                 <Image
//                   src={postDataJson.image_url || "/placeholder-image.jpg"}
//                   alt="Post image"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg border-2 border-[#4A4A4A]"
//                 />
//               </div>

//               {/* Description */}
//               <div className="p-4  border-1 border-[#A6A6A6] rounded-lg bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] text-black">
//                 <p className="text-gray-700 mb-3 font-semibold">
//                   {postDataJson.caption || "No caption available"}
//                 </p>

//                 {/* Hashtags */}
//                 <div className="flex flex-wrap gap-2 mb-3">
//                   {postDataJson.hashtags && Array.isArray(postDataJson.hashtags) ? (
//                     postDataJson.hashtags.map((hashtag, index) => (
//                       <span
//                         key={index}
//                         className="bg-blue-100 text-[#001ECC] font-semibold px-2.5 py-0.5 rounded"
//                       >
//                         {hashtag}
//                       </span>
//                     ))
//                   ) : (
//                     <span className="text-red-500 font-semibold">
//                       {typeof postDataJson.hashtags === 'string' ? postDataJson.hashtags : "No hashtags available"}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Edit Post Button */}
//               <div className="p-4 pt-7 pb-5">
//                 <button
//                   onClick={handleEditPost}
//                   className="w-full bg-gradient-to-r from-[#001ECC] to-[#5900FF] transition-transform duration-300 transform hover:-translate-y-1 hover:translate-x-1 text-white py-3 rounded-lg hover:bg-purple-700 font-semibold"
//                 >
//                   Edit Post
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InstagramPostGenerator;
