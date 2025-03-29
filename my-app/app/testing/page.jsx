// // import Image from "next/image";
// // // import { button } from "@/components/ui/button";
// // import { Input } from "@/components/TestingOne";
// // import { Textarea } from "@/components/TestingTwo";
// // // import { div } from "@/components/ui/div";
// // import {
// //   Undo2,
// //   Redo2,
// //   Trash2,
// //   Upload,
// //   Bold,
// //   Italic,
// //   Type,
// //   Palette,
// // } from "lucide-react";

// // export default function SocialMediaPostCreator() {
// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
// //       <div className="relative w-full max-w-md bg-white rounded-lg overflow-hidden shadow-xl font-sans">
// //         {/* Post Image Section */}
// //         <div className="relative h-96 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 flex items-center justify-center">
// //           {/* Color splashes (decorative elements) */}
// //           <div className="absolute w-32 h-32 rounded-full bg-pink-400 opacity-70 blur-lg top-10 left-10"></div>
// //           <div className="absolute w-40 h-40 rounded-full bg-purple-400 opacity-70 blur-lg bottom-20 right-15"></div>
// //           <div className="absolute w-36 h-36 rounded-full bg-yellow-400 opacity-70 blur-lg top-1/3 right-10"></div>
// //           <div className="absolute w-28 h-28 rounded-full bg-green-400 opacity-70 blur-lg bottom-10 left-1/4"></div>

// //           {/* Main Title */}
// //           <div className="text-center px-4 z-10">
// //             <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
// //               Celebrate the Colors
// //             </h1>
// //             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
// //               of Holi at Yoyo
// //             </h2>
// //             <div className="text-6xl mb-4">💀✨</div>
// //           </div>
// //         </div>

// //         {/* Post Content Section */}
// //         <div className="p-6">
// //           {/* Description */}
// //           <p className="text-gray-700 mb-4">
// //             Join us for an unforgettable Holi celebration at Yoyo Hotels!
// //             Immerse yourself in India's vibrant Festival of Colors with
// //             traditional music, delicious food, and joyful celebrations.
// //           </p>
// //           <p className="text-gray-700 mb-6">
// //             Experience the magic of Holi with our special packages designed for
// //             international guests. Book now and get ready to create colorful
// //             memories!
// //           </p>

// //           {/* Hashtags */}
// //           <div className="flex flex-wrap gap-2 mb-6">
// //             <span className="text-sm bg-pink-100 text-pink-800 px-3 py-1 rounded-full">
// //               #HappyHoli
// //             </span>
// //             <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
// //               #FestivalOfColors
// //             </span>
// //             <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
// //               #Holi2025
// //             </span>
// //             <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
// //               #YoyofJotels
// //             </span>
// //             <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
// //               #TravelIndia
// //             </span>
// //           </div>

// //           {/* Call to Action */}
// //           <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
// //             Book Your Holi Experience Now
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function InstagramPostCreator() {
//   const [postTitle, setPostTitle] = useState(
//     "Celebrate the Colors of Holi at Yoyo 💫"
//   );
//   const [hashtags, setHashtags] = useState(
//     "#HappyHoli #FestivalOfColors #Holi2025 #YogoHotels #TravelIndia"
//   );
//   const [postDescription, setPostDescription] = useState(
//     "Create a vibrant and engaging Holi celebration post for Yogo Hotels. Emphasize the cultural experience, inviting foreigners to join in and immerse themselves in India's Festival of Colors. Use vibrant and eye-catching brand colors and fonts. Add a call-to-action, encouraging them to book their stay at Yogo Hotels to celebrate Holi in its most authentic form."
//   );
//   const [targetAudience, setTargetAudience] = useState("Foreigners");

//   const filters = [
//     { name: "Vibrant", img: "/filter-vibrant.jpg" },
//     { name: "Contrasty", img: "/filter-contrasty.jpg" },
//     { name: "Sunset", img: "/filter-sunset.jpg" },
//     { name: "Pastel", img: "/filter-pastel.jpg" },
//   ];

//   const [selectedFilter, setSelectedFilter] = useState("Vibrant");
//   const [text, setText] = useState("");
//   const [textColor, setTextColor] = useState("#000000");
//   const [fontSize, setFontSize] = useState(16);
//   const [isBold, setIsBold] = useState(false);

//   return (
//     <div className="flex w-full h-screen bg-white">
//       {/* Left Panel */}
//       <div className="w-64 p-4 border-r border-gray-200 flex flex-col">
//         <div className="mb-4">
//           <h3 className="font-medium mb-2">Post Title</h3>
//           <input
//             type="text"
//             value={postTitle}
//             onChange={(e) => setPostTitle(e.target.value)}
//             className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm"
//           />
//         </div>

//         <div className="mb-4">
//           <h3 className="font-medium mb-2">Hashtags</h3>
//           <input
//             type="text"
//             value={hashtags}
//             onChange={(e) => setHashtags(e.target.value)}
//             className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm"
//           />
//         </div>

//         <div className="mb-4">
//           <h3 className="font-medium mb-2">Post Description</h3>
//           <textarea
//             value={postDescription}
//             onChange={(e) => setPostDescription(e.target.value)}
//             className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm h-32 resize-none"
//           />
//         </div>

//         <div className="mb-4">
//           <h3 className="font-medium mb-2">Target Audience</h3>
//           <input
//             type="text"
//             value={targetAudience}
//             onChange={(e) => setTargetAudience(e.target.value)}
//             className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm"
//           />
//         </div>

//         <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium">
//           Generate ✨
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 relative">
//         <div className="text-center mb-2 text-gray-500 text-sm">
//           Instagram Post{" "}
//           <span className="px-1 py-0.5 bg-gray-200 rounded text-xs">
//             MOCKUPS
//           </span>
//         </div>

//         <div className="w-80 h-80 bg-white shadow-md relative overflow-hidden">
//           <Image
//             src="/holi-celebration.jpg"
//             alt="Instagram post preview"
//             width={320}
//             height={320}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute bottom-4 flex space-x-2">
//           <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
//             <svg
//               className="w-4 h-4 mr-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M10 19l-7-7m0 0l7-7m-7 7h18"
//               />
//             </svg>
//             Undo
//           </button>

//           <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
//             <svg
//               className="w-4 h-4 mr-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               />
//             </svg>
//             Redo
//           </button>

//           <button className="flex items-center px-3 py-2 bg-red-100 text-red-600 border border-red-200 rounded hover:bg-red-200">
//             <svg
//               className="w-4 h-4 mr-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//               />
//             </svg>
//             Delete selected
//           </button>
//         </div>
//       </div>

//       {/* Right Panel */}
//       <div className="w-64 p-4 border-l border-gray-200">
//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Filters</h3>
//           <div className="grid grid-cols-4 gap-2">
//             {filters.map((filter) => (
//               <div key={filter.name} className="flex flex-col items-center">
//                 <div
//                   className={`w-12 h-12 rounded overflow-hidden cursor-pointer border-2 ${
//                     selectedFilter === filter.name
//                       ? "border-blue-500"
//                       : "border-transparent"
//                   }`}
//                 >
//                   <Image
//                     src={filter.img}
//                     alt={filter.name}
//                     width={48}
//                     height={48}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <span className="text-xs mt-1">{filter.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Text</h3>
//           <input
//             type="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Enter text"
//             className="w-full p-2 border border-gray-300 rounded mb-2"
//           />

//           <div className="flex items-center justify-between mt-4">
//             <input
//               type="range"
//               min="10"
//               max="30"
//               value={fontSize}
//               onChange={(e) => setFontSize(parseInt(e.target.value))}
//               className="w-1/2"
//             />

//             <button
//               onClick={() => setIsBold(!isBold)}
//               className={`px-2 py-1 ${
//                 isBold ? "bg-gray-200" : "bg-white"
//               } border border-gray-300 rounded`}
//             >
//               <span className="font-bold">T</span>
//             </button>

//             <button className="p-1 border border-gray-300 rounded">
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
//                 />
//               </svg>
//             </button>

//             <button className="w-6 h-6 bg-green-500 rounded border border-gray-300"></button>
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Stickers</h3>
//           <div className="grid grid-cols-4 gap-2">
//             {[1, 2, 3, 4].map((sticker) => (
//               <div key={sticker} className="cursor-pointer">
//                 <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
//                   <Image
//                     src="/sticker-sample.jpg"
//                     alt={`Sticker ${sticker}`}
//                     width={40}
//                     height={40}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Image</h3>
//           <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded hover:bg-gray-50">
//             <svg
//               className="w-4 h-4 mr-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
//               />
//             </svg>
//             Choose from computer
//           </button>
//         </div>

//         <button className="mt-auto w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded font-medium flex items-center justify-center">
//           <svg
//             className="w-4 h-4 mr-2"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//             />
//           </svg>
//           Clear canvas
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function InstagramPostCreator({
  productName,
  caption,
  hashtags,
  imageUrl,
}) {
  const [postTitle, setPostTitle] = useState(
    "Celebrate the Colors of Holi at Yoyo 💫"
  );
  const [hashtags, setHashtags] = useState(
    "#HappyHoli #FestivalOfColors #Holi2025 #YogoHotels #TravelIndia"
  );
  const [postDescription, setPostDescription] = useState(
    "Create a vibrant and engaging Holi celebration post for Yogo Hotels. Emphasize the cultural experience, inviting foreigners to join in and immerse themselves in India's Festival of Colors. Use vibrant and eye-catching brand colors and fonts. Add a call-to-action, encouraging them to book their stay at Yogo Hotels to celebrate Holi in its most authentic form."
  );
  const [targetAudience, setTargetAudience] = useState("Foreigners");

  const filters = [
    { name: "Vibrant", img: "/filter-vibrant.jpg" },
    { name: "Contrasty", img: "/filter-contrasty.jpg" },
    { name: "Sunset", img: "/filter-sunset.jpg" },
    { name: "Pastel", img: "/filter-pastel.jpg" },
  ];

  const [selectedFilter, setSelectedFilter] = useState("Vibrant");
  const [text, setText] = useState("");
  //   const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(16);
  const [isBold, setIsBold] = useState(false);

  const canvasRef = useRef(null);
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [history, setHistory] = useState([]);
  const MAX_HISTORY_LENGTH = 20;

  // Form state
  const [editedCaption, setEditedCaption] = useState(caption);
  const [editedHashtags, setEditedHashtags] = useState(hashtags);

  // Control states
  const [bgColor, setBgColor] = useState("#ffffff");
  const [customText, setCustomText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [textSize, setTextSize] = useState(20);
  const [currentFilter, setCurrentFilter] = useState("none");

  // Save current state to history
  const saveState = () => {
    setHistory((prev) => {
      const newHistory = [...prev];
      if (newHistory.length >= MAX_HISTORY_LENGTH) {
        newHistory.shift();
      }
      newHistory.push(JSON.stringify(elements));
      return newHistory;
    });
  };

  // Undo functionality
  const undo = () => {
    if (history.length > 1) {
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory.pop();
        return newHistory;
      });
      setElements(JSON.parse(history[history.length - 2]));
    } else {
      alert("No more states to undo.");
    }
  };

  // Draw the canvas
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply filter
    ctx.filter = currentFilter === "none" ? "none" : `${currentFilter}(100%)`;

    // Draw background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw all elements
    elements.forEach((element) => {
      if (element.type === "image") {
        ctx.drawImage(
          element.img,
          element.x,
          element.y,
          element.width,
          element.height
        );
      } else if (element.type === "text") {
        ctx.fillStyle = element.color;
        ctx.font = element.font;
        ctx.fillText(element.text, element.x, element.y);
      }
    });

    // Draw selection outline and resize handle
    if (selectedElement && selectedElement.type === "image") {
      ctx.strokeStyle = "#28a745";
      ctx.strokeRect(
        selectedElement.x,
        selectedElement.y,
        selectedElement.width,
        selectedElement.height
      );

      // Draw resize handle
      ctx.fillStyle = "#28a745";
      ctx.fillRect(
        selectedElement.x + selectedElement.width - 5,
        selectedElement.y + selectedElement.height - 5,
        10,
        10
      );
    }
  };

  // Add text to canvas
  const addText = () => {
    if (!customText.trim()) return;

    const newElement = {
      type: "text",
      text: customText,
      x: 50,
      y: 50,
      font: `bold ${textSize}px Arial`,
      color: textColor,
      size: textSize,
    };

    setElements((prev) => [...prev, newElement]);
    setCustomText("");
    saveState();
  };

  // Handle logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const logoImg = new Image();
      logoImg.src = e.target.result;
      logoImg.onload = () => {
        const newElement = {
          type: "image",
          img: logoImg,
          x: 100,
          y: 100,
          width: 100,
          height: 100,
        };
        setElements((prev) => [...prev, newElement]);
        saveState();
      };
    };
    reader.readAsDataURL(file);
  };

  // Add sticker
  const addSticker = (stickerUrl) => {
    const stickerImg = new Image();
    stickerImg.src = stickerUrl;
    stickerImg.onload = () => {
      const newElement = {
        type: "image",
        img: stickerImg,
        x: 100,
        y: 100,
        width: 100,
        height: 100,
      };
      setElements((prev) => [...prev, newElement]);
      saveState();
    };
  };

  // Apply filter
  const applyFilter = (filter) => {
    setCurrentFilter(filter);
  };

  // Remove selected element
  const removeSelected = () => {
    if (selectedElement) {
      setElements((prev) => prev.filter((el) => el !== selectedElement));
      setSelectedElement(null);
      saveState();
    }
  };

  // Mouse event handlers
  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const ctx = canvas.getContext("2d");

    // Check for resize handle
    if (selectedElement && selectedElement.type === "image") {
      const handleX = selectedElement.x + selectedElement.width;
      const handleY = selectedElement.y + selectedElement.height;
      if (
        mouseX >= handleX - 10 &&
        mouseX <= handleX + 10 &&
        mouseY >= handleY - 10 &&
        mouseY <= handleY + 10
      ) {
        setResizing(true);
        return;
      }
    }

    // Check for element selection
    for (let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i];

      if (element.type === "image") {
        if (
          mouseX >= element.x &&
          mouseX <= element.x + element.width &&
          mouseY >= element.y &&
          mouseY <= element.y + element.height
        ) {
          setSelectedElement(element);
          setOffset({ x: mouseX - element.x, y: mouseY - element.y });
          setDragging(true);
          return;
        }
      } else if (element.type === "text") {
        ctx.font = element.font;
        const textWidth = ctx.measureText(element.text).width;
        if (
          mouseX >= element.x &&
          mouseX <= element.x + textWidth &&
          mouseY >= element.y - element.size &&
          mouseY <= element.y
        ) {
          setSelectedElement(element);
          setOffset({ x: mouseX - element.x, y: mouseY - element.y });
          setDragging(true);
          return;
        }
      }
    }

    // If clicked on empty space, deselect
    setSelectedElement(null);
  };

  const handleMouseMove = (e) => {
    if (!(dragging || resizing) || !selectedElement) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (dragging) {
      const updatedElement = {
        ...selectedElement,
        x: mouseX - offset.x,
        y: mouseY - offset.y,
      };

      setElements((prev) =>
        prev.map((el) => (el === selectedElement ? updatedElement : el))
      );
      setSelectedElement(updatedElement);
    } else if (resizing) {
      const updatedElement = {
        ...selectedElement,
        width: mouseX - selectedElement.x,
        height: mouseY - selectedElement.y,
      };

      setElements((prev) =>
        prev.map((el) => (el === selectedElement ? updatedElement : el))
      );
      setSelectedElement(updatedElement);
    }
  };

  const handleMouseUp = () => {
    if (dragging || resizing) {
      saveState();
    }
    setDragging(false);
    setResizing(false);
  };

  // Update text properties when selected
  useEffect(() => {
    if (selectedElement && selectedElement.type === "text") {
      const updatedElement = {
        ...selectedElement,
        color: textColor,
        font: `bold ${textSize}px Arial`,
        size: textSize,
      };

      setElements((prev) =>
        prev.map((el) => (el === selectedElement ? updatedElement : el))
      );
      setSelectedElement(updatedElement);
    }
  }, [textColor, textSize]);

  // Initialize with the AI-generated image
  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const initialElements = [
        {
          type: "image",
          img: img,
          x: 0,
          y: 0,
          width: canvasRef.current.width,
          height: canvasRef.current.height,
        },
      ];
      setElements(initialElements);
      setHistory([JSON.stringify(initialElements)]);
    };
  }, [imageUrl]);

  // Redraw canvas when elements or styles change
  useEffect(() => {
    drawCanvas();
  }, [elements, bgColor, currentFilter]);

  return (
    <div className="flex flex-col w-full h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-purple-100 border-b border-purple-200">
        <div className="flex items-center text-indigo-900 font-medium">
          <span>Instagram Post</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className="flex-1 text-center font-medium text-black">
          Celebrate the Colors of Holi at Yoyo ✨
        </div>

        <button className="px-4 py-1.5 bg-blue-600 text-white rounded font-medium text-sm hover:bg-blue-700">
          Finalize Post
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 w-full">
        {/* Left Panel */}
        <div className="w-64 p-4 border-r border-gray-200 flex flex-col">
          <div className="mb-4">
            <h3 className="font-medium mb-2 text-black">Post Title</h3>
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm text-black"
            />
          </div>

          <div className="mb-4">
            <h3 className="font-medium mb-2 text-black">Hashtags</h3>
            <input
              type="text"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm text-black"
            />
          </div>

          <div className="mb-4">
            <h3 className="font-medium mb-2 text-black">Post Description</h3>
            <textarea
              value={postDescription}
              onChange={(e) => setPostDescription(e.target.value)}
              className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm h-32 resize-none text-black"
            />
          </div>

          <div className="mb-4">
            <h3 className="font-medium mb-2 text-black">Target Audience</h3>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm text-black"
            />
          </div>

          <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium">
            Generate ✨
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 relative">
          <div className="text-center mb-2 text-gray-500 text-sm">
            Instagram Post{" "}
            <span className="px-1 py-0.5 bg-gray-200 rounded text-xs">
              MOCKUPS
            </span>
          </div>

          <div className="w-80 h-80 bg-white shadow-md relative overflow-hidden">
            {/* <Image
              src="/holi-celebration.jpg"
              alt="Instagram post preview"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            /> */}

            <canvas
              ref={canvasRef}
              width={800}
              height={1000}
              className="border-4 border-gray-800 rounded-xl shadow-lg cursor-move bg-white"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            />
          </div>

          <div className="absolute bottom-4 flex space-x-2">
            <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Undo
            </button>

            <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              Redo
            </button>

            <button className="flex items-center px-3 py-2 bg-red-100 text-red-600 border border-red-200 rounded hover:bg-red-200">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete selected
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-64 p-4 border-l border-gray-200">
          <div className="mb-6">
            <h3 className="font-medium mb-2">Filters</h3>
            <div className="grid grid-cols-4 gap-2">
              {filters.map((filter) => (
                <div key={filter.name} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded overflow-hidden cursor-pointer border-2 ${
                      selectedFilter === filter.name
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={filter.img}
                      alt={filter.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs mt-1">{filter.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Text</h3>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />

            <div className="flex items-center justify-between mt-4">
              <input
                type="range"
                min="10"
                max="30"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="w-1/2"
              />

              <button
                onClick={() => setIsBold(!isBold)}
                className={`px-2 py-1 ${
                  isBold ? "bg-gray-200" : "bg-white"
                } border border-gray-300 rounded`}
              >
                <span className="font-bold">T</span>
              </button>

              <button className="p-1 border border-gray-300 rounded">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </button>

              <button className="w-6 h-6 bg-green-500 rounded border border-gray-300"></button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Stickers</h3>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((sticker) => (
                <div key={sticker} className="cursor-pointer">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                    <Image
                      src="/sticker-sample.jpg"
                      alt={`Sticker ${sticker}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Image</h3>
            <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded hover:bg-gray-50">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              Choose from computer
            </button>
          </div>

          <button className="mt-auto w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded font-medium flex items-center justify-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Clear canvas
          </button>
        </div>
      </div>
    </div>
  );
}
