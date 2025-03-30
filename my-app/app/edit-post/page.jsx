// "use client";
// import { useRef, useState, useEffect } from "react";
// import Link from "next/link";

// export default function SocialMediaPostEditor({
//   productName,
//   caption,
//   hashtags,
//   imageUrl,
// }) {
//   const canvasRef = useRef(null);
//   const [elements, setElements] = useState([]);
//   const [selectedElement, setSelectedElement] = useState(null);
//   const [dragging, setDragging] = useState(false);
//   const [resizing, setResizing] = useState(false);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [history, setHistory] = useState([]);
//   const MAX_HISTORY_LENGTH = 20;

//   // Form state
//   // const [editedCaption, setEditedCaption] = useState(caption);
//   // const [editedHashtags, setEditedHashtags] = useState(hashtags);

//   const [newProductName, setProductName] = useState(productName);
//   const [editedCaption, setEditedCaption] = useState(caption);
//   const [editedHashtags, setEditedHashtags] = useState(hashtags);
//   const [newImageUrl, setImageUrl] = useState(imageUrl);

//   // Control states
//   const [bgColor, setBgColor] = useState("#ffffff");
//   const [customText, setCustomText] = useState("");
//   const [textColor, setTextColor] = useState("#000000");
//   const [textSize, setTextSize] = useState(20);
//   const [currentFilter, setCurrentFilter] = useState("none");
//   const [isCanvasReady, setIsCanvasReady] = useState(false);

//   // Save current state to history
//   const saveState = () => {
//     setHistory((prev) => {
//       const newHistory = [...prev];
//       if (newHistory.length >= MAX_HISTORY_LENGTH) {
//         newHistory.shift();
//       }
//       newHistory.push(JSON.stringify(elements));
//       return newHistory;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a clean canvas to export
//     const exportCanvas = document.createElement("canvas");
//     exportCanvas.width = canvasRef.current.width;
//     exportCanvas.height = canvasRef.current.height;
//     const ctx = exportCanvas.getContext("2d");

//     // Draw background
//     ctx.fillStyle = bgColor;
//     ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

//     // Redraw all elements safely
//     for (const element of elements) {
//       if (element.type === "image") {
//         try {
//           ctx.drawImage(
//             element.img,
//             element.x,
//             element.y,
//             element.width,
//             element.height
//           );
//         } catch (error) {
//           console.warn("Couldn't draw external image:", error);
//           // Draw placeholder instead
//           ctx.fillStyle = "#cccccc";
//           ctx.fillRect(element.x, element.y, element.width, element.height);
//         }
//       } else if (element.type === "text") {
//         ctx.fillStyle = element.color;
//         ctx.font = element.font;
//         ctx.fillText(element.text, element.x, element.y);
//       }
//     }

//     // Now export the safe canvas
//     //  const editedImageUrl = exportCanvas.toDataURL('image/png');

//     // Get the current canvas as base64 image
//     // const canvas = canvasRef.current;
//     // const editedImageUrl = canvas.toDataURL("image/png");
//     const editedImageUrl = exportCanvas.toDataURL("image/png");

//     // Create data object to store in URL
//     const postData = {
//       productName,
//       caption: editedCaption,
//       hashtags: editedHashtags,
//       imageUrl: editedImageUrl,
//       elements: JSON.stringify(elements), // Optional: store canvas elements if needed
//     };

//     // Convert to URL-safe string
//     const encodedData = encodeURIComponent(JSON.stringify(postData));

//     // Navigate to finalize route with data in URL
//     router.push(`/final-post?data=${encodedData}`);
//   };

//   // Modified image loading with CORS handling
//   useEffect(() => {
//     if (!imageUrl) return;

//     const img = new Image();
//     img.crossOrigin = "Anonymous"; // This is crucial for CORS
//     img.onload = () => {
//       const ctx = canvasRef.current.getContext("2d");
//       canvasRef.current.width = img.naturalWidth;
//       canvasRef.current.height = img.naturalHeight;

//       // Initial draw
//       ctx.drawImage(img, 0, 0);
//       setIsCanvasReady(true);
//     };

//     img.onerror = () => {
//       console.error("Failed to load image");
//       setIsCanvasReady(false);
//     };

//     img.src = imageUrl;
//   }, [imageUrl]);
//   useEffect(() => {
//     if (isCanvasReady) {
//       drawCanvas();
//     }
//   }, [elements, bgColor, currentFilter, isCanvasReady]);

//   // Undo functionality
//   const undo = () => {
//     if (history.length > 1) {
//       setHistory((prev) => {
//         const newHistory = [...prev];
//         newHistory.pop();
//         return newHistory;
//       });
//       setElements(JSON.parse(history[history.length - 2]));
//     } else {
//       alert("No more states to undo.");
//     }
//   };

//   // Draw the canvas
//   const drawCanvas = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Apply filter
//     ctx.filter = currentFilter === "none" ? "none" : `${currentFilter}(100%)`;

//     // Draw background
//     ctx.fillStyle = bgColor;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Draw all elements
//     elements.forEach((element) => {
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

//     // Draw selection outline and resize handle
//     if (selectedElement && selectedElement.type === "image") {
//       ctx.strokeStyle = "#28a745";
//       ctx.strokeRect(
//         selectedElement.x,
//         selectedElement.y,
//         selectedElement.width,
//         selectedElement.height
//       );

//       // Draw resize handle
//       ctx.fillStyle = "#28a745";
//       ctx.fillRect(
//         selectedElement.x + selectedElement.width - 5,
//         selectedElement.y + selectedElement.height - 5,
//         10,
//         10
//       );
//     }
//   };

//   // Add text to canvas
//   const addText = () => {
//     if (!customText.trim()) return;

//     const newElement = {
//       type: "text",
//       text: customText,
//       x: 50,
//       y: 50,
//       font: `bold ${textSize}px Arial`,
//       color: textColor,
//       size: textSize,
//     };

//     setElements((prev) => [...prev, newElement]);
//     setCustomText("");
//     saveState();
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
//         const newElement = {
//           type: "image",
//           img: logoImg,
//           x: 100,
//           y: 100,
//           width: 100,
//           height: 100,
//         };
//         setElements((prev) => [...prev, newElement]);
//         saveState();
//       };
//     };
//     reader.readAsDataURL(file);
//   };

//   // Add sticker
//   const addSticker = (stickerUrl) => {
//     const stickerImg = new Image();
//     stickerImg.src = stickerUrl;
//     stickerImg.onload = () => {
//       const newElement = {
//         type: "image",
//         img: stickerImg,
//         x: 100,
//         y: 100,
//         width: 100,
//         height: 100,
//       };
//       setElements((prev) => [...prev, newElement]);
//       saveState();
//     };
//   };

//   // Apply filter
//   const applyFilter = (filter) => {
//     setCurrentFilter(filter);
//   };

//   // Remove selected element
//   const removeSelected = () => {
//     if (selectedElement) {
//       setElements((prev) => prev.filter((el) => el !== selectedElement));
//       setSelectedElement(null);
//       saveState();
//     }
//   };

//   // Mouse event handlers
//   const handleMouseDown = (e) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const rect = canvas.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     const ctx = canvas.getContext("2d");

//     // Check for resize handle
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

//     // Check for element selection
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
//         ctx.font = element.font;
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

//     // If clicked on empty space, deselect
//     setSelectedElement(null);
//   };

//   const handleMouseMove = (e) => {
//     if (!(dragging || resizing) || !selectedElement) return;

//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const rect = canvas.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     if (dragging) {
//       const updatedElement = {
//         ...selectedElement,
//         x: mouseX - offset.x,
//         y: mouseY - offset.y,
//       };

//       setElements((prev) =>
//         prev.map((el) => (el === selectedElement ? updatedElement : el))
//       );
//       setSelectedElement(updatedElement);
//     } else if (resizing) {
//       const updatedElement = {
//         ...selectedElement,
//         width: mouseX - selectedElement.x,
//         height: mouseY - selectedElement.y,
//       };

//       setElements((prev) =>
//         prev.map((el) => (el === selectedElement ? updatedElement : el))
//       );
//       setSelectedElement(updatedElement);
//     }
//   };

//   const handleMouseUp = () => {
//     if (dragging || resizing) {
//       saveState();
//     }
//     setDragging(false);
//     setResizing(false);
//   };

//   // Update text properties when selected
//   useEffect(() => {
//     if (selectedElement && selectedElement.type === "text") {
//       const updatedElement = {
//         ...selectedElement,
//         color: textColor,
//         font: `bold ${textSize}px Arial`,
//         size: textSize,
//       };

//       setElements((prev) =>
//         prev.map((el) => (el === selectedElement ? updatedElement : el))
//       );
//       setSelectedElement(updatedElement);
//     }
//   }, [textColor, textSize]);

//   // Initialize with the AI-generated image
//   useEffect(() => {
//     if (!imageUrl) return;

//     const img = new Image();
//     img.src = imageUrl;
//     img.onload = () => {
//       const initialElements = [
//         {
//           type: "image",
//           img: img,
//           x: 0,
//           y: 0,
//           width: canvasRef.current.width,
//           height: canvasRef.current.height,
//         },
//       ];
//       setElements(initialElements);
//       setHistory([JSON.stringify(initialElements)]);
//     };
//   }, [imageUrl]);

//   // Redraw canvas when elements or styles change
//   useEffect(() => {
//     drawCanvas();
//   }, [elements, bgColor, currentFilter]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-8 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
//           Edit Your Social Media Post
//         </h1>

//         {/* Canvas */}
//         <div className="flex justify-center mb-8">
//           <canvas
//             ref={canvasRef}
//             width={800}
//             height={1000}
//             className="border-4 border-gray-800 rounded-xl shadow-lg cursor-move bg-white"
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//           />
//         </div>

//         {/* Controls */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           <input
//             type="file"
//             id="uploadLogo"
//             accept="image/*"
//             onChange={handleLogoUpload}
//             className="hidden"
//           />
//           <label
//             htmlFor="uploadLogo"
//             className="px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
//           >
//             Upload Logo
//           </label>

//           <div className="flex items-center gap-2">
//             <label htmlFor="bgColor" className="font-medium text-gray-700">
//               Background:
//             </label>
//             <input
//               type="color"
//               id="bgColor"
//               value={bgColor}
//               onChange={(e) => setBgColor(e.target.value)}
//               className="w-10 h-10 rounded-lg border-2 border-gray-800"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               type="text"
//               id="customText"
//               placeholder="Enter text"
//               value={customText}
//               onChange={(e) => setCustomText(e.target.value)}
//               className="px-4 py-2 border-2 border-gray-800 rounded-lg"
//             />
//             <button
//               onClick={addText}
//               className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//             >
//               Add Text
//             </button>
//           </div>

//           <div className="flex items-center gap-2">
//             <label htmlFor="textColor" className="font-medium text-gray-700">
//               Text Color:
//             </label>
//             <input
//               type="color"
//               id="textColor"
//               value={textColor}
//               onChange={(e) => setTextColor(e.target.value)}
//               className="w-8 h-8 rounded-lg border-2 border-gray-800"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             <label htmlFor="textSize" className="font-medium text-gray-700">
//               Text Size:
//             </label>
//             <input
//               type="range"
//               id="textSize"
//               min="10"
//               max="100"
//               value={textSize}
//               onChange={(e) => setTextSize(parseInt(e.target.value))}
//               className="w-32"
//             />
//             <span>{textSize}</span>
//           </div>

//           <button
//             onClick={removeSelected}
//             className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Remove Selected
//           </button>

//           <button
//             onClick={undo}
//             className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Undo
//           </button>
//         </div>

//         {/* Stickers */}
//         <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-8">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//             Stickers
//           </h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             <img
//               src="https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//               alt="Sticker 1"
//               onClick={() =>
//                 addSticker(
//                   "https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//                 )
//               }
//               className="w-24 h-24 cursor-pointer border-2 border-transparent rounded-lg hover:border-green-600 hover:scale-110 transition-all"
//             />
//             <img
//               src="https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//               alt="Sticker 2"
//               onClick={() =>
//                 addSticker(
//                   "https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//                 )
//               }
//               className="w-24 h-24 cursor-pointer border-2 border-transparent rounded-lg hover:border-green-600 hover:scale-110 transition-all"
//             />
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex justify-center mb-8">
//           <div className="flex items-center gap-4 bg-white bg-opacity-80 rounded-xl shadow-lg p-4">
//             <label htmlFor="filter" className="font-medium text-gray-700">
//               Apply Filter:
//             </label>
//             <select
//               id="filter"
//               value={currentFilter}
//               onChange={(e) => applyFilter(e.target.value)}
//               className="px-4 py-2 border-2 border-gray-800 rounded-lg"
//             >
//               <option value="none">None</option>
//               <option value="grayscale">Grayscale</option>
//               <option value="sepia">Sepia</option>
//               <option value="invert">Invert</option>
//               <option value="saturate">Saturate</option>
//             </select>
//           </div>
//         </div>

//         {/* Finalize Form */}
//         <form
//           onSubmit={handleSubmit}
//           method="POST"
//           action="/finalize_post"
//           className="bg-white bg-opacity-80 rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
//         >
//           <input
//             type="hidden"
//             name="csrfmiddlewaretoken"
//             value="{{ csrf_token }}"
//           />

//           <p className="mb-4">
//             <strong className="text-gray-800">Product Name:</strong>{" "}
//             {productName}
//           </p>

//           <div className="mb-6">
//             <label
//               htmlFor="edited_caption"
//               className="block text-lg font-medium text-gray-800 mb-2"
//             >
//               Edit Caption:
//             </label>
//             <textarea
//               name="edited_caption"
//               id="edited_caption"
//               rows="4"
//               value={editedCaption}
//               onChange={(e) => setEditedCaption(e.target.value)}
//               className="w-full px-4 py-2 border-2 border-gray-800 rounded-lg focus:border-green-600 focus:outline-none"
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="edited_hashtags"
//               className="block text-lg font-medium text-gray-800 mb-2"
//             >
//               Edit Hashtags:
//             </label>
//             <textarea
//               name="edited_hashtags"
//               id="edited_hashtags"
//               rows="2"
//               value={editedHashtags}
//               onChange={(e) => setEditedHashtags(e.target.value)}
//               className="w-full px-4 py-2 border-2 border-gray-800 rounded-lg focus:border-green-600 focus:outline-none"
//             />
//           </div>

//           <div className="text-center">
//             <button
//               href="/final-post"
//               type="submit"
//               className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
//             >
//               Finalize Post
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useRef, useState, useEffect } from "react";
// import Image from "next/image";

// export default function SocialMediaPostEditor() {
//   const [formData, setFormData] = useState({
//     postTitle: "Celebrate the Colors of Holi at Yoyo 🌈",
//     hashtags: "#HappyHoli #FestivalOfColors #Holi2025 #YoyoHotels #TravelIndia",
//     postDescription:
//       "Create a vibrant and engaging Holi celebration post for Yoyo Hotels. Emphasize the cultural experience, inviting foreigners to join in and immerse themselves in India's Festival of Colors. Use a warm and welcoming tone, and make sure to add a call-to-action, encouraging them to book their stay at Yoyo Hotels to celebrate Holi with us.",
//     target_audience: "Foreigners",
//   });

//   const [isGenerating, setIsGenerating] = useState(false);
//   const [currentImage, setCurrentImage] = useState(
//     "/images/holi-celebration.jpg"
//   );
//   const [selectedFilter, setSelectedFilter] = useState(null);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       // Process response
//       console.log("Post generated with data:", formData);
//     } catch (error) {
//       console.error("Error generating post:", error);
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const filterOptions = [
//     { id: "normal", img: "/images/filter1.jpg" },
//     { id: "grayscale", img: "/images/filter2.jpg" },
//     { id: "vibrant", img: "/images/filter3.jpg" },
//     { id: "cool", img: "/images/filter4.jpg" },
//   ];

//   const stickerOptions = [
//     { id: "sticker1", img: "/images/sticker1.jpg" },
//     { id: "sticker2", img: "/images/sticker2.jpg" },
//     { id: "sticker3", img: "/images/sticker3.jpg" },
//     { id: "sticker4", img: "/images/sticker4.jpg" },
//   ];

//   return (
//     <div className="flex w-full">
//       {/* Left Column - Form Inputs */}
//       <div className="w-1/3 p-6 border-r">
//         <div className="mb-6">
//           <label
//             htmlFor="postTitle"
//             className="block font-semibold mb-2 text-black text-lg"
//           >
//             Post Title
//           </label>
//           <input
//             type="text"
//             onChange={handleChange}
//             name="postTitle"
//             value={formData.postTitle}
//             className="w-full p-2 bg-gradient-to-r from-[#E6E9FA] to-[#ECE6FF] rounded text-black border-1 border-[#A6A6A6]"
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="hashtags"
//             className="block font-semibold mb-2 text-black text-lg"
//           >
//             Hashtags
//           </label>
//           <input
//             type="text"
//             onChange={handleChange}
//             name="hashtags"
//             value={formData.hashtags}
//             className="w-full p-2 bg-gradient-to-r from-[#E6E9FA] to-[#ECE6FF] rounded text-black border-1 border-[#A6A6A6]"
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="postDescription"
//             className="block font-semibold mb-2 text-black text-lg"
//           >
//             Post Description
//           </label>
//           <textarea
//             onChange={handleChange}
//             name="postDescription"
//             value={formData.postDescription}
//             className="w-full p-2 bg-gradient-to-r from-[#E6E9FA] to-[#ECE6FF] rounded text-black border-1 border-[#A6A6A6] min-h-32"
//           />
//           <div className="relative h-6">
//             <span className="absolute right-0 top-1 text-xs text-gray-500">
//               ⓘ
//             </span>
//           </div>
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="target_audience"
//             className="block font-semibold mb-2 text-black text-lg"
//           >
//             Target Audience
//           </label>
//           <input
//             type="text"
//             onChange={handleChange}
//             name="target_audience"
//             className="w-full p-2 bg-gradient-to-r from-[#E6E9FA] to-[#ECE6FF] rounded text-black border-1 border-[#A6A6A6]"
//             value={formData.target_audience}
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={isGenerating}
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-200 font-semibold"
//         >
//           {isGenerating ? "Loading..." : "Generate post ✨"}
//         </button>
//       </div>

//       {/* Middle Column - Preview */}
//       <div className="w-1/3 p-6 bg-[#F0F2FF]">
//         <div className="text-center text-sm text-gray-500 mb-2">
//           Instagram Post (1080x1080)
//         </div>
//         <div className="mb-4">
//           <div className="w-full aspect-square overflow-hidden">
//             <img
//               src={currentImage}
//               alt="Post preview"
//               className="w-full h-full object-cover"
//               style={{
//                 filter:
//                   selectedFilter === "grayscale"
//                     ? "grayscale(100%)"
//                     : selectedFilter === "vibrant"
//                     ? "saturate(150%)"
//                     : selectedFilter === "cool"
//                     ? "sepia(50%)"
//                     : "none",
//               }}
//             />
//           </div>
//         </div>

//         <div className="flex justify-between mt-8">
//           <button
//             className="flex items-center justify-center bg-white p-2 rounded-md border border-gray-300"
//             onClick={() => console.log("Undo clicked")}
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M3 10h10a8 8 0 0 1 8 8v2M3 10l6-6M3 10l6 6" />
//             </svg>
//             <span className="ml-2">Undo</span>
//           </button>

//           <button
//             className="flex items-center justify-center bg-white p-2 rounded-md border border-gray-300"
//             onClick={() => console.log("Redo clicked")}
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M21 10h-10a8 8 0 0 0-8 8v2M21 10l-6-6M21 10l-6 6" />
//             </svg>
//             <span className="ml-2">Redo</span>
//           </button>

//           <button
//             className="flex items-center justify-center bg-red-100 text-red-600 p-2 rounded-md border border-red-200"
//             onClick={() => console.log("Delete selected clicked")}
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//             </svg>
//             <span className="ml-2">Delete selected</span>
//           </button>
//         </div>
//       </div>

//       {/* Right Column - Tools */}
//       <div className="w-1/3 p-6">
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Filters</h3>
//           <div className="grid grid-cols-4 gap-2">
//             {filterOptions.map((filter) => (
//               <div
//                 key={filter.id}
//                 className={`cursor-pointer border-2 ${
//                   selectedFilter === filter.id
//                     ? "border-blue-500"
//                     : "border-transparent"
//                 }`}
//                 onClick={() => setSelectedFilter(filter.id)}
//               >
//                 <div className="w-full aspect-square overflow-hidden">
//                   <img
//                     src={filter.img}
//                     alt={`Filter ${filter.id}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Text</h3>
//           <div className="border border-gray-300 rounded-md p-2 bg-gray-50">
//             <input
//               type="text"
//               placeholder="Enter text"
//               className="w-full p-2 border border-gray-300 rounded-md mb-2"
//             />
//             <div className="flex justify-between items-center">
//               <div className="flex space-x-2">
//                 <button className="p-1 border border-gray-300 rounded">
//                   I
//                 </button>
//                 <button className="p-1 border border-gray-300 rounded">
//                   —
//                 </button>
//                 <button className="p-1 border border-gray-300 rounded">
//                   T
//                 </button>
//               </div>
//               <button className="p-1 w-6 h-6 bg-green-500 rounded"></button>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Stickers</h3>
//           <div className="grid grid-cols-4 gap-2">
//             {stickerOptions.map((sticker) => (
//               <div
//                 key={sticker.id}
//                 className="cursor-pointer border border-gray-300 rounded-md overflow-hidden"
//               >
//                 <div className="w-full aspect-square">
//                   <img
//                     src={sticker.img}
//                     alt={`Sticker ${sticker.id}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Image</h3>
//           <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center">
//             <button className="flex items-center justify-center text-gray-600">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//                 <circle cx="8.5" cy="8.5" r="1.5" />
//                 <path d="M21 15l-5-5L5 21" />
//               </svg>
//               <span className="ml-2">Choose from computer</span>
//             </button>
//           </div>
//         </div>

//         <button
//           onClick={() => console.log("Clear canvas clicked")}
//           className="flex items-center justify-center bg-gray-200 p-2 rounded-md border border-gray-300 w-full"
//         >
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//           </svg>
//           <span className="ml-2">Clear canvas</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function SocialMediaPostEditor() {
//   // Form data state
//   const [formData, setFormData] = useState({
//     postTitle: "Celebrate the Colors of Holi at Yoyo 🌈",
//     hashtags: "#HappyHoli #FestivalOfColors #Holi2025 #YoyoHotels #TravelIndia",
//     postDescription:
//       "Create a vibrant and engaging Holi celebration post for Yoyo Hotels. Emphasize the cultural experience, inviting foreigners to join in and immerse themselves in India's Festival of Colors. Use a warm and welcoming tone, and make sure to add a call-to-action, encouraging them to book their stay at Yoyo Hotels to celebrate Holi with us.",
//     target_audience: "Foreigners",
//   });

//   // UI state
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [selectedFilter, setSelectedFilter] = useState("normal");
//   const [currentImage, setCurrentImage] = useState(
//     "/images/holi-celebration.jpg"
//   );
//   const [selectedSticker, setSelectedSticker] = useState(null);
//   const [customText, setCustomText] = useState("");
//   const [elementHistory, setElementHistory] = useState([]);
//   const [historyPosition, setHistoryPosition] = useState(-1);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission with proper loading state
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       // Actual API call would go here
//       const response = await fetch("/api/generate-post", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       // For demo purposes, simulate API delay
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       if (!response?.ok) {
//         // If no real response in this demo, create mock data
//         console.log("Generated post with form data:", formData);
//         // Here you would normally update state with the response data
//       } else {
//         const data = await response.json();
//         console.log("API Response:", data);
//         // Update state with real API response
//       }
//     } catch (error) {
//       console.error("Error generating post:", error);
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   // Function to handle filter changes
//   const handleFilterChange = (filterId) => {
//     setSelectedFilter(filterId);
//     // Save current state to history
//     addToHistory();
//   };

//   // Add to history for undo/redo
//   const addToHistory = () => {
//     const newHistoryPosition = historyPosition + 1;
//     const newHistory = elementHistory.slice(0, newHistoryPosition);

//     newHistory.push({
//       filter: selectedFilter,
//       image: currentImage,
//       sticker: selectedSticker,
//       text: customText,
//     });

//     setElementHistory(newHistory);
//     setHistoryPosition(newHistoryPosition);
//   };

//   // Undo functionality
//   const handleUndo = () => {
//     if (historyPosition > 0) {
//       const newPosition = historyPosition - 1;
//       const previousState = elementHistory[newPosition];

//       setSelectedFilter(previousState.filter);
//       setCurrentImage(previousState.image);
//       setSelectedSticker(previousState.sticker);
//       setCustomText(previousState.text);
//       setHistoryPosition(newPosition);
//     }
//   };

//   // Redo functionality
//   const handleRedo = () => {
//     if (historyPosition < elementHistory.length - 1) {
//       const newPosition = historyPosition + 1;
//       const nextState = elementHistory[newPosition];

//       setSelectedFilter(nextState.filter);
//       setCurrentImage(nextState.image);
//       setSelectedSticker(nextState.sticker);
//       setCustomText(nextState.text);
//       setHistoryPosition(newPosition);
//     }
//   };

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setCurrentImage(event.target.result);
//         addToHistory();
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Clear canvas
//   const clearCanvas = () => {
//     setCurrentImage("/images/blank-canvas.jpg");
//     setSelectedFilter("normal");
//     setSelectedSticker(null);
//     setCustomText("");
//     addToHistory();
//   };

//   // Add sticker
//   const addSticker = (stickerId) => {
//     setSelectedSticker(stickerId);
//     addToHistory();
//   };

//   // Delete selected elements
//   const deleteSelected = () => {
//     if (selectedSticker) {
//       setSelectedSticker(null);
//       addToHistory();
//     }
//   };

//   // Mock data for filters and stickers
//   const filterOptions = [
//     { id: "normal", img: "/images/filter1.jpg" },
//     { id: "grayscale", img: "/images/filter2.jpg" },
//     { id: "vibrant", img: "/images/filter3.jpg" },
//     { id: "cool", img: "/images/filter4.jpg" },
//   ];

//   const stickerOptions = [
//     { id: "sticker1", img: "/images/sticker1.jpg" },
//     { id: "sticker2", img: "/images/sticker2.jpg" },
//     { id: "sticker3", img: "/images/sticker3.jpg" },
//     { id: "sticker4", img: "/images/sticker4.jpg" },
//   ];

//   // Initialize history on component mount
//   useEffect(() => {
//     setElementHistory([
//       {
//         filter: "normal",
//         image: currentImage,
//         sticker: null,
//         text: "",
//       },
//     ]);
//     setHistoryPosition(0);
//   }, []);

//   return (
//     <div className="flex w-full">
//       {/* Left Column - Form Inputs */}
//       <div className="w-1/3 p-6 border-r">
//         <div className="mb-6">
//           <label
//             htmlFor="postTitle"
//             className="block font-semibold mb-2 text-black text-lg"
//           >
//             Post Title
//           </label>
//           <input
//             type="text"
//             onChange={handleChange}
//             name="postTitle"
//             value={formData.postTitle}
//             className="w-full p-2 bg-gradient-to-r from-[#E6E9FA] to-[#ECE6FF] rounded text-black border-1 border-[#A6A6A6]"
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="hashtags"
//             className="block font-semibold mb-2 text-black text-lg"
//           >
//             Hashtags
//           </label>
//           <input
//             type="text"
//             onChange={handleChange}
//             name="hashtags"
//             value={formData.hashtags}
//             className="w-full p-2 bg-gradient-to-r from-[#E6E9FA] to-[#ECE6FF] rounded text-black border-1 border-[#A6A6A6]"
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="postDescription"
//             className="block font-semibold mb-2 text-black text-lg"
//           >
//             Post Description
//           </label>
//           <textarea
//             onChange={handleChange}
//             name="postDescription"
//             value={formData.postDescription}
//             className="w-full p-2 bg-gradient-to-r from-[#E6E9FA] to-[#ECE6FF] rounded text-black border-1 border-[#A6A6A6] min-h-32"
//           />
//           <div className="relative h-6">
//             <span className="absolute right-0 top-1 text-xs text-gray-500">
//               ⓘ
//             </span>
//           </div>
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="target_audience"
//             className="block font-semibold mb-2 text-black text-lg"
//           >
//             Target Audience
//           </label>
//           <input
//             type="text"
//             onChange={handleChange}
//             name="target_audience"
//             className="w-full p-2 bg-gradient-to-r from-[#E6E9FA] to-[#ECE6FF] rounded text-black border-1 border-[#A6A6A6]"
//             value={formData.target_audience}
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={isGenerating}
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-200 font-semibold"
//         >
//           {isGenerating ? "Loading..." : "Generate post ✨"}
//         </button>
//       </div>

//       {/* Middle Column - Preview */}
//       <div className="w-1/3 p-6 bg-[#F0F2FF]">
//         <div className="text-center text-sm text-gray-500 mb-2">
//           Instagram Post (1080x1080)
//         </div>
//         <div className="mb-4">
//           <div className="w-full aspect-square overflow-hidden">
//             <img
//               src={currentImage}
//               alt="Post preview"
//               className="w-full h-full object-cover"
//               style={{
//                 filter:
//                   selectedFilter === "grayscale"
//                     ? "grayscale(100%)"
//                     : selectedFilter === "vibrant"
//                     ? "saturate(150%)"
//                     : selectedFilter === "cool"
//                     ? "sepia(50%)"
//                     : "none",
//               }}
//             />
//             {/* Overlay sticker if selected */}
//             {selectedSticker && (
//               <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 pointer-events-none">
//                 <img
//                   src={
//                     stickerOptions.find((s) => s.id === selectedSticker)?.img
//                   }
//                   alt="Selected sticker"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             )}
//             {/* Overlay text if added */}
//             {customText && (
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center p-2">
//                 {customText}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex justify-between mt-8">
//           <button
//             className="flex items-center justify-center bg-white p-2 rounded-md border border-gray-300"
//             onClick={handleUndo}
//             disabled={historyPosition <= 0}
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M3 10h10a8 8 0 0 1 8 8v2M3 10l6-6M3 10l6 6" />
//             </svg>
//             <span className="ml-2">Undo</span>
//           </button>

//           <button
//             className="flex items-center justify-center bg-white p-2 rounded-md border border-gray-300"
//             onClick={handleRedo}
//             disabled={historyPosition >= elementHistory.length - 1}
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M21 10h-10a8 8 0 0 0-8 8v2M21 10l-6-6M21 10l-6 6" />
//             </svg>
//             <span className="ml-2">Redo</span>
//           </button>

//           <button
//             className="flex items-center justify-center bg-red-100 text-red-600 p-2 rounded-md border border-red-200"
//             onClick={deleteSelected}
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//             </svg>
//             <span className="ml-2">Delete selected</span>
//           </button>
//         </div>
//       </div>

//       {/* Right Column - Tools */}
//       <div className="w-1/3 p-6">
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Filters</h3>
//           <div className="grid grid-cols-4 gap-2">
//             {filterOptions.map((filter) => (
//               <div
//                 key={filter.id}
//                 className={`cursor-pointer border-2 ${
//                   selectedFilter === filter.id
//                     ? "border-blue-500"
//                     : "border-transparent"
//                 }`}
//                 onClick={() => handleFilterChange(filter.id)}
//               >
//                 <div className="w-full aspect-square overflow-hidden">
//                   <img
//                     src={filter.img}
//                     alt={`Filter ${filter.id}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Text</h3>
//           <div className="border border-gray-300 rounded-md p-2 bg-gray-50">
//             <input
//               type="text"
//               placeholder="Enter text"
//               className="w-full p-2 border border-gray-300 rounded-md mb-2"
//               value={customText}
//               onChange={(e) => setCustomText(e.target.value)}
//               onBlur={addToHistory}
//             />
//             <div className="flex justify-between items-center">
//               <div className="flex space-x-2">
//                 <button className="p-1 border border-gray-300 rounded">
//                   I
//                 </button>
//                 <button className="p-1 border border-gray-300 rounded">
//                   —
//                 </button>
//                 <button className="p-1 border border-gray-300 rounded">
//                   T
//                 </button>
//               </div>
//               <button className="p-1 w-6 h-6 bg-green-500 rounded"></button>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Stickers</h3>
//           <div className="grid grid-cols-4 gap-2">
//             {stickerOptions.map((sticker) => (
//               <div
//                 key={sticker.id}
//                 className={`cursor-pointer border border-gray-300 rounded-md overflow-hidden ${
//                   selectedSticker === sticker.id ? "ring-2 ring-blue-500" : ""
//                 }`}
//                 onClick={() => addSticker(sticker.id)}
//               >
//                 <div className="w-full aspect-square">
//                   <img
//                     src={sticker.img}
//                     alt={`Sticker ${sticker.id}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Image</h3>
//           <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center">
//             <label
//               htmlFor="image-upload"
//               className="flex items-center justify-center text-gray-600 cursor-pointer"
//             >
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//                 <circle cx="8.5" cy="8.5" r="1.5" />
//                 <path d="M21 15l-5-5L5 21" />
//               </svg>
//               <span className="ml-2">Choose from computer</span>
//               <input
//                 id="image-upload"
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageUpload}
//               />
//             </label>
//           </div>
//         </div>

//         <button
//           onClick={clearCanvas}
//           className="flex items-center justify-center bg-gray-200 p-2 rounded-md border border-gray-300 w-full"
//         >
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//           </svg>
//           <span className="ml-2">Clear canvas</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation"; // Added missing import

// export default function SocialMediaPostEditor({
//   productName,
//   caption,
//   hashtags,
//   imageUrl,
// }) {
//   const router = useRouter(); // Initialize router
//   const canvasRef = useRef(null);
//   const [elements, setElements] = useState([]);
//   const [selectedElement, setSelectedElement] = useState(null);
//   const [dragging, setDragging] = useState(false);
//   const [resizing, setResizing] = useState(false);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [history, setHistory] = useState([]);
//   const MAX_HISTORY_LENGTH = 20;

//   const [newProductName, setProductName] = useState(productName);
//   const [editedCaption, setEditedCaption] = useState(caption);
//   const [editedHashtags, setEditedHashtags] = useState(hashtags);
//   const [newImageUrl, setImageUrl] = useState(imageUrl);

//   // Control states
//   const [bgColor, setBgColor] = useState("#ffffff");
//   const [customText, setCustomText] = useState("");
//   const [textColor, setTextColor] = useState("#000000");
//   const [textSize, setTextSize] = useState(20);
//   const [currentFilter, setCurrentFilter] = useState("none");
//   const [isCanvasReady, setIsCanvasReady] = useState(false);

//   // Save current state to history
//   const saveState = () => {
//     setHistory((prev) => {
//       const newHistory = [...prev];
//       if (newHistory.length >= MAX_HISTORY_LENGTH) {
//         newHistory.shift();
//       }
//       newHistory.push(JSON.stringify(elements));
//       return newHistory;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     try {
//       // Create a clean canvas to export
//       const exportCanvas = document.createElement("canvas");
//       exportCanvas.width = canvasRef.current.width;
//       exportCanvas.height = canvasRef.current.height;
//       const ctx = exportCanvas.getContext("2d");

//       // Draw background
//       ctx.fillStyle = bgColor;
//       ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

//       // Redraw all elements safely
//       elements.forEach((element) => {
//         if (element.type === "image") {
//           try {
//             // Only draw if the image is from a safe source or has been properly loaded with crossOrigin
//             ctx.drawImage(
//               element.img,
//               element.x,
//               element.y,
//               element.width,
//               element.height
//             );
//           } catch (error) {
//             console.warn("Couldn't draw image:", error);
//             // Draw placeholder instead
//             ctx.fillStyle = "#cccccc";
//             ctx.fillRect(element.x, element.y, element.width, element.height);
//           }
//         } else if (element.type === "text") {
//           ctx.fillStyle = element.color;
//           ctx.font = element.font;
//           ctx.fillText(element.text, element.x, element.y);
//         }
//       });

//       // Now export the canvas
//       const editedImageUrl = exportCanvas.toDataURL("image/png");

//       // Create data object to store in URL
//       const postData = {
//         productName,
//         caption: editedCaption,
//         hashtags: editedHashtags,
//         imageUrl: editedImageUrl,
//         elements: JSON.stringify(elements),
//       };

//       // Convert to URL-safe string
//       const encodedData = encodeURIComponent(JSON.stringify(postData));

//       // Navigate to finalize route with data in URL
//       router.push(`/final?data=${encodedData}`);
//     } catch (error) {
//       console.error("Error during canvas export:", error);
//       alert(
//         "Unable to export image due to cross-origin restrictions. Please try using local images."
//       );
//     }
//   };

//   // Modified image loading with proper CORS handling
//   useEffect(() => {
//     if (!imageUrl) return;

//     const loadImageWithProxy = () => {
//       const img = new Image();

//       // Set crossOrigin before setting src
//       img.crossOrigin = "anonymous";

//       img.onload = () => {
//         if (canvasRef.current) {
//           canvasRef.current.width = img.naturalWidth;
//           canvasRef.current.height = img.naturalHeight;

//           const initialElements = [
//             {
//               type: "image",
//               img: img,
//               x: 0,
//               y: 0,
//               width: img.naturalWidth,
//               height: img.naturalHeight,
//             },
//           ];

//           setElements(initialElements);
//           setHistory([JSON.stringify(initialElements)]);
//           setIsCanvasReady(true);
//         }
//       };

//       img.onerror = () => {
//         console.error(
//           "Failed to load image with CORS. Try using a CORS proxy or local images."
//         );
//         setIsCanvasReady(false);

//         // Create empty canvas with default size as fallback
//         if (canvasRef.current) {
//           canvasRef.current.width = 800;
//           canvasRef.current.height = 800;
//           const ctx = canvasRef.current.getContext("2d");
//           ctx.fillStyle = bgColor;
//           ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//           setIsCanvasReady(true);
//         }
//       };

//       // Try to load with CORS proxy if it's an external URL
//       if (
//         imageUrl.startsWith("http") &&
//         !imageUrl.startsWith(window.location.origin)
//       ) {
//         // You might need to set up your own CORS proxy or use services like cors-anywhere
//         // img.src = `https://your-cors-proxy.com/${encodeURIComponent(imageUrl)}`;

//         // For testing, try direct loading with crossOrigin set
//         img.src = imageUrl;
//       } else {
//         img.src = imageUrl;
//       }
//     };

//     loadImageWithProxy();
//   }, [imageUrl, bgColor]);

//   useEffect(() => {
//     if (isCanvasReady) {
//       drawCanvas();
//     }
//   }, [elements, bgColor, currentFilter, isCanvasReady]);

//   // Undo functionality
//   const undo = () => {
//     if (history.length > 1) {
//       setHistory((prev) => {
//         const newHistory = [...prev];
//         newHistory.pop();
//         return newHistory;
//       });
//       setElements(JSON.parse(history[history.length - 2]));
//     } else {
//       alert("No more states to undo.");
//     }
//   };

//   // Draw the canvas
//   const drawCanvas = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Apply filter
//     ctx.filter = currentFilter === "none" ? "none" : `${currentFilter}(100%)`;

//     // Draw background
//     ctx.fillStyle = bgColor;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Draw all elements
//     elements.forEach((element) => {
//       if (element.type === "image") {
//         try {
//           ctx.drawImage(
//             element.img,
//             element.x,
//             element.y,
//             element.width,
//             element.height
//           );
//         } catch (error) {
//           console.warn("Error drawing image:", error);
//         }
//       } else if (element.type === "text") {
//         ctx.fillStyle = element.color;
//         ctx.font = element.font;
//         ctx.fillText(element.text, element.x, element.y);
//       }
//     });

//     // Draw selection outline and resize handle
//     if (selectedElement && selectedElement.type === "image") {
//       ctx.strokeStyle = "#28a745";
//       ctx.strokeRect(
//         selectedElement.x,
//         selectedElement.y,
//         selectedElement.width,
//         selectedElement.height
//       );

//       // Draw resize handle
//       ctx.fillStyle = "#28a745";
//       ctx.fillRect(
//         selectedElement.x + selectedElement.width - 5,
//         selectedElement.y + selectedElement.height - 5,
//         10,
//         10
//       );
//     }
//   };

//   // Add text to canvas
//   const addText = () => {
//     if (!customText.trim()) return;

//     const newElement = {
//       type: "text",
//       text: customText,
//       x: 50,
//       y: 50,
//       font: `bold ${textSize}px Arial`,
//       color: textColor,
//       size: textSize,
//     };

//     setElements((prev) => [...prev, newElement]);
//     setCustomText("");
//     saveState();
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
//         const newElement = {
//           type: "image",
//           img: logoImg,
//           x: 100,
//           y: 100,
//           width: 100,
//           height: 100,
//         };
//         setElements((prev) => [...prev, newElement]);
//         saveState();
//       };
//     };
//     reader.readAsDataURL(file);
//   };

//   // Add sticker with proper CORS handling
//   const addSticker = (stickerUrl) => {
//     const stickerImg = new Image();
//     stickerImg.crossOrigin = "anonymous";

//     stickerImg.onload = () => {
//       const newElement = {
//         type: "image",
//         img: stickerImg,
//         x: 100,
//         y: 100,
//         width: 100,
//         height: 100,
//       };
//       setElements((prev) => [...prev, newElement]);
//       saveState();
//     };

//     stickerImg.onerror = () => {
//       console.error("Failed to load sticker image");
//       alert(
//         "Failed to load sticker. Try using local images or a CORS-enabled source."
//       );
//     };

//     stickerImg.src = stickerUrl;
//   };

//   // Apply filter
//   const applyFilter = (filter) => {
//     setCurrentFilter(filter);
//   };

//   // Remove selected element
//   const removeSelected = () => {
//     if (selectedElement) {
//       setElements((prev) => prev.filter((el) => el !== selectedElement));
//       setSelectedElement(null);
//       saveState();
//     }
//   };

//   // Mouse event handlers
//   const handleMouseDown = (e) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const rect = canvas.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     const ctx = canvas.getContext("2d");

//     // Check for resize handle
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

//     // Check for element selection
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
//         ctx.font = element.font;
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

//     // If clicked on empty space, deselect
//     setSelectedElement(null);
//   };

//   const handleMouseMove = (e) => {
//     if (!(dragging || resizing) || !selectedElement) return;

//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const rect = canvas.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     if (dragging) {
//       const updatedElement = {
//         ...selectedElement,
//         x: mouseX - offset.x,
//         y: mouseY - offset.y,
//       };

//       setElements((prev) =>
//         prev.map((el) => (el === selectedElement ? updatedElement : el))
//       );
//       setSelectedElement(updatedElement);
//     } else if (resizing) {
//       const updatedElement = {
//         ...selectedElement,
//         width: Math.max(20, mouseX - selectedElement.x),
//         height: Math.max(20, mouseY - selectedElement.y),
//       };

//       setElements((prev) =>
//         prev.map((el) => (el === selectedElement ? updatedElement : el))
//       );
//       setSelectedElement(updatedElement);
//     }
//   };

//   const handleMouseUp = () => {
//     if (dragging || resizing) {
//       saveState();
//     }
//     setDragging(false);
//     setResizing(false);
//   };

//   // Update text properties when selected
//   useEffect(() => {
//     if (selectedElement && selectedElement.type === "text") {
//       const updatedElement = {
//         ...selectedElement,
//         color: textColor,
//         font: `bold ${textSize}px Arial`,
//         size: textSize,
//       };

//       setElements((prev) =>
//         prev.map((el) => (el === selectedElement ? updatedElement : el))
//       );
//       setSelectedElement(updatedElement);
//     }
//   }, [textColor, textSize]);

//   // Redraw canvas when elements or styles change
//   useEffect(() => {
//     drawCanvas();
//   }, [elements, bgColor, currentFilter]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-8 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
//           Edit Your Social Media Post
//         </h1>

//         {/* Canvas */}
//         <div className="flex justify-center mb-8">
//           <canvas
//             ref={canvasRef}
//             width={800}
//             height={1000}
//             className="border-4 border-gray-800 rounded-xl shadow-lg cursor-move bg-white"
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//           />
//         </div>

//         {/* Controls */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           <input
//             type="file"
//             id="uploadLogo"
//             accept="image/*"
//             onChange={handleLogoUpload}
//             className="hidden"
//           />
//           <label
//             htmlFor="uploadLogo"
//             className="px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
//           >
//             Upload Logo
//           </label>

//           <div className="flex items-center gap-2">
//             <label htmlFor="bgColor" className="font-medium text-gray-700">
//               Background:
//             </label>
//             <input
//               type="color"
//               id="bgColor"
//               value={bgColor}
//               onChange={(e) => setBgColor(e.target.value)}
//               className="w-10 h-10 rounded-lg border-2 border-gray-800"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               type="text"
//               id="customText"
//               placeholder="Enter text"
//               value={customText}
//               onChange={(e) => setCustomText(e.target.value)}
//               className="px-4 py-2 border-2 border-gray-800 rounded-lg"
//             />
//             <button
//               onClick={addText}
//               className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//             >
//               Add Text
//             </button>
//           </div>

//           <div className="flex items-center gap-2">
//             <label htmlFor="textColor" className="font-medium text-gray-700">
//               Text Color:
//             </label>
//             <input
//               type="color"
//               id="textColor"
//               value={textColor}
//               onChange={(e) => setTextColor(e.target.value)}
//               className="w-8 h-8 rounded-lg border-2 border-gray-800"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             <label htmlFor="textSize" className="font-medium text-gray-700">
//               Text Size:
//             </label>
//             <input
//               type="range"
//               id="textSize"
//               min="10"
//               max="100"
//               value={textSize}
//               onChange={(e) => setTextSize(parseInt(e.target.value))}
//               className="w-32"
//             />
//             <span>{textSize}</span>
//           </div>

//           <button
//             onClick={removeSelected}
//             className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Remove Selected
//           </button>

//           <button
//             onClick={undo}
//             className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Undo
//           </button>
//         </div>

//         {/* Stickers */}
//         <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-8">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//             Stickers
//           </h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             <img
//               src="https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//               alt="Sticker 1"
//               onClick={() =>
//                 addSticker(
//                   "https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//                 )
//               }
//               className="w-24 h-24 cursor-pointer border-2 border-transparent rounded-lg hover:border-green-600 hover:scale-110 transition-all"
//             />
//             <img
//               src="https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//               alt="Sticker 2"
//               onClick={() =>
//                 addSticker(
//                   "https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//                 )
//               }
//               className="w-24 h-24 cursor-pointer border-2 border-transparent rounded-lg hover:border-green-600 hover:scale-110 transition-all"
//             />
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex justify-center mb-8">
//           <div className="flex items-center gap-4 bg-white bg-opacity-80 rounded-xl shadow-lg p-4">
//             <label htmlFor="filter" className="font-medium text-gray-700">
//               Apply Filter:
//             </label>
//             <select
//               id="filter"
//               value={currentFilter}
//               onChange={(e) => applyFilter(e.target.value)}
//               className="px-4 py-2 border-2 border-gray-800 rounded-lg"
//             >
//               <option value="none">None</option>
//               <option value="grayscale">Grayscale</option>
//               <option value="sepia">Sepia</option>
//               <option value="invert">Invert</option>
//               <option value="saturate">Saturate</option>
//             </select>
//           </div>
//         </div>

//         {/* Finalize Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white bg-opacity-80 rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
//         >
//           <p className="mb-4">
//             <strong className="text-gray-800">Product Name:</strong>{" "}
//             {productName}
//           </p>

//           <div className="mb-6">
//             <label
//               htmlFor="edited_caption"
//               className="block text-lg font-medium text-gray-800 mb-2"
//             >
//               Edit Caption:
//             </label>
//             <textarea
//               name="edited_caption"
//               id="edited_caption"
//               rows="4"
//               value={editedCaption}
//               onChange={(e) => setEditedCaption(e.target.value)}
//               className="w-full px-4 py-2 border-2 border-gray-800 rounded-lg focus:border-green-600 focus:outline-none"
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="edited_hashtags"
//               className="block text-lg font-medium text-gray-800 mb-2"
//             >
//               Edit Hashtags:
//             </label>
//             <textarea
//               name="edited_hashtags"
//               id="edited_hashtags"
//               rows="2"
//               value={editedHashtags}
//               onChange={(e) => setEditedHashtags(e.target.value)}
//               className="w-full px-4 py-2 border-2 border-gray-800 rounded-lg focus:border-green-600 focus:outline-none"
//             />
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
//             >
//               Finalize Post
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function SocialMediaPostEditor({
//   productName,
//   caption,
//   hashtags,
//   imageUrl,
// }) {
//   const router = useRouter();
//   const canvasRef = useRef(null);
//   const [elements, setElements] = useState([]);
//   const [selectedElement, setSelectedElement] = useState(null);
//   const [dragging, setDragging] = useState(false);
//   const [resizing, setResizing] = useState(false);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [history, setHistory] = useState([]);
//   const MAX_HISTORY_LENGTH = 20;

//   const [newProductName, setProductName] = useState(productName);
//   const [editedCaption, setEditedCaption] = useState(caption);
//   const [editedHashtags, setEditedHashtags] = useState(hashtags);
//   const [newImageUrl, setImageUrl] = useState(imageUrl);
//   const [finalImageData, setFinalImageData] = useState(null);

//   // Control states
//   const [bgColor, setBgColor] = useState("#ffffff");
//   const [customText, setCustomText] = useState("");
//   const [textColor, setTextColor] = useState("#000000");
//   const [textSize, setTextSize] = useState(20);
//   const [currentFilter, setCurrentFilter] = useState("none");
//   const [isCanvasReady, setIsCanvasReady] = useState(false);

//   // Save current state to history
//   const saveState = () => {
//     setHistory((prev) => {
//       const newHistory = [...prev];
//       if (newHistory.length >= MAX_HISTORY_LENGTH) {
//         newHistory.shift();
//       }
//       newHistory.push(JSON.stringify(elements));
//       return newHistory;
//     });
//   };

//   // Export canvas to base64 data URL
//   const exportCanvas = () => {
//     try {
//       // Create a clean canvas to export
//       const exportCanvas = document.createElement("canvas");
//       exportCanvas.width = canvasRef.current.width;
//       exportCanvas.height = canvasRef.current.height;
//       const ctx = exportCanvas.getContext("2d");

//       // Draw background
//       ctx.fillStyle = bgColor;
//       ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

//       // Redraw all elements safely
//       elements.forEach((element) => {
//         if (element.type === "image") {
//           try {
//             ctx.drawImage(
//               element.img,
//               element.x,
//               element.y,
//               element.width,
//               element.height
//             );
//           } catch (error) {
//             console.warn("Couldn't draw image:", error);
//             // Draw placeholder instead
//             ctx.fillStyle = "#cccccc";
//             ctx.fillRect(element.x, element.y, element.width, element.height);
//           }
//         } else if (element.type === "text") {
//           ctx.fillStyle = element.color;
//           ctx.font = element.font;
//           ctx.fillText(element.text, element.x, element.y);
//         }
//       });

//       // Export as data URL
//       return exportCanvas.toDataURL("image/png");
//     } catch (error) {
//       console.error("Error during canvas export:", error);
//       return null;
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     try {
//       // Export the canvas
//       const editedImageUrl = exportCanvas();

//       if (!editedImageUrl) {
//         throw new Error("Failed to export canvas");
//       }

//       // Store the image data in state instead of passing through URL
//       setFinalImageData(editedImageUrl);

//       // Use localStorage to pass data between pages (more reliable than URL for large data)
//       localStorage.setItem(
//         "postData",
//         JSON.stringify({
//           productName,
//           caption: editedCaption,
//           hashtags: editedHashtags,
//           imageUrl: editedImageUrl,
//         })
//       );

//       // Navigate to the final page with minimal URL parameters
//       router.push(`/final`);
//     } catch (error) {
//       console.error("Error during submission:", error);
//       alert("Unable to finalize post. Please try again with local images.");
//     }
//   };

//   // Download the edited image directly (as a fallback)
//   const downloadImage = () => {
//     try {
//       const imageData = exportCanvas();
//       if (!imageData) {
//         throw new Error("Failed to export canvas");
//       }

//       // Create a temporary link to download the image
//       const link = document.createElement("a");
//       link.href = imageData;
//       link.download = "edited-social-post.png";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error("Error downloading image:", error);
//       alert("Unable to download image. Please try again with local images.");
//     }
//   };

//   // Modified image loading with proper CORS handling
//   useEffect(() => {
//     if (!imageUrl) return;

//     const loadImageWithProxy = () => {
//       const img = new Image();

//       // Set crossOrigin before setting src
//       img.crossOrigin = "anonymous";

//       img.onload = () => {
//         if (canvasRef.current) {
//           canvasRef.current.width = img.naturalWidth;
//           canvasRef.current.height = img.naturalHeight;

//           const initialElements = [
//             {
//               type: "image",
//               img: img,
//               x: 0,
//               y: 0,
//               width: img.naturalWidth,
//               height: img.naturalHeight,
//             },
//           ];

//           setElements(initialElements);
//           setHistory([JSON.stringify(initialElements)]);
//           setIsCanvasReady(true);
//         }
//       };

//       img.onerror = () => {
//         console.error(
//           "Failed to load image with CORS. Try using a CORS proxy or local images."
//         );
//         setIsCanvasReady(false);

//         // Create empty canvas with default size as fallback
//         if (canvasRef.current) {
//           canvasRef.current.width = 800;
//           canvasRef.current.height = 800;
//           const ctx = canvasRef.current.getContext("2d");
//           ctx.fillStyle = bgColor;
//           ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//           setIsCanvasReady(true);
//         }
//       };

//       // Try to load with CORS proxy if it's an external URL
//       if (
//         imageUrl.startsWith("http") &&
//         !imageUrl.startsWith(window.location.origin)
//       ) {
//         // You might need to set up your own CORS proxy or use services like cors-anywhere
//         // img.src = `https://your-cors-proxy.com/${encodeURIComponent(imageUrl)}`;

//         // For testing, try direct loading with crossOrigin set
//         img.src = imageUrl;
//       } else {
//         img.src = imageUrl;
//       }
//     };

//     loadImageWithProxy();
//   }, [imageUrl, bgColor]);

//   useEffect(() => {
//     if (isCanvasReady) {
//       drawCanvas();
//     }
//   }, [elements, bgColor, currentFilter, isCanvasReady]);

//   // Undo functionality
//   const undo = () => {
//     if (history.length > 1) {
//       setHistory((prev) => {
//         const newHistory = [...prev];
//         newHistory.pop();
//         return newHistory;
//       });
//       setElements(JSON.parse(history[history.length - 2]));
//     } else {
//       alert("No more states to undo.");
//     }
//   };

//   // Draw the canvas
//   const drawCanvas = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Apply filter
//     ctx.filter = currentFilter === "none" ? "none" : `${currentFilter}(100%)`;

//     // Draw background
//     ctx.fillStyle = bgColor;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Draw all elements
//     elements.forEach((element) => {
//       if (element.type === "image") {
//         try {
//           ctx.drawImage(
//             element.img,
//             element.x,
//             element.y,
//             element.width,
//             element.height
//           );
//         } catch (error) {
//           console.warn("Error drawing image:", error);
//         }
//       } else if (element.type === "text") {
//         ctx.fillStyle = element.color;
//         ctx.font = element.font;
//         ctx.fillText(element.text, element.x, element.y);
//       }
//     });

//     // Draw selection outline and resize handle
//     if (selectedElement && selectedElement.type === "image") {
//       ctx.strokeStyle = "#28a745";
//       ctx.strokeRect(
//         selectedElement.x,
//         selectedElement.y,
//         selectedElement.width,
//         selectedElement.height
//       );

//       // Draw resize handle
//       ctx.fillStyle = "#28a745";
//       ctx.fillRect(
//         selectedElement.x + selectedElement.width - 5,
//         selectedElement.y + selectedElement.height - 5,
//         10,
//         10
//       );
//     }
//   };

//   // Add text to canvas
//   const addText = () => {
//     if (!customText.trim()) return;

//     const newElement = {
//       type: "text",
//       text: customText,
//       x: 50,
//       y: 50,
//       font: `bold ${textSize}px Arial`,
//       color: textColor,
//       size: textSize,
//     };

//     setElements((prev) => [...prev, newElement]);
//     setCustomText("");
//     saveState();
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
//         const newElement = {
//           type: "image",
//           img: logoImg,
//           x: 100,
//           y: 100,
//           width: 100,
//           height: 100,
//         };
//         setElements((prev) => [...prev, newElement]);
//         saveState();
//       };
//     };
//     reader.readAsDataURL(file);
//   };

//   // Add sticker with proper CORS handling
//   const addSticker = (stickerUrl) => {
//     const stickerImg = new Image();
//     stickerImg.crossOrigin = "anonymous";

//     stickerImg.onload = () => {
//       const newElement = {
//         type: "image",
//         img: stickerImg,
//         x: 100,
//         y: 100,
//         width: 100,
//         height: 100,
//       };
//       setElements((prev) => [...prev, newElement]);
//       saveState();
//     };

//     stickerImg.onerror = () => {
//       console.error("Failed to load sticker image");
//       alert(
//         "Failed to load sticker. Try using local images or a CORS-enabled source."
//       );
//     };

//     stickerImg.src = stickerUrl;
//   };

//   // Apply filter
//   const applyFilter = (filter) => {
//     setCurrentFilter(filter);
//   };

//   // Remove selected element
//   const removeSelected = () => {
//     if (selectedElement) {
//       setElements((prev) => prev.filter((el) => el !== selectedElement));
//       setSelectedElement(null);
//       saveState();
//     }
//   };

//   // Mouse event handlers
//   const handleMouseDown = (e) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const rect = canvas.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     const ctx = canvas.getContext("2d");

//     // Check for resize handle
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

//     // Check for element selection
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
//         ctx.font = element.font;
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

//     // If clicked on empty space, deselect
//     setSelectedElement(null);
//   };

//   const handleMouseMove = (e) => {
//     if (!(dragging || resizing) || !selectedElement) return;

//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const rect = canvas.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     if (dragging) {
//       const updatedElement = {
//         ...selectedElement,
//         x: mouseX - offset.x,
//         y: mouseY - offset.y,
//       };

//       setElements((prev) =>
//         prev.map((el) => (el === selectedElement ? updatedElement : el))
//       );
//       setSelectedElement(updatedElement);
//     } else if (resizing) {
//       const updatedElement = {
//         ...selectedElement,
//         width: Math.max(20, mouseX - selectedElement.x),
//         height: Math.max(20, mouseY - selectedElement.y),
//       };

//       setElements((prev) =>
//         prev.map((el) => (el === selectedElement ? updatedElement : el))
//       );
//       setSelectedElement(updatedElement);
//     }
//   };

//   const handleMouseUp = () => {
//     if (dragging || resizing) {
//       saveState();
//     }
//     setDragging(false);
//     setResizing(false);
//   };

//   // Update text properties when selected
//   useEffect(() => {
//     if (selectedElement && selectedElement.type === "text") {
//       const updatedElement = {
//         ...selectedElement,
//         color: textColor,
//         font: `bold ${textSize}px Arial`,
//         size: textSize,
//       };

//       setElements((prev) =>
//         prev.map((el) => (el === selectedElement ? updatedElement : el))
//       );
//       setSelectedElement(updatedElement);
//     }
//   }, [textColor, textSize]);

//   // Redraw canvas when elements or styles change
//   useEffect(() => {
//     drawCanvas();
//   }, [elements, bgColor, currentFilter]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-8 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
//           Edit Your Social Media Post
//         </h1>

//         {/* Canvas */}
//         <div className="flex justify-center mb-8">
//           <canvas
//             ref={canvasRef}
//             width={800}
//             height={1000}
//             className="border-4 border-gray-800 rounded-xl shadow-lg cursor-move bg-white"
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//           />
//         </div>

//         {/* Controls */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           <input
//             type="file"
//             id="uploadLogo"
//             accept="image/*"
//             onChange={handleLogoUpload}
//             className="hidden"
//           />
//           <label
//             htmlFor="uploadLogo"
//             className="px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
//           >
//             Upload Logo
//           </label>

//           <div className="flex items-center gap-2">
//             <label htmlFor="bgColor" className="font-medium text-gray-700">
//               Background:
//             </label>
//             <input
//               type="color"
//               id="bgColor"
//               value={bgColor}
//               onChange={(e) => setBgColor(e.target.value)}
//               className="w-10 h-10 rounded-lg border-2 border-gray-800"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               type="text"
//               id="customText"
//               placeholder="Enter text"
//               value={customText}
//               onChange={(e) => setCustomText(e.target.value)}
//               className="px-4 py-2 border-2 border-gray-800 rounded-lg"
//             />
//             <button
//               onClick={addText}
//               className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//             >
//               Add Text
//             </button>
//           </div>

//           <div className="flex items-center gap-2">
//             <label htmlFor="textColor" className="font-medium text-gray-700">
//               Text Color:
//             </label>
//             <input
//               type="color"
//               id="textColor"
//               value={textColor}
//               onChange={(e) => setTextColor(e.target.value)}
//               className="w-8 h-8 rounded-lg border-2 border-gray-800"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             <label htmlFor="textSize" className="font-medium text-gray-700">
//               Text Size:
//             </label>
//             <input
//               type="range"
//               id="textSize"
//               min="10"
//               max="100"
//               value={textSize}
//               onChange={(e) => setTextSize(parseInt(e.target.value))}
//               className="w-32"
//             />
//             <span>{textSize}</span>
//           </div>

//           <button
//             onClick={removeSelected}
//             className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Remove Selected
//           </button>

//           <button
//             onClick={undo}
//             className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Undo
//           </button>
//         </div>

//         {/* Stickers */}
//         <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-8">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//             Stickers
//           </h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             <img
//               src="https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//               alt="Sticker 1"
//               onClick={() =>
//                 addSticker(
//                   "https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//                 )
//               }
//               className="w-24 h-24 cursor-pointer border-2 border-transparent rounded-lg hover:border-green-600 hover:scale-110 transition-all"
//             />
//             <img
//               src="https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//               alt="Sticker 2"
//               onClick={() =>
//                 addSticker(
//                   "https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
//                 )
//               }
//               className="w-24 h-24 cursor-pointer border-2 border-transparent rounded-lg hover:border-green-600 hover:scale-110 transition-all"
//             />
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex justify-center mb-8">
//           <div className="flex items-center gap-4 bg-white bg-opacity-80 rounded-xl shadow-lg p-4">
//             <label htmlFor="filter" className="font-medium text-gray-700">
//               Apply Filter:
//             </label>
//             <select
//               id="filter"
//               value={currentFilter}
//               onChange={(e) => applyFilter(e.target.value)}
//               className="px-4 py-2 border-2 border-gray-800 rounded-lg"
//             >
//               <option value="none">None</option>
//               <option value="grayscale">Grayscale</option>
//               <option value="sepia">Sepia</option>
//               <option value="invert">Invert</option>
//               <option value="saturate">Saturate</option>
//             </select>
//           </div>
//         </div>

//         {/* Finalize Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white bg-opacity-80 rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
//         >
//           <p className="mb-4">
//             <strong className="text-gray-800">Product Name:</strong>{" "}
//             {productName}
//           </p>

//           <div className="mb-6">
//             <label
//               htmlFor="edited_caption"
//               className="block text-lg font-medium text-gray-800 mb-2"
//             >
//               Edit Caption:
//             </label>
//             <textarea
//               name="edited_caption"
//               id="edited_caption"
//               rows="4"
//               value={editedCaption}
//               onChange={(e) => setEditedCaption(e.target.value)}
//               className="w-full px-4 py-2 border-2 border-gray-800 rounded-lg focus:border-green-600 focus:outline-none"
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="edited_hashtags"
//               className="block text-lg font-medium text-gray-800 mb-2"
//             >
//               Edit Hashtags:
//             </label>
//             <textarea
//               name="edited_hashtags"
//               id="edited_hashtags"
//               rows="2"
//               value={editedHashtags}
//               onChange={(e) => setEditedHashtags(e.target.value)}
//               className="w-full px-4 py-2 border-2 border-gray-800 rounded-lg focus:border-green-600 focus:outline-none"
//             />
//           </div>

//           <div className="flex flex-wrap justify-center gap-4">
//             <button
//               type="submit"
//               className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
//             >
//               Finalize Post
//             </button>

//             <button
//               type="button"
//               onClick={downloadImage}
//               className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
//             >
//               Download Image
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SocialMediaPostEditor({
  productName,
  caption,
  hashtags,
  imageUrl,
}) {
  const router = useRouter();
  const canvasRef = useRef(null);
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [history, setHistory] = useState([]);
  const MAX_HISTORY_LENGTH = 20;

  const [newProductName, setProductName] = useState(productName);
  const [editedCaption, setEditedCaption] = useState(caption);
  const [editedHashtags, setEditedHashtags] = useState(hashtags);
  const [newImageUrl, setImageUrl] = useState(imageUrl);
  const [finalImageData, setFinalImageData] = useState(null);

  // Control states
  const [bgColor, setBgColor] = useState("#ffffff");
  const [customText, setCustomText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [textSize, setTextSize] = useState(20);
  const [currentFilter, setCurrentFilter] = useState("none");
  const [isCanvasReady, setIsCanvasReady] = useState(false);

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

  // Export canvas to base64 data URL
  const exportCanvas = () => {
    try {
      if (!canvasRef.current) {
        console.error("Canvas reference is not available");
        return null;
      }

      // Create a clean canvas to export
      const exportCanvas = document.createElement("canvas");
      exportCanvas.width = canvasRef.current.width;
      exportCanvas.height = canvasRef.current.height;
      const ctx = exportCanvas.getContext("2d");

      // Draw background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

      // Apply the same filter as the main canvas
      if (currentFilter !== "none") {
        ctx.filter = `${currentFilter}(100%)`;
      }

      // Redraw all elements safely
      elements.forEach((element) => {
        if (element.type === "image") {
          try {
            ctx.drawImage(
              element.img,
              element.x,
              element.y,
              element.width,
              element.height
            );
          } catch (error) {
            console.warn("Couldn't draw image:", error);
            // Draw placeholder instead
            ctx.fillStyle = "#cccccc";
            ctx.fillRect(element.x, element.y, element.width, element.height);
          }
        } else if (element.type === "text") {
          ctx.fillStyle = element.color;
          ctx.font = element.font;
          ctx.fillText(element.text, element.x, element.y);
        }
      });

      // Export as data URL
      return exportCanvas.toDataURL("image/png");
    } catch (error) {
      console.error("Error during canvas export:", error);
      return null;
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Export the canvas
      const editedImageUrl = exportCanvas();

      if (!editedImageUrl) {
        throw new Error("Failed to export canvas");
      }

      // Store the image data in state instead of passing through URL
      setFinalImageData(editedImageUrl);

      // Use localStorage to pass data between pages (more reliable than URL for large data)
      localStorage.setItem(
        "postData",
        JSON.stringify({
          productName,
          caption: editedCaption,
          hashtags: editedHashtags,
          imageUrl: editedImageUrl,
        })
      );

      // Navigate to the final page with minimal URL parameters
      router.push(`/final`);
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Unable to finalize post. Please try again with local images.");
    }
  };

  // Download the edited image directly (as a fallback)
  const downloadImage = () => {
    try {
      if (!canvasRef.current) {
        console.error("Canvas reference is not available");
        alert("Canvas is not ready. Please try again.");
        return;
      }

      // Get the image data from the canvas
      const imageData = exportCanvas();

      if (!imageData) {
        throw new Error("Failed to export canvas");
      }

      // Create a temporary link to download the image
      const link = document.createElement("a");
      link.href = imageData;
      link.download = "edited-social-post.png";

      // Append to body, click, and remove (to trigger the download)
      document.body.appendChild(link);
      link.click();

      // Small timeout to ensure the download starts before removing the link
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("Unable to download image. Please try again with local images.");
    }
  };

  // Modified image loading with proper CORS handling
  useEffect(() => {
    if (!imageUrl) return;

    const loadImageWithProxy = () => {
      const img = new Image();

      // Set crossOrigin before setting src
      img.crossOrigin = "anonymous";

      img.onload = () => {
        if (canvasRef.current) {
          canvasRef.current.width = img.naturalWidth;
          canvasRef.current.height = img.naturalHeight;

          const initialElements = [
            {
              type: "image",
              img: img,
              x: 0,
              y: 0,
              width: img.naturalWidth,
              height: img.naturalHeight,
            },
          ];

          setElements(initialElements);
          setHistory([JSON.stringify(initialElements)]);
          setIsCanvasReady(true);
        }
      };

      img.onerror = () => {
        console.error(
          "Failed to load image with CORS. Try using a CORS proxy or local images."
        );
        setIsCanvasReady(false);

        // Create empty canvas with default size as fallback
        if (canvasRef.current) {
          canvasRef.current.width = 800;
          canvasRef.current.height = 800;
          const ctx = canvasRef.current.getContext("2d");
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          setIsCanvasReady(true);
        }
      };

      // Try to load with CORS proxy if it's an external URL
      if (
        imageUrl.startsWith("http") &&
        !imageUrl.startsWith(window.location.origin)
      ) {
        // You might need to set up your own CORS proxy or use services like cors-anywhere
        // img.src = `https://your-cors-proxy.com/${encodeURIComponent(imageUrl)}`;

        // For testing, try direct loading with crossOrigin set
        img.src = imageUrl;
      } else {
        img.src = imageUrl;
      }
    };

    loadImageWithProxy();
  }, [imageUrl, bgColor]);

  useEffect(() => {
    if (isCanvasReady) {
      drawCanvas();
    }
  }, [elements, bgColor, currentFilter, isCanvasReady]);

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

    // Reset filter first
    ctx.filter = "none";

    // Apply filter if needed
    if (currentFilter !== "none") {
      ctx.filter = `${currentFilter}(100%)`;
    }

    // Draw background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw all elements
    elements.forEach((element) => {
      if (element.type === "image") {
        try {
          ctx.drawImage(
            element.img,
            element.x,
            element.y,
            element.width,
            element.height
          );
        } catch (error) {
          console.warn("Error drawing image:", error);
        }
      } else if (element.type === "text") {
        ctx.fillStyle = element.color;
        ctx.font = element.font;
        ctx.fillText(element.text, element.x, element.y);
      }
    });

    // Draw selection outline and resize handle
    if (selectedElement && selectedElement.type === "image") {
      ctx.filter = "none"; // Reset filter for selection drawing
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

  // Add sticker with proper CORS handling
  const addSticker = (stickerUrl) => {
    const stickerImg = new Image();
    stickerImg.crossOrigin = "anonymous";

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

    stickerImg.onerror = () => {
      console.error("Failed to load sticker image");
      alert(
        "Failed to load sticker. Try using local images or a CORS-enabled source."
      );
    };

    stickerImg.src = stickerUrl;
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
        width: Math.max(20, mouseX - selectedElement.x),
        height: Math.max(20, mouseY - selectedElement.y),
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

  // Redraw canvas when elements or styles change
  useEffect(() => {
    drawCanvas();
  }, [elements, bgColor, currentFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Create Your Holi Celebration Post
        </h1>

        {/* Canvas */}
        <div className="flex justify-center mb-6">
          <canvas
            ref={canvasRef}
            width={600}
            height={800}
            className="border-4 border-purple-500 rounded-xl shadow-lg cursor-move bg-white"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          />
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <input
            type="file"
            id="uploadLogo"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
          />
          <label
            htmlFor="uploadLogo"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-colors text-sm"
          >
            Upload Image
          </label>

          <div className="flex items-center gap-2">
            <label htmlFor="bgColor" className="font-medium text-purple-800">
              BG Color:
            </label>
            <input
              type="color"
              id="bgColor"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-8 h-8 rounded-lg border-2 border-purple-800"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              id="customText"
              placeholder="Enter text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="px-3 py-1 border-2 border-purple-500 rounded-lg text-sm w-32"
            />
            <button
              onClick={addText}
              className="px-4 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              Add Text
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="textColor" className="font-medium text-purple-800">
              Text Color:
            </label>
            <input
              type="color"
              id="textColor"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-8 h-8 rounded-lg border-2 border-purple-800"
            />
          </div>

          <button
            onClick={removeSelected}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
          >
            Remove
          </button>

          <button
            onClick={undo}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
          >
            Undo
          </button>
        </div>

        {/* Stickers */}
        <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-4 mb-6">
          <h3 className="text-xl font-bold text-purple-800 mb-3 text-center">
            Holi Stickers
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <img
              src="https://img.freepik.com/free-vector/holi-festival-powder-colors-set_1284-42460.jpg"
              alt="Holi Sticker"
              onClick={() =>
                addSticker(
                  "https://img.freepik.com/free-vector/holi-festival-powder-colors-set_1284-42460.jpg"
                )
              }
              className="w-20 h-20 cursor-pointer border-2 border-transparent rounded-lg hover:border-purple-600 hover:scale-110 transition-all"
            />
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-holi-doodle-set_23-2149150786.jpg"
              alt="Holi Sticker"
              onClick={() =>
                addSticker(
                  "https://img.freepik.com/free-vector/hand-drawn-holi-doodle-set_23-2149150786.jpg"
                )
              }
              className="w-20 h-20 cursor-pointer border-2 border-transparent rounded-lg hover:border-purple-600 hover:scale-110 transition-all"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-3 bg-white bg-opacity-80 rounded-xl shadow-lg p-3">
            <label
              htmlFor="filter"
              className="font-medium text-purple-800 text-sm"
            >
              Filter:
            </label>
            <select
              id="filter"
              value={currentFilter}
              onChange={(e) => applyFilter(e.target.value)}
              className="px-3 py-1 border-2 border-purple-500 rounded-lg text-sm"
            >
              <option value="none">None</option>
              <option value="grayscale">Grayscale</option>
              <option value="sepia">Sepia</option>
              <option value="invert">Invert</option>
              <option value="saturate">Saturate</option>
            </select>
          </div>
        </div>

        {/* Finalize Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6"
        >
          <div className="mb-4">
            <label
              htmlFor="edited_caption"
              className="block text-md font-medium text-purple-800 mb-1"
            >
              Post Description:
            </label>
            <textarea
              name="edited_caption"
              id="edited_caption"
              rows="4"
              placeholder="Create a vibrant and engaging Holi celebration post..."
              value={editedCaption}
              onChange={(e) => setEditedCaption(e.target.value)}
              className="w-full px-3 py-2 border-2 border-purple-500 rounded-lg focus:border-purple-600 focus:outline-none text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="edited_hashtags"
              className="block text-md font-medium text-purple-800 mb-1"
            >
              Hashtags:
            </label>
            <textarea
              name="edited_hashtags"
              id="edited_hashtags"
              rows="2"
              placeholder="#HappyHoli #FestivalOfColors #Holi2025"
              value={editedHashtags}
              onChange={(e) => setEditedHashtags(e.target.value)}
              className="w-full px-3 py-2 border-2 border-purple-500 rounded-lg focus:border-purple-600 focus:outline-none text-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-md font-medium"
            >
              Generate Post
            </button>

            <button
              type="button"
              onClick={downloadImage}
              className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-md font-medium"
            >
              Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  //   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-8 px-4">
  //     <div className="max-w-6xl mx-auto">
  //       <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
  //         Edit Your Social Media Post
  //       </h1>

  //       {/* Canvas */}
  //       <div className="flex justify-center mb-8">
  //         <canvas
  //           ref={canvasRef}
  //           width={800}
  //           height={1000}
  //           className="border-4 border-gray-800 rounded-xl shadow-lg cursor-move bg-white"
  //           onMouseDown={handleMouseDown}
  //           onMouseMove={handleMouseMove}
  //           onMouseUp={handleMouseUp}
  //           onMouseLeave={handleMouseUp}
  //         />
  //       </div>

  //       {/* Controls */}
  //       <div className="flex flex-wrap justify-center gap-4 mb-8">
  //         <input
  //           type="file"
  //           id="uploadLogo"
  //           accept="image/*"
  //           onChange={handleLogoUpload}
  //           className="hidden"
  //         />
  //         <label
  //           htmlFor="uploadLogo"
  //           className="px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
  //         >
  //           Upload Logo
  //         </label>

  //         <div className="flex items-center gap-2">
  //           <label htmlFor="bgColor" className="font-medium text-gray-700">
  //             Background:
  //           </label>
  //           <input
  //             type="color"
  //             id="bgColor"
  //             value={bgColor}
  //             onChange={(e) => setBgColor(e.target.value)}
  //             className="w-10 h-10 rounded-lg border-2 border-gray-800"
  //           />
  //         </div>

  //         <div className="flex items-center gap-2">
  //           <input
  //             type="text"
  //             id="customText"
  //             placeholder="Enter text"
  //             value={customText}
  //             onChange={(e) => setCustomText(e.target.value)}
  //             className="px-4 py-2 border-2 border-gray-800 rounded-lg"
  //           />
  //           <button
  //             onClick={addText}
  //             className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
  //           >
  //             Add Text
  //           </button>
  //         </div>

  //         <div className="flex items-center gap-2">
  //           <label htmlFor="textColor" className="font-medium text-gray-700">
  //             Text Color:
  //           </label>
  //           <input
  //             type="color"
  //             id="textColor"
  //             value={textColor}
  //             onChange={(e) => setTextColor(e.target.value)}
  //             className="w-8 h-8 rounded-lg border-2 border-gray-800"
  //           />
  //         </div>

  //         <div className="flex items-center gap-2">
  //           <label htmlFor="textSize" className="font-medium text-gray-700">
  //             Text Size:
  //           </label>
  //           <input
  //             type="range"
  //             id="textSize"
  //             min="10"
  //             max="100"
  //             value={textSize}
  //             onChange={(e) => setTextSize(parseInt(e.target.value))}
  //             className="w-32"
  //           />
  //           <span>{textSize}</span>
  //         </div>

  //         <button
  //           onClick={removeSelected}
  //           className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
  //         >
  //           Remove Selected
  //         </button>

  //         <button
  //           onClick={undo}
  //           className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
  //         >
  //           Undo
  //         </button>
  //       </div>

  //       {/* Stickers */}
  //       <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-8">
  //         <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
  //           Stickers
  //         </h3>
  //         <div className="flex flex-wrap justify-center gap-4">
  //           <img
  //             src="https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
  //             alt="Sticker 1"
  //             onClick={() =>
  //               addSticker(
  //                 "https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
  //               )
  //             }
  //             className="w-24 h-24 cursor-pointer border-2 border-transparent rounded-lg hover:border-green-600 hover:scale-110 transition-all"
  //           />
  //           <img
  //             src="https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
  //             alt="Sticker 2"
  //             onClick={() =>
  //               addSticker(
  //                 "https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
  //               )
  //             }
  //             className="w-24 h-24 cursor-pointer border-2 border-transparent rounded-lg hover:border-green-600 hover:scale-110 transition-all"
  //           />
  //         </div>
  //       </div>

  //       {/* Filters */}
  //       <div className="flex justify-center mb-8">
  //         <div className="flex items-center gap-4 bg-white bg-opacity-80 rounded-xl shadow-lg p-4">
  //           <label htmlFor="filter" className="font-medium text-gray-700">
  //             Apply Filter:
  //           </label>
  //           <select
  //             id="filter"
  //             value={currentFilter}
  //             onChange={(e) => applyFilter(e.target.value)}
  //             className="px-4 py-2 border-2 border-gray-800 rounded-lg"
  //           >
  //             <option value="none">None</option>
  //             <option value="grayscale">Grayscale</option>
  //             <option value="sepia">Sepia</option>
  //             <option value="invert">Invert</option>
  //             <option value="saturate">Saturate</option>
  //           </select>
  //         </div>
  //       </div>

  //       {/* Finalize Form */}
  //       <form
  //         onSubmit={handleSubmit}
  //         className="bg-white bg-opacity-80 rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
  //       >
  //         <p className="mb-4">
  //           <strong className="text-gray-800">Product Name:</strong>{" "}
  //           {productName}
  //         </p>

  //         <div className="mb-6">
  //           <label
  //             htmlFor="edited_caption"
  //             className="block text-lg font-medium text-gray-800 mb-2"
  //           >
  //             Edit Caption:
  //           </label>
  //           <textarea
  //             name="edited_caption"
  //             id="edited_caption"
  //             rows="4"
  //             value={editedCaption}
  //             onChange={(e) => setEditedCaption(e.target.value)}
  //             className="w-full px-4 py-2 border-2 border-gray-800 rounded-lg focus:border-green-600 focus:outline-none"
  //           />
  //         </div>

  //         <div className="mb-6">
  //           <label
  //             htmlFor="edited_hashtags"
  //             className="block text-lg font-medium text-gray-800 mb-2"
  //           >
  //             Edit Hashtags:
  //           </label>
  //           <textarea
  //             name="edited_hashtags"
  //             id="edited_hashtags"
  //             rows="2"
  //             value={editedHashtags}
  //             onChange={(e) => setEditedHashtags(e.target.value)}
  //             className="w-full px-4 py-2 border-2 border-gray-800 rounded-lg focus:border-green-600 focus:outline-none"
  //           />
  //         </div>

  //         <div className="flex flex-wrap justify-center gap-4">
  //           <button
  //             type="submit"
  //             className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
  //           >
  //             Finalize Post
  //           </button>

  //           <button
  //             type="button"
  //             onClick={downloadImage}
  //             className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
  //           >
  //             Download Image
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
}
