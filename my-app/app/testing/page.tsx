// // // // import Image from "next/image";
// // // // // import { button } from "@/components/ui/button";
// // // // import { Input } from "@/components/TestingOne";
// // // // import { Textarea } from "@/components/TestingTwo";
// // // // // import { div } from "@/components/ui/div";
// // // // import {
// // // //   Undo2,
// // // //   Redo2,
// // // //   Trash2,
// // // //   Upload,
// // // //   Bold,
// // // //   Italic,
// // // //   Type,
// // // //   Palette,
// // // // } from "lucide-react";

// // // // export default function SocialMediaPostCreator() {
// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
// // // //       <div className="relative w-full max-w-md bg-white rounded-lg overflow-hidden shadow-xl font-sans">
// // // //         {/* Post Image Section */}
// // // //         <div className="relative h-96 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 flex items-center justify-center">
// // // //           {/* Color splashes (decorative elements) */}
// // // //           <div className="absolute w-32 h-32 rounded-full bg-pink-400 opacity-70 blur-lg top-10 left-10"></div>
// // // //           <div className="absolute w-40 h-40 rounded-full bg-purple-400 opacity-70 blur-lg bottom-20 right-15"></div>
// // // //           <div className="absolute w-36 h-36 rounded-full bg-yellow-400 opacity-70 blur-lg top-1/3 right-10"></div>
// // // //           <div className="absolute w-28 h-28 rounded-full bg-green-400 opacity-70 blur-lg bottom-10 left-1/4"></div>

// // // //           {/* Main Title */}
// // // //           <div className="text-center px-4 z-10">
// // // //             <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
// // // //               Celebrate the Colors
// // // //             </h1>
// // // //             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
// // // //               of Holi at Yoyo
// // // //             </h2>
// // // //             <div className="text-6xl mb-4">💀✨</div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Post Content Section */}
// // // //         <div className="p-6">
// // // //           {/* Description */}
// // // //           <p className="text-gray-700 mb-4">
// // // //             Join us for an unforgettable Holi celebration at Yoyo Hotels!
// // // //             Immerse yourself in India's vibrant Festival of Colors with
// // // //             traditional music, delicious food, and joyful celebrations.
// // // //           </p>
// // // //           <p className="text-gray-700 mb-6">
// // // //             Experience the magic of Holi with our special packages designed for
// // // //             international guests. Book now and get ready to create colorful
// // // //             memories!
// // // //           </p>

// // // //           {/* Hashtags */}
// // // //           <div className="flex flex-wrap gap-2 mb-6">
// // // //             <span className="text-sm bg-pink-100 text-pink-800 px-3 py-1 rounded-full">
// // // //               #HappyHoli
// // // //             </span>
// // // //             <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
// // // //               #FestivalOfColors
// // // //             </span>
// // // //             <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
// // // //               #Holi2025
// // // //             </span>
// // // //             <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
// // // //               #YoyofJotels
// // // //             </span>
// // // //             <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
// // // //               #TravelIndia
// // // //             </span>
// // // //           </div>

// // // //           {/* Call to Action */}
// // // //           <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
// // // //             Book Your Holi Experience Now
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState } from "react";
// // // import Image from "next/image";

// // // export default function InstagramPostCreator() {
// // //   const [postTitle, setPostTitle] = useState(
// // //     "Celebrate the Colors of Holi at Yoyo 💫"
// // //   );
// // //   const [hashtags, setHashtags] = useState(
// // //     "#HappyHoli #FestivalOfColors #Holi2025 #YogoHotels #TravelIndia"
// // //   );
// // //   const [postDescription, setPostDescription] = useState(
// // //     "Create a vibrant and engaging Holi celebration post for Yogo Hotels. Emphasize the cultural experience, inviting foreigners to join in and immerse themselves in India's Festival of Colors. Use vibrant and eye-catching brand colors and fonts. Add a call-to-action, encouraging them to book their stay at Yogo Hotels to celebrate Holi in its most authentic form."
// // //   );
// // //   const [targetAudience, setTargetAudience] = useState("Foreigners");

// // //   const filters = [
// // //     { name: "Vibrant", img: "/filter-vibrant.jpg" },
// // //     { name: "Contrasty", img: "/filter-contrasty.jpg" },
// // //     { name: "Sunset", img: "/filter-sunset.jpg" },
// // //     { name: "Pastel", img: "/filter-pastel.jpg" },
// // //   ];

// // //   const [selectedFilter, setSelectedFilter] = useState("Vibrant");
// // //   const [text, setText] = useState("");
// // //   const [textColor, setTextColor] = useState("#000000");
// // //   const [fontSize, setFontSize] = useState(16);
// // //   const [isBold, setIsBold] = useState(false);

// // //   return (
// // //     <div className="flex w-full h-screen bg-white">
// // //       {/* Left Panel */}
// // //       <div className="w-64 p-4 border-r border-gray-200 flex flex-col">
// // //         <div className="mb-4">
// // //           <h3 className="font-medium mb-2">Post Title</h3>
// // //           <input
// // //             type="text"
// // //             value={postTitle}
// // //             onChange={(e) => setPostTitle(e.target.value)}
// // //             className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm"
// // //           />
// // //         </div>

// // //         <div className="mb-4">
// // //           <h3 className="font-medium mb-2">Hashtags</h3>
// // //           <input
// // //             type="text"
// // //             value={hashtags}
// // //             onChange={(e) => setHashtags(e.target.value)}
// // //             className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm"
// // //           />
// // //         </div>

// // //         <div className="mb-4">
// // //           <h3 className="font-medium mb-2">Post Description</h3>
// // //           <textarea
// // //             value={postDescription}
// // //             onChange={(e) => setPostDescription(e.target.value)}
// // //             className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm h-32 resize-none"
// // //           />
// // //         </div>

// // //         <div className="mb-4">
// // //           <h3 className="font-medium mb-2">Target Audience</h3>
// // //           <input
// // //             type="text"
// // //             value={targetAudience}
// // //             onChange={(e) => setTargetAudience(e.target.value)}
// // //             className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm"
// // //           />
// // //         </div>

// // //         <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium">
// // //           Generate ✨
// // //         </button>
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 relative">
// // //         <div className="text-center mb-2 text-gray-500 text-sm">
// // //           Instagram Post{" "}
// // //           <span className="px-1 py-0.5 bg-gray-200 rounded text-xs">
// // //             MOCKUPS
// // //           </span>
// // //         </div>

// // //         <div className="w-80 h-80 bg-white shadow-md relative overflow-hidden">
// // //           <Image
// // //             src="/holi-celebration.jpg"
// // //             alt="Instagram post preview"
// // //             width={320}
// // //             height={320}
// // //             className="w-full h-full object-cover"
// // //           />
// // //         </div>

// // //         <div className="absolute bottom-4 flex space-x-2">
// // //           <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
// // //             <svg
// // //               className="w-4 h-4 mr-2"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               viewBox="0 0 24 24"
// // //               xmlns="http://www.w3.org/2000/svg"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={2}
// // //                 d="M10 19l-7-7m0 0l7-7m-7 7h18"
// // //               />
// // //             </svg>
// // //             Undo
// // //           </button>

// // //           <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
// // //             <svg
// // //               className="w-4 h-4 mr-2"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               viewBox="0 0 24 24"
// // //               xmlns="http://www.w3.org/2000/svg"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={2}
// // //                 d="M14 5l7 7m0 0l-7 7m7-7H3"
// // //               />
// // //             </svg>
// // //             Redo
// // //           </button>

// // //           <button className="flex items-center px-3 py-2 bg-red-100 text-red-600 border border-red-200 rounded hover:bg-red-200">
// // //             <svg
// // //               className="w-4 h-4 mr-2"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               viewBox="0 0 24 24"
// // //               xmlns="http://www.w3.org/2000/svg"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={2}
// // //                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
// // //               />
// // //             </svg>
// // //             Delete selected
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Right Panel */}
// // //       <div className="w-64 p-4 border-l border-gray-200">
// // //         <div className="mb-6">
// // //           <h3 className="font-medium mb-2">Filters</h3>
// // //           <div className="grid grid-cols-4 gap-2">
// // //             {filters.map((filter) => (
// // //               <div key={filter.name} className="flex flex-col items-center">
// // //                 <div
// // //                   className={`w-12 h-12 rounded overflow-hidden cursor-pointer border-2 ${
// // //                     selectedFilter === filter.name
// // //                       ? "border-blue-500"
// // //                       : "border-transparent"
// // //                   }`}
// // //                 >
// // //                   <Image
// // //                     src={filter.img}
// // //                     alt={filter.name}
// // //                     width={48}
// // //                     height={48}
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                 </div>
// // //                 <span className="text-xs mt-1">{filter.name}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="mb-6">
// // //           <h3 className="font-medium mb-2">Text</h3>
// // //           <input
// // //             type="text"
// // //             value={text}
// // //             onChange={(e) => setText(e.target.value)}
// // //             placeholder="Enter text"
// // //             className="w-full p-2 border border-gray-300 rounded mb-2"
// // //           />

// // //           <div className="flex items-center justify-between mt-4">
// // //             <input
// // //               type="range"
// // //               min="10"
// // //               max="30"
// // //               value={fontSize}
// // //               onChange={(e) => setFontSize(parseInt(e.target.value))}
// // //               className="w-1/2"
// // //             />

// // //             <button
// // //               onClick={() => setIsBold(!isBold)}
// // //               className={`px-2 py-1 ${
// // //                 isBold ? "bg-gray-200" : "bg-white"
// // //               } border border-gray-300 rounded`}
// // //             >
// // //               <span className="font-bold">T</span>
// // //             </button>

// // //             <button className="p-1 border border-gray-300 rounded">
// // //               <svg
// // //                 className="w-4 h-4"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 viewBox="0 0 24 24"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth={2}
// // //                   d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
// // //                 />
// // //               </svg>
// // //             </button>

// // //             <button className="w-6 h-6 bg-green-500 rounded border border-gray-300"></button>
// // //           </div>
// // //         </div>

// // //         <div className="mb-6">
// // //           <h3 className="font-medium mb-2">Stickers</h3>
// // //           <div className="grid grid-cols-4 gap-2">
// // //             {[1, 2, 3, 4].map((sticker) => (
// // //               <div key={sticker} className="cursor-pointer">
// // //                 <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
// // //                   <Image
// // //                     src="/sticker-sample.jpg"
// // //                     alt={`Sticker ${sticker}`}
// // //                     width={40}
// // //                     height={40}
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="mb-6">
// // //           <h3 className="font-medium mb-2">Image</h3>
// // //           <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded hover:bg-gray-50">
// // //             <svg
// // //               className="w-4 h-4 mr-2"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               viewBox="0 0 24 24"
// // //               xmlns="http://www.w3.org/2000/svg"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={2}
// // //                 d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
// // //               />
// // //             </svg>
// // //             Choose from computer
// // //           </button>
// // //         </div>

// // //         <button className="mt-auto w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded font-medium flex items-center justify-center">
// // //           <svg
// // //             className="w-4 h-4 mr-2"
// // //             fill="none"
// // //             stroke="currentColor"
// // //             viewBox="0 0 24 24"
// // //             xmlns="http://www.w3.org/2000/svg"
// // //           >
// // //             <path
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               strokeWidth={2}
// // //               d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
// // //             />
// // //           </svg>
// // //           Clear canvas
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";
// // import { useRef, useEffect } from "react";

// // export default function InstagramPostCreator({
// //   productName,
// //   caption,
// //   hashtags,
// //   imageUrl,
// // }) {
// //   const [postTitle, setPostTitle] = useState(
// //     "Celebrate the Colors of Holi at Yoyo 💫"
// //   );
// //   const [hashtags, setHashtags] = useState(
// //     "#HappyHoli #FestivalOfColors #Holi2025 #YogoHotels #TravelIndia"
// //   );
// //   const [postDescription, setPostDescription] = useState(
// //     "Create a vibrant and engaging Holi celebration post for Yogo Hotels. Emphasize the cultural experience, inviting foreigners to join in and immerse themselves in India's Festival of Colors. Use vibrant and eye-catching brand colors and fonts. Add a call-to-action, encouraging them to book their stay at Yogo Hotels to celebrate Holi in its most authentic form."
// //   );
// //   const [targetAudience, setTargetAudience] = useState("Foreigners");

// //   const filters = [
// //     { name: "Vibrant", img: "/filter-vibrant.jpg" },
// //     { name: "Contrasty", img: "/filter-contrasty.jpg" },
// //     { name: "Sunset", img: "/filter-sunset.jpg" },
// //     { name: "Pastel", img: "/filter-pastel.jpg" },
// //   ];

// //   const [selectedFilter, setSelectedFilter] = useState("Vibrant");
// //   const [text, setText] = useState("");
// //   //   const [textColor, setTextColor] = useState("#000000");
// //   const [fontSize, setFontSize] = useState(16);
// //   const [isBold, setIsBold] = useState(false);

// //   const canvasRef = useRef(null);
// //   const [elements, setElements] = useState([]);
// //   const [selectedElement, setSelectedElement] = useState(null);
// //   const [dragging, setDragging] = useState(false);
// //   const [resizing, setResizing] = useState(false);
// //   const [offset, setOffset] = useState({ x: 0, y: 0 });
// //   const [history, setHistory] = useState([]);
// //   const MAX_HISTORY_LENGTH = 20;

// //   // Form state
// //   const [editedCaption, setEditedCaption] = useState(caption);
// //   const [editedHashtags, setEditedHashtags] = useState(hashtags);

// //   // Control states
// //   const [bgColor, setBgColor] = useState("#ffffff");
// //   const [customText, setCustomText] = useState("");
// //   const [textColor, setTextColor] = useState("#000000");
// //   const [textSize, setTextSize] = useState(20);
// //   const [currentFilter, setCurrentFilter] = useState("none");

// //   // Save current state to history
// //   const saveState = () => {
// //     setHistory((prev) => {
// //       const newHistory = [...prev];
// //       if (newHistory.length >= MAX_HISTORY_LENGTH) {
// //         newHistory.shift();
// //       }
// //       newHistory.push(JSON.stringify(elements));
// //       return newHistory;
// //     });
// //   };

// //   // Undo functionality
// //   const undo = () => {
// //     if (history.length > 1) {
// //       setHistory((prev) => {
// //         const newHistory = [...prev];
// //         newHistory.pop();
// //         return newHistory;
// //       });
// //       setElements(JSON.parse(history[history.length - 2]));
// //     } else {
// //       alert("No more states to undo.");
// //     }
// //   };

// //   // Draw the canvas
// //   const drawCanvas = () => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext("2d");
// //     if (!ctx) return;

// //     // Clear canvas
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);

// //     // Apply filter
// //     ctx.filter = currentFilter === "none" ? "none" : `${currentFilter}(100%)`;

// //     // Draw background
// //     ctx.fillStyle = bgColor;
// //     ctx.fillRect(0, 0, canvas.width, canvas.height);

// //     // Draw all elements
// //     elements.forEach((element) => {
// //       if (element.type === "image") {
// //         ctx.drawImage(
// //           element.img,
// //           element.x,
// //           element.y,
// //           element.width,
// //           element.height
// //         );
// //       } else if (element.type === "text") {
// //         ctx.fillStyle = element.color;
// //         ctx.font = element.font;
// //         ctx.fillText(element.text, element.x, element.y);
// //       }
// //     });

// //     // Draw selection outline and resize handle
// //     if (selectedElement && selectedElement.type === "image") {
// //       ctx.strokeStyle = "#28a745";
// //       ctx.strokeRect(
// //         selectedElement.x,
// //         selectedElement.y,
// //         selectedElement.width,
// //         selectedElement.height
// //       );

// //       // Draw resize handle
// //       ctx.fillStyle = "#28a745";
// //       ctx.fillRect(
// //         selectedElement.x + selectedElement.width - 5,
// //         selectedElement.y + selectedElement.height - 5,
// //         10,
// //         10
// //       );
// //     }
// //   };

// //   // Add text to canvas
// //   const addText = () => {
// //     if (!customText.trim()) return;

// //     const newElement = {
// //       type: "text",
// //       text: customText,
// //       x: 50,
// //       y: 50,
// //       font: `bold ${textSize}px Arial`,
// //       color: textColor,
// //       size: textSize,
// //     };

// //     setElements((prev) => [...prev, newElement]);
// //     setCustomText("");
// //     saveState();
// //   };

// //   // Handle logo upload
// //   const handleLogoUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     const reader = new FileReader();
// //     reader.onload = (e) => {
// //       const logoImg = new Image();
// //       logoImg.src = e.target.result;
// //       logoImg.onload = () => {
// //         const newElement = {
// //           type: "image",
// //           img: logoImg,
// //           x: 100,
// //           y: 100,
// //           width: 100,
// //           height: 100,
// //         };
// //         setElements((prev) => [...prev, newElement]);
// //         saveState();
// //       };
// //     };
// //     reader.readAsDataURL(file);
// //   };

// //   // Add sticker
// //   const addSticker = (stickerUrl) => {
// //     const stickerImg = new Image();
// //     stickerImg.src = stickerUrl;
// //     stickerImg.onload = () => {
// //       const newElement = {
// //         type: "image",
// //         img: stickerImg,
// //         x: 100,
// //         y: 100,
// //         width: 100,
// //         height: 100,
// //       };
// //       setElements((prev) => [...prev, newElement]);
// //       saveState();
// //     };
// //   };

// //   // Apply filter
// //   const applyFilter = (filter) => {
// //     setCurrentFilter(filter);
// //   };

// //   // Remove selected element
// //   const removeSelected = () => {
// //     if (selectedElement) {
// //       setElements((prev) => prev.filter((el) => el !== selectedElement));
// //       setSelectedElement(null);
// //       saveState();
// //     }
// //   };

// //   // Mouse event handlers
// //   const handleMouseDown = (e) => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const rect = canvas.getBoundingClientRect();
// //     const mouseX = e.clientX - rect.left;
// //     const mouseY = e.clientY - rect.top;
// //     const ctx = canvas.getContext("2d");

// //     // Check for resize handle
// //     if (selectedElement && selectedElement.type === "image") {
// //       const handleX = selectedElement.x + selectedElement.width;
// //       const handleY = selectedElement.y + selectedElement.height;
// //       if (
// //         mouseX >= handleX - 10 &&
// //         mouseX <= handleX + 10 &&
// //         mouseY >= handleY - 10 &&
// //         mouseY <= handleY + 10
// //       ) {
// //         setResizing(true);
// //         return;
// //       }
// //     }

// //     // Check for element selection
// //     for (let i = elements.length - 1; i >= 0; i--) {
// //       const element = elements[i];

// //       if (element.type === "image") {
// //         if (
// //           mouseX >= element.x &&
// //           mouseX <= element.x + element.width &&
// //           mouseY >= element.y &&
// //           mouseY <= element.y + element.height
// //         ) {
// //           setSelectedElement(element);
// //           setOffset({ x: mouseX - element.x, y: mouseY - element.y });
// //           setDragging(true);
// //           return;
// //         }
// //       } else if (element.type === "text") {
// //         ctx.font = element.font;
// //         const textWidth = ctx.measureText(element.text).width;
// //         if (
// //           mouseX >= element.x &&
// //           mouseX <= element.x + textWidth &&
// //           mouseY >= element.y - element.size &&
// //           mouseY <= element.y
// //         ) {
// //           setSelectedElement(element);
// //           setOffset({ x: mouseX - element.x, y: mouseY - element.y });
// //           setDragging(true);
// //           return;
// //         }
// //       }
// //     }

// //     // If clicked on empty space, deselect
// //     setSelectedElement(null);
// //   };

// //   const handleMouseMove = (e) => {
// //     if (!(dragging || resizing) || !selectedElement) return;

// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const rect = canvas.getBoundingClientRect();
// //     const mouseX = e.clientX - rect.left;
// //     const mouseY = e.clientY - rect.top;

// //     if (dragging) {
// //       const updatedElement = {
// //         ...selectedElement,
// //         x: mouseX - offset.x,
// //         y: mouseY - offset.y,
// //       };

// //       setElements((prev) =>
// //         prev.map((el) => (el === selectedElement ? updatedElement : el))
// //       );
// //       setSelectedElement(updatedElement);
// //     } else if (resizing) {
// //       const updatedElement = {
// //         ...selectedElement,
// //         width: mouseX - selectedElement.x,
// //         height: mouseY - selectedElement.y,
// //       };

// //       setElements((prev) =>
// //         prev.map((el) => (el === selectedElement ? updatedElement : el))
// //       );
// //       setSelectedElement(updatedElement);
// //     }
// //   };

// //   const handleMouseUp = () => {
// //     if (dragging || resizing) {
// //       saveState();
// //     }
// //     setDragging(false);
// //     setResizing(false);
// //   };

// //   // Update text properties when selected
// //   useEffect(() => {
// //     if (selectedElement && selectedElement.type === "text") {
// //       const updatedElement = {
// //         ...selectedElement,
// //         color: textColor,
// //         font: `bold ${textSize}px Arial`,
// //         size: textSize,
// //       };

// //       setElements((prev) =>
// //         prev.map((el) => (el === selectedElement ? updatedElement : el))
// //       );
// //       setSelectedElement(updatedElement);
// //     }
// //   }, [textColor, textSize]);

// //   // Initialize with the AI-generated image
// //   useEffect(() => {
// //     if (!imageUrl) return;

// //     const img = new Image();
// //     img.src = imageUrl;
// //     img.onload = () => {
// //       const initialElements = [
// //         {
// //           type: "image",
// //           img: img,
// //           x: 0,
// //           y: 0,
// //           width: canvasRef.current.width,
// //           height: canvasRef.current.height,
// //         },
// //       ];
// //       setElements(initialElements);
// //       setHistory([JSON.stringify(initialElements)]);
// //     };
// //   }, [imageUrl]);

// //   // Redraw canvas when elements or styles change
// //   useEffect(() => {
// //     drawCanvas();
// //   }, [elements, bgColor, currentFilter]);

// //   return (
// //     <div className="flex flex-col w-full h-screen bg-white">
// //       {/* Top Navigation Bar */}
// //       <div className="flex items-center justify-between px-4 py-3 bg-purple-100 border-b border-purple-200">
// //         <div className="flex items-center text-indigo-900 font-medium">
// //           <span>Instagram Post</span>
// //           <svg
// //             className="w-4 h-4 ml-1"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M19 9l-7 7-7-7"
// //             />
// //           </svg>
// //         </div>

// //         <div className="flex-1 text-center font-medium text-black">
// //           Celebrate the Colors of Holi at Yoyo ✨
// //         </div>

// //         <button className="px-4 py-1.5 bg-blue-600 text-white rounded font-medium text-sm hover:bg-blue-700">
// //           Finalize Post
// //         </button>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex flex-1 w-full">
// //         {/* Left Panel */}
// //         <div className="w-64 p-4 border-r border-gray-200 flex flex-col">
// //           <div className="mb-4">
// //             <h3 className="font-medium mb-2 text-black">Post Title</h3>
// //             <input
// //               type="text"
// //               value={postTitle}
// //               onChange={(e) => setPostTitle(e.target.value)}
// //               className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm text-black"
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <h3 className="font-medium mb-2 text-black">Hashtags</h3>
// //             <input
// //               type="text"
// //               value={hashtags}
// //               onChange={(e) => setHashtags(e.target.value)}
// //               className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm text-black"
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <h3 className="font-medium mb-2 text-black">Post Description</h3>
// //             <textarea
// //               value={postDescription}
// //               onChange={(e) => setPostDescription(e.target.value)}
// //               className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm h-32 resize-none text-black"
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <h3 className="font-medium mb-2 text-black">Target Audience</h3>
// //             <input
// //               type="text"
// //               value={targetAudience}
// //               onChange={(e) => setTargetAudience(e.target.value)}
// //               className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm text-black"
// //             />
// //           </div>

// //           <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium">
// //             Generate ✨
// //           </button>
// //         </div>

// //         {/* Main Content */}
// //         <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 relative">
// //           <div className="text-center mb-2 text-gray-500 text-sm">
// //             Instagram Post{" "}
// //             <span className="px-1 py-0.5 bg-gray-200 rounded text-xs">
// //               MOCKUPS
// //             </span>
// //           </div>

// //           <div className="w-80 h-80 bg-white shadow-md relative overflow-hidden">
// //             {/* <Image
// //               src="/holi-celebration.jpg"
// //               alt="Instagram post preview"
// //               width={320}
// //               height={320}
// //               className="w-full h-full object-cover"
// //             /> */}

// //             <canvas
// //               ref={canvasRef}
// //               width={800}
// //               height={1000}
// //               className="border-4 border-gray-800 rounded-xl shadow-lg cursor-move bg-white"
// //               onMouseDown={handleMouseDown}
// //               onMouseMove={handleMouseMove}
// //               onMouseUp={handleMouseUp}
// //               onMouseLeave={handleMouseUp}
// //             />
// //           </div>

// //           <div className="absolute bottom-4 flex space-x-2">
// //             <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
// //               <svg
// //                 className="w-4 h-4 mr-2"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M10 19l-7-7m0 0l7-7m-7 7h18"
// //                 />
// //               </svg>
// //               Undo
// //             </button>

// //             <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
// //               <svg
// //                 className="w-4 h-4 mr-2"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M14 5l7 7m0 0l-7 7m7-7H3"
// //                 />
// //               </svg>
// //               Redo
// //             </button>

// //             <button className="flex items-center px-3 py-2 bg-red-100 text-red-600 border border-red-200 rounded hover:bg-red-200">
// //               <svg
// //                 className="w-4 h-4 mr-2"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
// //                 />
// //               </svg>
// //               Delete selected
// //             </button>
// //           </div>
// //         </div>

// //         {/* Right Panel */}
// //         <div className="w-64 p-4 border-l border-gray-200">
// //           <div className="mb-6">
// //             <h3 className="font-medium mb-2">Filters</h3>
// //             <div className="grid grid-cols-4 gap-2">
// //               {filters.map((filter) => (
// //                 <div key={filter.name} className="flex flex-col items-center">
// //                   <div
// //                     className={`w-12 h-12 rounded overflow-hidden cursor-pointer border-2 ${
// //                       selectedFilter === filter.name
// //                         ? "border-blue-500"
// //                         : "border-transparent"
// //                     }`}
// //                   >
// //                     <Image
// //                       src={filter.img}
// //                       alt={filter.name}
// //                       width={48}
// //                       height={48}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>
// //                   <span className="text-xs mt-1">{filter.name}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="mb-6">
// //             <h3 className="font-medium mb-2">Text</h3>
// //             <input
// //               type="text"
// //               value={text}
// //               onChange={(e) => setText(e.target.value)}
// //               placeholder="Enter text"
// //               className="w-full p-2 border border-gray-300 rounded mb-2"
// //             />

// //             <div className="flex items-center justify-between mt-4">
// //               <input
// //                 type="range"
// //                 min="10"
// //                 max="30"
// //                 value={fontSize}
// //                 onChange={(e) => setFontSize(parseInt(e.target.value))}
// //                 className="w-1/2"
// //               />

// //               <button
// //                 onClick={() => setIsBold(!isBold)}
// //                 className={`px-2 py-1 ${
// //                   isBold ? "bg-gray-200" : "bg-white"
// //                 } border border-gray-300 rounded`}
// //               >
// //                 <span className="font-bold">T</span>
// //               </button>

// //               <button className="p-1 border border-gray-300 rounded">
// //                 <svg
// //                   className="w-4 h-4"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
// //                   />
// //                 </svg>
// //               </button>

// //               <button className="w-6 h-6 bg-green-500 rounded border border-gray-300"></button>
// //             </div>
// //           </div>

// //           <div className="mb-6">
// //             <h3 className="font-medium mb-2">Stickers</h3>
// //             <div className="grid grid-cols-4 gap-2">
// //               {[1, 2, 3, 4].map((sticker) => (
// //                 <div key={sticker} className="cursor-pointer">
// //                   <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
// //                     <Image
// //                       src="/sticker-sample.jpg"
// //                       alt={`Sticker ${sticker}`}
// //                       width={40}
// //                       height={40}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="mb-6">
// //             <h3 className="font-medium mb-2">Image</h3>
// //             <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded hover:bg-gray-50">
// //               <svg
// //                 className="w-4 h-4 mr-2"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
// //                 />
// //               </svg>
// //               Choose from computer
// //             </button>
// //           </div>

// //           <button className="mt-auto w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded font-medium flex items-center justify-center">
// //             <svg
// //               className="w-4 h-4 mr-2"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
// //               />
// //             </svg>
// //             Clear canvas
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // pages/index.js
// import { useState, useRef, useEffect } from "react";
// import Head from "next/head";
// import { useRouter } from "next/router";

// export default function PostCustomizer() {
//   const router = useRouter();
//   const { product_name, image_url, caption, hashtags } = router.query;

//   // Canvas and elements state
//   const canvasRef = useRef(null);
//   const [elements, setElements] = useState([]);
//   const [selectedElement, setSelectedElement] = useState(null);
//   const [dragging, setDragging] = useState(false);
//   const [resizing, setResizing] = useState(false);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [history, setHistory] = useState([]);
//   const MAX_HISTORY_LENGTH = 20;

//   // Form controls state
//   const [formData, setFormData] = useState({
//     bgColor: "#ffffff",
//     customText: "",
//     textColor: "#000000",
//     textSize: 20,
//     imagePrompt: "",
//     filter: "none",
//   });

//   // Toast notification
//   const [toast, setToast] = useState({ show: false, message: "" });

//   // Initialize canvas with product image
//   useEffect(() => {
//     if (!image_url) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const img = new Image();
//     img.crossOrigin = "Anonymous";
//     img.src = image_url;
//     img.onload = () => {
//       const initialElements = [
//         {
//           type: "image",
//           img: img,
//           x: 0,
//           y: 0,
//           width: canvas.width,
//           height: canvas.height,
//         },
//       ];
//       setElements(initialElements);
//       saveState(initialElements);
//       drawCanvas(ctx, initialElements);
//     };
//   }, [image_url]);

//   // Save current state to history
//   const saveState = (currentElements) => {
//     setHistory((prev) => {
//       const newHistory = [...prev];
//       if (newHistory.length >= MAX_HISTORY_LENGTH) {
//         newHistory.shift();
//       }
//       newHistory.push(JSON.stringify(currentElements));
//       return newHistory;
//     });
//   };

//   // Undo functionality
//   const undo = () => {
//     if (history.length > 1) {
//       setHistory((prev) => {
//         const newHistory = [...prev];
//         newHistory.pop();
//         return newHistory;
//       });

//       const previousState = JSON.parse(history[history.length - 2]);
//       setElements(previousState);
//       drawCanvas(canvasRef.current.getContext("2d"), previousState);
//     } else {
//       showToast("No more states to undo");
//     }
//   };

//   // Draw canvas with all elements
//   const drawCanvas = (ctx, elementsToDraw) => {
//     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//     ctx.fillStyle = formData.bgColor;
//     ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

//     elementsToDraw.forEach((element) => {
//       if (element.type === "image") {
//         ctx.drawImage(
//           element.img,
//           element.x,
//           element.y,
//           element.width,
//           element.height
//         );
//       } else if (element.type === "text") {
//         ctx.fillStyle = element.color;
//         ctx.font = element.font;
//         ctx.fillText(element.text, element.x, element.y);
//       }
//     });

//     // Draw selection and resize handle
//     if (selectedElement && selectedElement.type === "image") {
//       ctx.strokeStyle = "#28a745";
//       ctx.strokeRect(
//         selectedElement.x,
//         selectedElement.y,
//         selectedElement.width,
//         selectedElement.height
//       );
//       drawResizeHandle(ctx, selectedElement);
//     }
//   };

//   // Draw resize handle
//   const drawResizeHandle = (ctx, element) => {
//     ctx.fillStyle = "#28a745";
//     ctx.fillRect(
//       element.x + element.width - 5,
//       element.y + element.height - 5,
//       10,
//       10
//     );
//   };

//   // Handle mouse down on canvas
//   const handleMouseDown = (e) => {
//     const canvas = canvasRef.current;
//     const rect = canvas.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     const ctx = canvas.getContext("2d");

//     // Check for resize handle click
//     if (selectedElement && selectedElement.type === "image") {
//       const handleX = selectedElement.x + selectedElement.width;
//       const handleY = selectedElement.y + selectedElement.height;
//       if (
//         mouseX >= handleX - 10 &&
//         mouseX <= handleX + 10 &&
//         mouseY >= handleY - 10 &&
//         mouseY <= handleY + 10
//       ) {
//         setResizing(true);
//         return;
//       }
//     }

//     // Check for element click
//     for (let i = elements.length - 1; i >= 0; i--) {
//       const element = elements[i];

//       if (element.type === "image") {
//         if (
//           mouseX >= element.x &&
//           mouseX <= element.x + element.width &&
//           mouseY >= element.y &&
//           mouseY <= element.y + element.height
//         ) {
//           setSelectedElement(element);
//           setOffset({ x: mouseX - element.x, y: mouseY - element.y });
//           setDragging(true);
//           return;
//         }
//       } else if (element.type === "text") {
//         const textWidth = ctx.measureText(element.text).width;
//         if (
//           mouseX >= element.x &&
//           mouseX <= element.x + textWidth &&
//           mouseY >= element.y - element.size &&
//           mouseY <= element.y
//         ) {
//           setSelectedElement(element);
//           setOffset({ x: mouseX - element.x, y: mouseY - element.y });
//           setDragging(true);
//           return;
//         }
//       }
//     }

//     // Clicked on empty space - deselect
//     setSelectedElement(null);
//   };

//   // Handle mouse move on canvas
//   const handleMouseMove = (e) => {
//     if (!(dragging || resizing) || !selectedElement) return;

//     const canvas = canvasRef.current;
//     const rect = canvas.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     setElements((prevElements) => {
//       const updatedElements = [...prevElements];
//       const elementIndex = updatedElements.findIndex(
//         (el) => el === selectedElement
//       );

//       if (elementIndex !== -1) {
//         if (dragging) {
//           updatedElements[elementIndex] = {
//             ...updatedElements[elementIndex],
//             x: mouseX - offset.x,
//             y: mouseY - offset.y,
//           };
//         } else if (resizing) {
//           updatedElements[elementIndex] = {
//             ...updatedElements[elementIndex],
//             width: mouseX - updatedElements[elementIndex].x,
//             height: mouseY - updatedElements[elementIndex].y,
//           };
//         }

//         setSelectedElement(updatedElements[elementIndex]);
//         drawCanvas(canvas.getContext("2d"), updatedElements);
//         return updatedElements;
//       }
//       return prevElements;
//     });
//   };

//   // Handle mouse up on canvas
//   const handleMouseUp = () => {
//     if (dragging || resizing) {
//       saveState(elements);
//     }
//     setDragging(false);
//     setResizing(false);
//   };

//   // Add text to canvas
//   const addText = () => {
//     if (!formData.customText.trim()) {
//       showToast("Please enter some text first");
//       return;
//     }

//     const newText = {
//       type: "text",
//       text: formData.customText,
//       x: 50,
//       y: 50,
//       font: `bold ${formData.textSize}px Arial`,
//       color: formData.textColor,
//       size: formData.textSize,
//     };

//     setElements((prev) => {
//       const newElements = [...prev, newText];
//       saveState(newElements);
//       drawCanvas(canvasRef.current.getContext("2d"), newElements);
//       return newElements;
//     });
//   };

//   // Handle logo upload
//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const logoImg = new Image();
//       logoImg.src = e.target.result;
//       logoImg.onload = () => {
//         const newLogo = {
//           type: "image",
//           img: logoImg,
//           x: 100,
//           y: 100,
//           width: 100,
//           height: 100,
//         };

//         setElements((prev) => {
//           const newElements = [...prev, newLogo];
//           saveState(newElements);
//           drawCanvas(canvasRef.current.getContext("2d"), newElements);
//           return newElements;
//         });
//       };
//     };
//     reader.readAsDataURL(file);
//   };

//   // Add sticker from URL
//   const addSticker = (stickerUrl) => {
//     const stickerImg = new Image();
//     stickerImg.crossOrigin = "Anonymous";
//     stickerImg.src = stickerUrl;
//     stickerImg.onload = () => {
//       const aspectRatio = stickerImg.width / stickerImg.height;
//       const defaultSize = 100;
//       const canvas = canvasRef.current;

//       const newSticker = {
//         type: "image",
//         img: stickerImg,
//         x: canvas.width / 2 - defaultSize / 2,
//         y: canvas.height / 2 - defaultSize / 2,
//         width: defaultSize,
//         height: defaultSize / aspectRatio,
//         originalWidth: defaultSize,
//         originalHeight: defaultSize / aspectRatio,
//       };

//       setElements((prev) => {
//         const newElements = [...prev, newSticker];
//         saveState(newElements);
//         drawCanvas(canvas.getContext("2d"), newElements);
//         return newElements;
//       });
//     };
//     stickerImg.onerror = () => {
//       showToast("Failed to load sticker. Please try another one.");
//     };
//   };

//   // Add custom sticker from upload
//   const addCustomSticker = (e) => {
//     const file = e.target.files[0];
//     if (!file) {
//       showToast("Please select a sticker image first");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const stickerImg = new Image();
//       stickerImg.src = e.target.result;
//       stickerImg.onload = () => {
//         const aspectRatio = stickerImg.width / stickerImg.height;
//         const defaultSize = 100;
//         const canvas = canvasRef.current;

//         const newSticker = {
//           type: "image",
//           img: stickerImg,
//           x: canvas.width / 2 - defaultSize / 2,
//           y: canvas.height / 2 - defaultSize / 2,
//           width: defaultSize,
//           height: defaultSize / aspectRatio,
//           originalWidth: defaultSize,
//           originalHeight: defaultSize / aspectRatio,
//         };

//         setElements((prev) => {
//           const newElements = [...prev, newSticker];
//           saveState(newElements);
//           drawCanvas(canvas.getContext("2d"), newElements);
//           return newElements;
//         });
//       };
//     };
//     reader.readAsDataURL(file);
//   };

//   // Apply filter to canvas
//   const applyFilter = (filter) => {
//     const ctx = canvasRef.current.getContext("2d");
//     ctx.filter = filter === "none" ? "none" : `${filter}(100%)`;
//     saveState(elements);
//     drawCanvas(ctx, elements);
//     setFormData((prev) => ({ ...prev, filter }));
//   };

//   // Remove selected element
//   const removeSelected = () => {
//     if (selectedElement) {
//       setElements((prev) => {
//         const newElements = prev.filter((el) => el !== selectedElement);
//         saveState(newElements);
//         drawCanvas(canvasRef.current.getContext("2d"), newElements);
//         return newElements;
//       });
//       setSelectedElement(null);
//     }
//   };

//   // Show toast notification
//   const showToast = (message) => {
//     setToast({ show: true, message });
//     setTimeout(() => setToast({ show: false, message: "" }), 3000);
//   };

//   // Regenerate AI image
//   const regenerateImage = async () => {
//     const prompt = formData.imagePrompt || "luxury hotel";

//     try {
//       const response = await fetch(
//         `/api/generate-image?prompt=${encodeURIComponent(prompt)}`
//       );
//       const data = await response.json();

//       const img = new Image();
//       img.crossOrigin = "Anonymous";
//       img.src = data.image_url + `?t=${new Date().getTime()}`;

//       img.onload = () => {
//         const newElements = [
//           {
//             type: "image",
//             img: img,
//             x: 0,
//             y: 0,
//             width: canvasRef.current.width,
//             height: canvasRef.current.height,
//           },
//         ];

//         setElements(newElements);
//         saveState(newElements);
//         drawCanvas(canvasRef.current.getContext("2d"), newElements);
//       };

//       img.onerror = () => {
//         showToast("Failed to regenerate the image. Please try again.");
//       };
//     } catch (error) {
//       console.error("Error generating image:", error);
//       showToast("Error generating image. Please try again.");
//     }
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     // Update selected text element if it exists
//     if (selectedElement && selectedElement.type === "text") {
//       if (name === "textColor") {
//         setSelectedElement({ ...selectedElement, color: value });
//       } else if (name === "textSize") {
//         setSelectedElement({
//           ...selectedElement,
//           size: parseInt(value),
//           font: `bold ${value}px Arial`,
//         });
//       }

//       // Redraw canvas with updated text
//       setElements((prev) => {
//         const newElements = [...prev];
//         const index = newElements.findIndex((el) => el === selectedElement);
//         if (index !== -1) {
//           newElements[index] = selectedElement;
//           drawCanvas(canvasRef.current.getContext("2d"), newElements);
//         }
//         return newElements;
//       });
//     }
//   };

//   // Save and submit the final design
//   const saveAndSubmit = async (e) => {
//     e.preventDefault();

//     // Convert canvas to data URL
//     const dataURL = canvasRef.current.toDataURL("image/png");

//     // Here you would typically send the data to your backend
//     // For demonstration, we'll just show a success message
//     showToast("Post saved successfully!");

//     // In a real app, you would submit the form data to your API
//     console.log("Final image data:", dataURL);
//     console.log("Form data:", {
//       product_name,
//       caption: e.target.edited_caption.value,
//       hashtags: e.target.edited_hashtags.value,
//       image_url: dataURL,
//     });
//   };

//   // Sticker URLs
//   const stickerUrls = [
//     "https://tse2.mm.bing.net/th?id=OIP._pVAZOev9ogoZZv4vnZpNwHaHa&pid=Api&P=0&h=180",
//     "https://tse2.mm.bing.net/th?id=OIP.zVGrIvlvG4E6CU5NoAJ0_wHaHa&pid=Api&P=0&h=180",
//     "https://cdn4.iconfinder.com/data/icons/eid-al-adha-sticker/512/Eid_al_Adha-1024.png",
//     "https://png.pngtree.com/png-vector/20210225/ourlarge/pngtree-good-friday-sticker-effect-png-image_2954971.png",
//     "https://png.pngtree.com/png-vector/20210316/ourmid/pngtree-good-friday-in-sticker-style-text-with-cross-png-image_3061898.png",
//     "https://ih1.redbubble.net/image.995690532.2605/st,small,507x507-pad,600x600,f8f8f8.jpg",
//     "https://tse3.mm.bing.net/th?id=OIP.ULe9ofA8rsdCAaXpeYtl2wHaHa&pid=Api&P=0&h=180",
//     "https://www.freepnglogos.com/uploads/holi-png/holi-color-png-holi-color-png-image-download-23.png",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
//       <Head>
//         <title>Customize Your Social Media Post</title>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
//         />
//       </Head>

//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
//           Customize Your Social Media Post
//         </h1>
//         <p className="text-lg text-gray-600 text-center mb-8">
//           Design a stunning post that will engage your audience
//         </p>

//         {/* Canvas for drawing the post */}
//         <div className="flex justify-center mb-8">
//           <canvas
//             ref={canvasRef}
//             width={800}
//             height={1000}
//             className="border-4 border-blue-500 rounded-xl shadow-xl cursor-grab hover:shadow-2xl transition-all duration-300 max-w-full bg-white"
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//           />
//         </div>

//         {/* Image generation section */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">
//             <i className="fas fa-image mr-2"></i> Image Customization
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="imagePrompt"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 <i className="fas fa-search mr-1"></i> Image Prompt
//               </label>
//               <input
//                 type="text"
//                 id="imagePrompt"
//                 name="imagePrompt"
//                 value={formData.imagePrompt}
//                 onChange={handleInputChange}
//                 placeholder="Describe the image you want..."
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <p className="text-xs text-gray-500 mt-1">
//                 Example: 'luxury beach resort at sunset'
//               </p>
//             </div>
//             <div className="flex items-end">
//               <button
//                 onClick={regenerateImage}
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center"
//               >
//                 <i className="fas fa-sync-alt mr-2"></i> Generate New Image
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Main controls section */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">
//             <i className="fas fa-sliders-h mr-2"></i> Design Controls
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
//             <div>
//               <label
//                 htmlFor="bgColor"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 <i className="fas fa-palette mr-1"></i> Background Color
//               </label>
//               <div className="flex items-center">
//                 <input
//                   type="color"
//                   id="bgColor"
//                   name="bgColor"
//                   value={formData.bgColor}
//                   onChange={handleInputChange}
//                   className="w-16 h-10 border-2 border-gray-200 rounded-lg cursor-pointer hover:scale-105 transition-transform"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="customText"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 <i className="fas fa-font mr-1"></i> Custom Text
//               </label>
//               <input
//                 type="text"
//                 id="customText"
//                 name="customText"
//                 value={formData.customText}
//                 onChange={handleInputChange}
//                 placeholder="Enter your text here..."
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="textColor"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 <i className="fas fa-tint mr-1"></i> Text Color
//               </label>
//               <div className="flex items-center">
//                 <input
//                   type="color"
//                   id="textColor"
//                   name="textColor"
//                   value={formData.textColor}
//                   onChange={handleInputChange}
//                   className="w-16 h-10 border-2 border-gray-200 rounded-lg cursor-pointer hover:scale-105 transition-transform"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="textSize"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 <i className="fas fa-text-height mr-1"></i> Text Size:{" "}
//                 {formData.textSize}px
//               </label>
//               <input
//                 type="range"
//                 id="textSize"
//                 name="textSize"
//                 min="10"
//                 max="100"
//                 value={formData.textSize}
//                 onChange={handleInputChange}
//                 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//               />
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-4 mt-4">
//             <div className="relative overflow-hidden inline-block">
//               <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center">
//                 <i className="fas fa-upload mr-2"></i> Upload Logo
//               </button>
//               <input
//                 type="file"
//                 id="uploadLogo"
//                 accept="image/*"
//                 onChange={handleLogoUpload}
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               />
//             </div>

//             <button
//               onClick={addText}
//               className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center"
//             >
//               <i className="fas fa-plus mr-2"></i> Add Text
//             </button>

//             <button
//               onClick={removeSelected}
//               className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center"
//             >
//               <i className="fas fa-trash mr-2"></i> Remove Selected
//             </button>

//             <button
//               onClick={undo}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center"
//             >
//               <i className="fas fa-undo mr-2"></i> Undo
//             </button>
//           </div>
//         </div>

//         {/* Stickers section */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">
//             <i className="fas fa-sticky-note mr-2"></i> Stickers & Elements
//           </h2>
//           <p className="text-gray-600 mb-4">
//             Click on any sticker to add it to your design
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
//             {stickerUrls.map((url, index) => (
//               <div
//                 key={index}
//                 onClick={() => addSticker(url)}
//                 className="cursor-pointer border-2 border-transparent rounded-xl overflow-hidden aspect-square flex items-center justify-center bg-gray-50 hover:border-blue-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
//               >
//                 <img
//                   src={url}
//                   alt={`Sticker ${index}`}
//                   className="w-full h-full object-contain hover:scale-110 transition-transform"
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="mt-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">
//               <i className="fas fa-cloud-upload-alt mr-2"></i> Add Your Own
//               Sticker
//             </h3>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <div className="relative overflow-hidden flex-grow">
//                 <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
//                   <i className="fas fa-image mr-2"></i> Choose Sticker Image
//                 </button>
//                 <input
//                   type="file"
//                   id="uploadSticker"
//                   accept="image/*"
//                   onChange={addCustomSticker}
//                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                 />
//               </div>
//               <button
//                 onClick={() => document.getElementById("uploadSticker").click()}
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center sm:w-auto"
//               >
//                 <i className="fas fa-plus-circle mr-2"></i> Add Custom Sticker
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Filters section */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">
//             <i className="fas fa-magic mr-2"></i> Image Filters
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="filter"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 <i className="fas fa-filter mr-1"></i> Apply Filter
//               </label>
//               <select
//                 id="filter"
//                 name="filter"
//                 value={formData.filter}
//                 onChange={(e) => applyFilter(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="none">No Filter</option>
//                 <option value="grayscale">Grayscale</option>
//                 <option value="sepia">Sepia</option>
//                 <option value="invert">Invert Colors</option>
//                 <option value="saturate">Saturate</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Final form section */}
//         <form
//           onSubmit={saveAndSubmit}
//           className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
//         >
//           <input type="hidden" name="product_name" value={product_name} />
//           <input
//             type="hidden"
//             id="finalImage"
//             name="image_url"
//             value={image_url}
//           />

//           <div className="bg-gray-50 rounded-lg p-4 mb-6 border-l-4 border-blue-500">
//             <p className="font-medium">
//               <span className="text-blue-500">
//                 <i className="fas fa-tag mr-1"></i> Product:
//               </span>{" "}
//               {product_name}
//             </p>
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="edited_caption"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               <i className="fas fa-comment mr-1"></i> Post Caption
//             </label>
//             <textarea
//               name="edited_caption"
//               id="edited_caption"
//               rows="4"
//               defaultValue={caption}
//               placeholder="Write an engaging caption for your post..."
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             ></textarea>
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="edited_hashtags"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               <i className="fas fa-hashtag mr-1"></i> Hashtags
//             </label>
//             <textarea
//               name="edited_hashtags"
//               id="edited_hashtags"
//               rows="2"
//               defaultValue={hashtags}
//               placeholder="Add relevant hashtags to increase reach..."
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             ></textarea>
//           </div>

//           <div className="text-center mt-8">
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
//             >
//               <i className="fas fa-check-circle mr-2"></i> Finalize & Post
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Toast notification */}
//       {toast.show && (
//         <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 animate-fade-in-up">
//           {toast.message}
//         </div>
//       )}

//       {/* Add custom animations to Tailwind config */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 0.3s ease forwards;
//         }
//       `}</style>
//     </div>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Head from 'next/head';

// export default function HotelPostGenerator() {
//   const [formData, setFormData] = useState({
//     hotel_name: '',
//     hotel_type: '',
//     post_reason: [],
//     festival_name: '',
//     festival_type: '',
//     discount_percentage: '',
//     occasion_type: '',
//   });

//   const [generatedContent, setGeneratedContent] = useState({
//     description: '',
//     audience: '',
//   });

//   useEffect(() => {
//     generateDescription();
//   }, [formData]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === 'checkbox') {
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

//     let hotelName = hotel_name || '[Hotel Name]';

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
//       description = `Luxury hotel with festive decorations and cultural celebrations for ${festivalName}.`;
//       audience = "Families, Tourists, Event Planners";
//     }
//     if (post_reason.includes("Discount")) {
//       description += ` Hotel special offer with ${discountPercentage}% discount.`;
//       audience += (audience ? ", " : "") + "Budget Travelers, Corporate Clients";
//     }
//     if (post_reason.includes("Location")) {
//       description += ` New hotel location with a grand opening.`;
//       audience += (audience ? ", " : "") + "Local Residents, Travelers";
//     }
//     if (post_reason.includes("Occasion")) {
//       description += ` Elegant hotel setup for ${occasionType} celebrations.`;
//       audience += (audience ? ", " : "") + "Couples, Families, Event Organizers";
//     }

//     setGeneratedContent({
//       description,
//       audience,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log('Submitting:', {
//       product_name: formData.hotel_name,
//       description: generatedContent.description,
//       target_audience: generatedContent.audience,
//       ...formData
//     });

//     // For demo purposes, we'll just show an alert
//     alert('Post generated successfully! Check the console for the data.');
//   };

//   return (
//     <>
//       <Head>
//         <title>Hotel Social Media Post Generator</title>
//         <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
//       </Head>

//       <div className="min-h-screen flex justify-center items-center p-5 bg-gradient-to-br from-[#FFF5F6] to-[#FFEEF2] font-['Poppins']">
//         <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF4F70] to-[#4A90E2]"></div>

//           <div className="p-8 md:p-10">
//             <h2 className="text-[#FF4F70] text-2xl md:text-3xl font-bold mb-8 text-center relative pb-4">
//               ✨ Hotel Post Generator
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FF4F70] to-[#4A90E2] rounded"></span>
//             </h2>

//             <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//               {/* Hotel Name */}
//               <div className="relative">
//                 <label htmlFor="hotel_name" className="block text-gray-800 font-medium mb-2 text-sm transition-all">
//                   <i className="fas fa-hotel text-[#FF4F70] w-5 text-center mr-2"></i> Hotel Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="hotel_name"
//                   name="hotel_name"
//                   value={formData.hotel_name}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="Enter your hotel name"
//                   className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:border-[#FF6B81] focus:bg-white focus:ring-3 focus:ring-[#FF6B81]/20 transition-all font-['Poppins']"
//                 />
//               </div>

//               {/* Hotel Type */}
//               <div className="relative">
//                 <label htmlFor="hotel_type" className="block text-gray-800 font-medium mb-2 text-sm transition-all">
//                   <i className="fas fa-star text-[#FF4F70] w-5 text-center mr-2"></i> Hotel Type:
//                 </label>
//                 <select
//                   id="hotel_type"
//                   name="hotel_type"
//                   value={formData.hotel_type}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:border-[#FF6B81] focus:bg-white focus:ring-3 focus:ring-[#FF6B81]/20 transition-all font-['Poppins'] appearance-none"
//                 >
//                   <option value="" disabled selected>Select hotel type</option>
//                   <option value="Luxury">Luxury Hotel</option>
//                   <option value="Budget">Budget Hotel</option>
//                   <option value="Resort">Resort</option>
//                   <option value="Business">Business Hotel</option>
//                 </select>
//               </div>

//               {/* Purpose of Post */}
//               <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
//                 <p className="text-gray-800 font-medium mb-4 flex items-center">
//                   <i className="fas fa-bullseye text-[#FF4F70] mr-3"></i> Post Purpose (Select all that apply):
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="festival_check"
//                       name="post_reason"
//                       value="Festival"
//                       checked={formData.post_reason.includes("Festival")}
//                       onChange={handleInputChange}
//                       className="w-4 h-4 mr-3 accent-[#FF4F70]"
//                     />
//                     <label htmlFor="festival_check" className="text-sm cursor-pointer transition-all hover:text-[#FF4F70]">
//                       Festival Promotion
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="discount_check"
//                       name="post_reason"
//                       value="Discount"
//                       checked={formData.post_reason.includes("Discount")}
//                       onChange={handleInputChange}
//                       className="w-4 h-4 mr-3 accent-[#FF4F70]"
//                     />
//                     <label htmlFor="discount_check" className="text-sm cursor-pointer transition-all hover:text-[#FF4F70]">
//                       Special Discount
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="location_check"
//                       name="post_reason"
//                       value="Location"
//                       checked={formData.post_reason.includes("Location")}
//                       onChange={handleInputChange}
//                       className="w-4 h-4 mr-3 accent-[#FF4F70]"
//                     />
//                     <label htmlFor="location_check" className="text-sm cursor-pointer transition-all hover:text-[#FF4F70]">
//                       New Location
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="occasion_check"
//                       name="post_reason"
//                       value="Occasion"
//                       checked={formData.post_reason.includes("Occasion")}
//                       onChange={handleInputChange}
//                       className="w-4 h-4 mr-3 accent-[#FF4F70]"
//                     />
//                     <label htmlFor="occasion_check" className="text-sm cursor-pointer transition-all hover:text-[#FF4F70]">
//                       Special Occasion
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Additional Fields */}
//               {formData.post_reason.includes("Festival") && (
//                 <>
//                   <div className="relative">
//                     <label htmlFor="festival_name" className="block text-gray-800 font-medium mb-2 text-sm transition-all">
//                       <i className="fas fa-glass-cheers text-[#FF4F70] w-5 text-center mr-2"></i> Festival Name:
//                     </label>
//                     <input
//                       type="text"
//                       id="festival_name"
//                       name="festival_name"
//                       value={formData.festival_name}
//                       onChange={handleInputChange}
//                       placeholder="E.g. Christmas, Diwali"
//                       className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:border-[#FF6B81] focus:bg-white focus:ring-3 focus:ring-[#FF6B81]/20 transition-all font-['Poppins']"
//                     />
//                   </div>
//                   <div className="relative">
//                     <label htmlFor="festival_type" className="block text-gray-800 font-medium mb-2 text-sm transition-all">
//                       <i className="fas fa-tag text-[#FF4F70] w-5 text-center mr-2"></i> Festival Type:
//                     </label>
//                     <input
//                       type="text"
//                       id="festival_type"
//                       name="festival_type"
//                       value={formData.festival_type}
//                       onChange={handleInputChange}
//                       placeholder="E.g. Cultural, Religious"
//                       className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:border-[#FF6B81] focus:bg-white focus:ring-3 focus:ring-[#FF6B81]/20 transition-all font-['Poppins']"
//                     />
//                   </div>
//                 </>
//               )}

//               {formData.post_reason.includes("Discount") && (
//                 <div className="relative">
//                   <label htmlFor="discount_percentage" className="block text-gray-800 font-medium mb-2 text-sm transition-all">
//                     <i className="fas fa-percentage text-[#FF4F70] w-5 text-center mr-2"></i> Discount (%):
//                   </label>
//                   <input
//                     type="number"
//                     id="discount_percentage"
//                     name="discount_percentage"
//                     value={formData.discount_percentage}
//                     onChange={handleInputChange}
//                     min="0"
//                     max="100"
//                     placeholder="Enter discount percentage"
//                     className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:border-[#FF6B81] focus:bg-white focus:ring-3 focus:ring-[#FF6B81]/20 transition-all font-['Poppins']"
//                   />
//                 </div>
//               )}

//               {formData.post_reason.includes("Occasion") && (
//                 <div className="relative">
//                   <label htmlFor="occasion_type" className="block text-gray-800 font-medium mb-2 text-sm transition-all">
//                     <i className="fas fa-calendar-alt text-[#FF4F70] w-5 text-center mr-2"></i> Occasion Type:
//                   </label>
//                   <input
//                     type="text"
//                     id="occasion_type"
//                     name="occasion_type"
//                     value={formData.occasion_type}
//                     onChange={handleInputChange}
//                     placeholder="E.g. Wedding, Anniversary"
//                     className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 focus:border-[#FF6B81] focus:bg-white focus:ring-3 focus:ring-[#FF6B81]/20 transition-all font-['Poppins']"
//                   />
//                 </div>
//               )}

//               {/* Generated Post Preview */}
//               <div className="mt-4 p-5 bg-gray-50 rounded-xl border-l-4 border-[#FF4F70]">
//                 <label htmlFor="generatedDescription" className="font-semibold text-[#FF4F70] flex items-center">
//                   <i className="fas fa-align-left text-[#FF4F70] mr-2"></i> Post Preview:
//                 </label>
//                 <textarea
//                   id="generatedDescription"
//                   readOnly
//                   value={generatedContent.description}
//                   placeholder="Your generated post will appear here"
//                   className="w-full px-4 py-3.5 mt-2 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 min-h-[120px] font-['Poppins']"
//                 />

//                 <label htmlFor="generatedAudience" className="font-semibold text-[#FF4F70] flex items-center mt-4">
//                   <i className="fas fa-users text-[#FF4F70] mr-2"></i> Target Audience:
//                 </label>
//                 <input
//                   type="text"
//                   id="generatedAudience"
//                   readOnly
//                   value={generatedContent.audience}
//                   placeholder="Target audience will appear here"
//                   className="w-full px-4 py-3.5 mt-2 border-2 border-gray-200 rounded-xl text-sm outline-none bg-gray-50 font-['Poppins']"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-4 mt-4 bg-gradient-to-r from-[#FF4F70] to-[#4A90E2] text-white rounded-xl font-semibold text-base flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#FF4F70]/30 active:translate-y-0"
//               >
//                 <i className="fas fa-rocket"></i> Generate Post
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// "use client";

// import { useState } from "react";
// import { format, addDays } from "date-fns";

// interface HoliPostProps {
//   image_url: string;
//   product_name: string;
//   caption: string;
//   hashtags: string[];
// }

// export default function Final({
//   image_url,
//   product_name,
//   caption,
//   hashtags,
// }: HoliPostProps) {
//   const [scheduledDate, setScheduledDate] = useState<Date | null>(null);
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [isPosted, setIsPosted] = useState(false);
//   const [isCopied, setIsCopied] = useState(false);

//   const handleSchedule = (date: Date) => {
//     setScheduledDate(date);
//     setShowCalendar(false);
//   };

//   const handlePostNow = () => {
//     setIsPosted(true);
//     setTimeout(() => setIsPosted(false), 3000);
//   };

//   const handleCopyLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     setIsCopied(true);
//     setTimeout(() => setIsCopied(false), 2000);
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//       {/* Image */}
//       <div className="h-48 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center">
//         {image_url ? (
//           <img
//             src={image_url}
//             alt="Holi Festival"
//             className="h-full w-full object-cover"
//           />
//         ) : (
//           <span className="text-white text-xl font-bold">
//             Holi Festival Celebration
//           </span>
//         )}
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">
//           {product_name}
//         </h2>
//         <p className="text-gray-600 mb-4">{caption}</p>

//         {/* Hashtags */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {hashtags.map((tag, index) => (
//             <span key={index} className="text-blue-500 text-sm">
//               #{tag}
//             </span>
//           ))}
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-between items-center border-t pt-4">
//           <button
//             onClick={handlePostNow}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
//           >
//             {isPosted ? "Posted!" : "Start posting"}
//           </button>

//           <button
//             onClick={handleCopyLink}
//             className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md transition"
//           >
//             {isCopied ? "Copied!" : "Copy link"}
//           </button>

//           <div className="relative">
//             <button
//               onClick={() => setShowCalendar(!showCalendar)}
//               className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md transition"
//             >
//               Schedule post
//             </button>

//             {/* Calendar Popup */}
//             {showCalendar && (
//               <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 p-3 border">
//                 <div className="flex justify-between items-center mb-3">
//                   <button
//                     onClick={() => handleSchedule(new Date())}
//                     className="text-sm text-blue-500 hover:text-blue-700"
//                   >
//                     Today
//                   </button>
//                   <button
//                     onClick={() => handleSchedule(addDays(new Date(), 1))}
//                     className="text-sm text-blue-500 hover:text-blue-700"
//                   >
//                     Tomorrow
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-7 gap-1 text-center text-xs">
//                   {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
//                     <div key={day} className="font-medium text-gray-500">
//                       {day}
//                     </div>
//                   ))}

//                   {Array.from({ length: 31 }).map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => handleSchedule(addDays(new Date(), i))}
//                       className={`p-1 rounded-full hover:bg-gray-100 ${
//                         scheduledDate &&
//                         format(scheduledDate, "d") === String(i + 1) &&
//                         "bg-blue-500 text-white"
//                       }`}
//                     >
//                       {i + 1}
//                     </button>
//                   ))}
//                 </div>

//                 {scheduledDate && (
//                   <div className="mt-3 text-sm text-center">
//                     Scheduled for: {format(scheduledDate, "MMM d, yyyy")}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { format, addDays } from "date-fns";

interface HoliPostProps {
  image_url?: string;
  product_name: string;
  caption: string;
  hashtags?: string[];
}

export default function Final({
  image_url,
  product_name,
  caption,
  hashtags = [], // Provide default empty array
}: HoliPostProps) {
  const [scheduledDate, setScheduledDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSchedule = (date: Date) => {
    setScheduledDate(date);
    setShowCalendar(false);
  };

  const handlePostNow = () => {
    setIsPosted(true);
    setTimeout(() => setIsPosted(false), 3000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Image */}
      <div className="h-48 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center">
        {image_url ? (
          <img
            src={image_url}
            alt="Holi Festival"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-white text-xl font-bold">
            Holi Festival Celebration
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {product_name}
        </h2>
        <p className="text-gray-600 mb-4">{caption}</p>

        {/* Hashtags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {hashtags.map((tag, index) => (
            <span key={index} className="text-blue-500 text-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center border-t pt-4">
          <button
            onClick={handlePostNow}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
          >
            {isPosted ? "Posted!" : "Start posting"}
          </button>

          <button
            onClick={handleCopyLink}
            className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md transition"
          >
            {isCopied ? "Copied!" : "Copy link"}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md transition"
            >
              Schedule post
            </button>

            {/* Calendar Popup */}
            {showCalendar && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 p-3 border">
                <div className="flex justify-between items-center mb-3">
                  <button
                    onClick={() => handleSchedule(new Date())}
                    className="text-sm text-blue-500 hover:text-blue-700"
                  >
                    Today
                  </button>
                  <button
                    onClick={() => handleSchedule(addDays(new Date(), 1))}
                    className="text-sm text-blue-500 hover:text-blue-700"
                  >
                    Tomorrow
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div key={day} className="font-medium text-gray-500">
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: 31 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleSchedule(addDays(new Date(), i))}
                      className={`p-1 rounded-full hover:bg-gray-100 ${
                        scheduledDate &&
                        format(scheduledDate, "d") === String(i + 1) &&
                        "bg-blue-500 text-white"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                {scheduledDate && (
                  <div className="mt-3 text-sm text-center">
                    Scheduled for: {format(scheduledDate, "MMM d, yyyy")}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
