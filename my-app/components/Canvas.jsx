// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { useRef, useEffect } from "react";

// export default function InstagramPostCreator({
//   productName,
//   caption,
//   hashtags,
//   imageUrl,
// }) {

//   const filters = [
//     { name: "Vibrant", img: "/filter-vibrant.jpg" },
//     { name: "Contrasty", img: "/filter-contrasty.jpg" },
//     { name: "Sunset", img: "/filter-sunset.jpg" },
//     { name: "Pastel", img: "/filter-pastel.jpg" },
//   ];

//   const [selectedFilter, setSelectedFilter] = useState("Vibrant");
//   const [text, setText] = useState("");
//   //   const [textColor, setTextColor] = useState("#000000");
//   const [fontSize, setFontSize] = useState(16);
//   const [isBold, setIsBold] = useState(false);

//   const canvasRef = useRef(null);
//   const [elements, setElements] = useState([]);
//   const [selectedElement, setSelectedElement] = useState(null);
//   const [dragging, setDragging] = useState(false);
//   const [resizing, setResizing] = useState(false);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [history, setHistory] = useState([]);
//   const MAX_HISTORY_LENGTH = 20;

//   // Form state
//   const [editedCaption, setEditedCaption] = useState(caption);
//   const [editedHashtags, setEditedHashtags] = useState(hashtags);

//   // Control states
//   const [bgColor, setBgColor] = useState("#ffffff");
//   const [customText, setCustomText] = useState("");
//   const [textColor, setTextColor] = useState("#000000");
//   const [textSize, setTextSize] = useState(20);
//   const [currentFilter, setCurrentFilter] = useState("none");

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
//     <div className="flex flex-col w-full h-screen bg-white">
//       {/* Top Navigation Bar */}
//       <div className="flex items-center justify-between px-4 py-3 bg-purple-100 border-b border-purple-200">
//         <div className="flex items-center text-indigo-900 font-medium">
//           <span>Instagram Post</span>
//           <svg
//             className="w-4 h-4 ml-1"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </div>

//         <div className="flex-1 text-center font-medium text-black">
//           Celebrate the Colors of Holi at Yoyo ✨
//         </div>

//         <button className="px-4 py-1.5 bg-blue-600 text-white rounded font-medium text-sm hover:bg-blue-700">
//           Finalize Post
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-1 w-full">
//         {/* Left Panel */}
//         <div className="w-64 p-4 border-r border-gray-200 flex flex-col">
//           <div className="mb-4">
//             <h3 className="font-medium mb-2 text-black">Post Title</h3>
//             <input
//               type="text"
//               value={productName}
//               //   onChange={(e) => setPostTitle(e.target.value)}
//               readOnly
//               className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm text-black"
//             />
//           </div>

//           <div className="mb-4">
//             <h3 className="font-medium mb-2 text-black">Hashtags</h3>
//             <input
//               type="text"
//               value={hashtags}
//               onChange={(e) => setEditedHashtags(e.target.value)}
//               className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm text-black"
//             />
//           </div>

//           <div className="mb-4">
//             <h3 className="font-medium mb-2 text-black">Post Description</h3>
//             <textarea
//               value={caption}
//               onChange={(e) => setEditedCaption(e.target.value)}
//               className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm h-32 resize-none text-black"
//             />
//           </div>

//           {/* <div className="mb-4">
//             <h3 className="font-medium mb-2 text-black">Target Audience</h3>
//             <input
//               type="text"
//               value={targetAudience}
//               onChange={(e) => setTargetAudience(e.target.value)}
//               className="w-full p-2 bg-purple-50 rounded border border-purple-100 text-sm text-black"
//             />
//           </div> */}

//           <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium">
//             Generate ✨
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 relative">
//           <div className="text-center mb-2 text-gray-500 text-sm">
//             Instagram Post{" "}
//             <span className="px-1 py-0.5 bg-gray-200 rounded text-xs">
//               MOCKUPS
//             </span>
//           </div>

//           <div className="w-80 h-80 bg-white shadow-md relative overflow-hidden">
//             {/* <Image
//               src="/holi-celebration.jpg"
//               alt="Instagram post preview"
//               width={320}
//               height={320}
//               className="w-full h-full object-cover"
//             /> */}

//             <canvas
//               ref={canvasRef}
//               width={800}
//               height={1000}
//               className="border-4 border-gray-800 rounded-xl shadow-lg cursor-move bg-white"
//               onMouseDown={handleMouseDown}
//               onMouseMove={handleMouseMove}
//               onMouseUp={handleMouseUp}
//               onMouseLeave={handleMouseUp}
//             />
//           </div>

//           <div className="absolute bottom-4 flex space-x-2">
//             <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
//               <svg
//                 className="w-4 h-4 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                 />
//               </svg>
//               Undo
//             </button>

//             <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
//               <svg
//                 className="w-4 h-4 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M14 5l7 7m0 0l-7 7m7-7H3"
//                 />
//               </svg>
//               Redo
//             </button>

//             <button className="flex items-center px-3 py-2 bg-red-100 text-red-600 border border-red-200 rounded hover:bg-red-200">
//               <svg
//                 className="w-4 h-4 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                 />
//               </svg>
//               Delete selected
//             </button>
//           </div>
//         </div>

//         {/* Right Panel */}
//         <div className="w-64 p-4 border-l border-gray-200">
//           <div className="mb-6">
//             <h3 className="font-medium mb-2">Filters</h3>
//             <div className="grid grid-cols-4 gap-2">
//               {filters.map((filter) => (
//                 <div key={filter.name} className="flex flex-col items-center">
//                   <div
//                     className={`w-12 h-12 rounded overflow-hidden cursor-pointer border-2 ${
//                       selectedFilter === filter.name
//                         ? "border-blue-500"
//                         : "border-transparent"
//                     }`}
//                   >
//                     <Image
//                       src={filter.img}
//                       alt={filter.name}
//                       width={48}
//                       height={48}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <span className="text-xs mt-1">{filter.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6">
//             <h3 className="font-medium mb-2">Text</h3>
//             <input
//               type="text"
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               placeholder="Enter text"
//               className="w-full p-2 border border-gray-300 rounded mb-2"
//             />

//             <div className="flex items-center justify-between mt-4">
//               <input
//                 type="range"
//                 min="10"
//                 max="30"
//                 value={fontSize}
//                 onChange={(e) => setFontSize(parseInt(e.target.value))}
//                 className="w-1/2"
//               />

//               <button
//                 onClick={() => setIsBold(!isBold)}
//                 className={`px-2 py-1 ${
//                   isBold ? "bg-gray-200" : "bg-white"
//                 } border border-gray-300 rounded`}
//               >
//                 <span className="font-bold">T</span>
//               </button>

//               <button className="p-1 border border-gray-300 rounded">
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
//                   />
//                 </svg>
//               </button>

//               <button className="w-6 h-6 bg-green-500 rounded border border-gray-300"></button>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h3 className="font-medium mb-2">Stickers</h3>
//             <div className="grid grid-cols-4 gap-2">
//               {[1, 2, 3, 4].map((sticker) => (
//                 <div key={sticker} className="cursor-pointer">
//                   <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
//                     <Image
//                       src="/sticker-sample.jpg"
//                       alt={`Sticker ${sticker}`}
//                       width={40}
//                       height={40}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6">
//             <h3 className="font-medium mb-2">Image</h3>
//             <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded hover:bg-gray-50">
//               <svg
//                 className="w-4 h-4 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
//                 />
//               </svg>
//               Choose from computer
//             </button>
//           </div>

//           <button className="mt-auto w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded font-medium flex items-center justify-center">
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
//             Clear canvas
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InstagramPostCreator({
  productName,
  caption,
  hashtags,
  imageUrl,
}) {
  const filters = [
    { name: "Grayscale", img: imageUrl },
    { name: "Sepia", img: imageUrl },
    { name: "Invert", img: imageUrl },
    { name: "Saturate", img: imageUrl },
  ];

  const [selectedFilter, setSelectedFilter] = useState("None");
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [isBold, setIsBold] = useState(false);
  const router = useRouter();

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

  const [formData, setFormData] = useState({
    imagePrompt: "",
  });

  // Control states
  const [bgColor, setBgColor] = useState("#ffffff");
  const [customText, setCustomText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [textSize, setTextSize] = useState(20);
  const [currentFilter, setCurrentFilter] = useState("none");
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const [finalImageData, setFinalImageData] = useState(null);

  // Save current state to history
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

  //   const exportCanvas = () => {
  //     try {
  //       if (!canvasRef.current) {
  //         console.error("Canvas reference is not available");
  //         return null;
  //       }

  //       // Create a clean canvas to export
  //       const exportCanvas = document.createElement("canvas");
  //       exportCanvas.width = canvasRef.current.width;
  //       exportCanvas.height = canvasRef.current.height;
  //       const ctx = exportCanvas.getContext("2d");

  //       // Draw background
  //       ctx.fillStyle = bgColor;
  //       ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

  //       // Apply the same filter as the main canvas
  //       if (currentFilter !== "none") {
  //         ctx.filter = `${currentFilter}(100%)`;
  //       }

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

  //   const downloadImage = () => {
  //     try {
  //       if (!canvasRef.current) {
  //         console.error("Canvas reference is not available");
  //         alert("Canvas is not ready. Please try again.");
  //         return;
  //       }

  //       // Get the image data from the canvas
  //       const imageData = exportCanvas();

  //       if (!imageData) {
  //         throw new Error("Failed to export canvas");
  //       }

  //       // Create a temporary link to download the image
  //       const link = document.createElement("a");
  //       link.href = imageData;
  //       link.download = "edited-social-post.png";

  //       // Append to body, click, and remove (to trigger the download)
  //       document.body.appendChild(link);
  //       link.click();

  //       // Small timeout to ensure the download starts before removing the link
  //       setTimeout(() => {
  //         document.body.removeChild(link);
  //       }, 100);
  //     } catch (error) {
  //       console.error("Error downloading image:", error);
  //       alert("Unable to download image. Please try again with local images.");
  //     }
  //   };

  //     useEffect(() => {
  //       if (!imageUrl) return;

  //       const loadImageWithProxy = () => {
  //         const img = new window.Image();

  //         // Set crossOrigin before setting src
  //         img.crossOrigin = "anonymous";

  //         img.onload = () => {
  //           if (canvasRef.current) {
  //             canvasRef.current.width = img.naturalWidth;
  //             canvasRef.current.height = img.naturalHeight;

  //             const initialElements = [
  //               {
  //                 type: "image",
  //                 img: img,
  //                 x: 0,
  //                 y: 0,
  //                 width: img.naturalWidth,
  //                 height: img.naturalHeight,
  //               },
  //             ];

  //             setElements(initialElements);
  //             setHistory([JSON.stringify(initialElements)]);
  //             setIsCanvasReady(true);
  //           }
  //         };

  //         img.onerror = () => {
  //           console.error(
  //             "Failed to load image with CORS. Try using a CORS proxy or local images."
  //           );
  //           setIsCanvasReady(false);

  //           // Create empty canvas with default size as fallback
  //           if (canvasRef.current) {
  //             canvasRef.current.width = 400;
  //             canvasRef.current.height = 400;
  //             const ctx = canvasRef.current.getContext("2d");
  //             ctx.fillStyle = bgColor;
  //             ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  //             setIsCanvasReady(true);
  //           }
  //         };

  //         // Try to load with CORS proxy if it's an external URL
  //         if (
  //           imageUrl.startsWith("http") &&
  //           !imageUrl.startsWith(window.location.origin)
  //         ) {
  //           // You might need to set up your own CORS proxy or use services like cors-anywhere
  //           // img.src = `https://your-cors-proxy.com/${encodeURIComponent(imageUrl)}`;

  //           // For testing, try direct loading with crossOrigin set
  //           img.src = imageUrl;
  //         } else {
  //           img.src = imageUrl;
  //         }
  //       };

  //       loadImageWithProxy();
  //     }, [imageUrl, bgColor]);

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
  //       // Use the HTMLImageElement constructor instead of Image
  //       const logoImg = new window.Image();
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
  //     // Use the HTMLImageElement constructor instead of Image
  //     const stickerImg = new window.Image();
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

  //     // Use the HTMLImageElement constructor instead of Image
  //     const img = new window.Image();
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
      exportCanvas.width = 500;
      exportCanvas.height = 500;
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

  //   const regenerateImage = async () => {
  //     const prompt = formData.imagePrompt || "luxury hotel";

  //     try {
  //       const response = await fetch(
  //         `http://127.0.0.1:8000/api/generate-image?prompt=${encodeURIComponent(
  //           prompt
  //         )}`
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

  //       //   img.onerror = () => {
  //       //     showToast("Failed to regenerate the image. Please try again.");
  //       //   };
  //     } catch (error) {
  //       console.error("Error generating image:", error);
  //     }
  //   };

  // Regenerate image function
  const regenerateImage = async () => {
    const prompt = formData.imagePrompt || productName;

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/generate-image?prompt=${encodeURIComponent(
          prompt
        )}`
      );
      const data = await response.json();

      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.src = data.image_url + `?t=${new Date().getTime()}`;

      img.onload = () => {
        const canvasWidth = 500;
        const canvasHeight = 500;
        const ratio = Math.min(
          canvasWidth / img.naturalWidth,
          canvasHeight / img.naturalHeight
        );

        const newElements = [
          {
            type: "image",
            img: img,
            x: 0,
            y: 0,
            width: img.naturalWidth * ratio,
            height: img.naturalHeight * ratio,
          },
        ];

        // Keep any existing text elements
        const existingTextElements = elements.filter(
          (el) => el.type === "text"
        );
        setElements([...newElements, ...existingTextElements]);
        saveState([...newElements, ...existingTextElements]);
      };

      img.onerror = () => {
        console.error("Failed to load regenerated image");
      };
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Update selected text element if it exists
    if (selectedElement && selectedElement.type === "text") {
      if (name === "textColor") {
        setSelectedElement({ ...selectedElement, color: value });
      } else if (name === "textSize") {
        setSelectedElement({
          ...selectedElement,
          size: parseInt(value),
          font: `bold ${value}px Arial`,
        });
      }

      // Redraw canvas with updated text
      setElements((prev) => {
        const newElements = [...prev];
        const index = newElements.findIndex((el) => el === selectedElement);
        if (index !== -1) {
          newElements[index] = selectedElement;
          drawCanvas(canvasRef.current.getContext("2d"), newElements);
        }
        return newElements;
      });
    }
  };

  // Modified image loading with proper CORS handling
  useEffect(() => {
    if (!imageUrl) return;

    const loadImageWithProxy = () => {
      const img = new window.Image();

      // Set crossOrigin before setting src
      img.crossOrigin = "anonymous";

      img.onload = () => {
        if (canvasRef.current) {
          //   canvasRef.current.width = img.naturalWidth;
          //   canvasRef.current.height = img.naturalHeight;
          const canvasWidth = 500;
          const canvasHeight = 500;
          const ratio = Math.min(
            canvasWidth / img.naturalWidth,
            canvasHeight / img.naturalHeight
          );

          const initialElements = [
            {
              type: "image",
              img: img,
              x: 0,
              y: 0,
              width: img.naturalWidth * ratio,
              height: img.naturalHeight * ratio,
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
          canvasRef.current.width = 500;
          canvasRef.current.height = 500;
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
      const logoImg = new window.Image();
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
    const stickerImg = new window.Image();
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
    <div className="flex flex-col w-full h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#B8C0F1] border-b border-1 border-[#4A4A4A]">
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

        <div className="flex-1 text-center font-medium text-lg text-black">
          {productName}
        </div>

        <button className="px-4 py-1.5 bg-blue-600 text-white rounded font-medium text-sm hover:bg-blue-700">
          Finalize Post
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 w-full">
        {/* Left Panel */}
        <div className="w-84 p-4 border-r border-[#4A4A4A] border-1 flex flex-col">
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2 text-black font-satoshi">
              Post Title
            </h3>
            <input
              type="text"
              value={productName}
              readOnly
              className="w-full border-[#A6A6A6]   p-2 bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF] rounded border  text-sm text-black"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h3 className="font-medium mb-2 text-black font-satoshi text-lg">
                Hashtags
              </h3>
              <input
                type="text"
                value={hashtags}
                onChange={(e) => setEditedHashtags(e.target.value)}
                className="w-full p-2 border-[#A6A6A6] bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF]  rounded border  text-sm text-black"
              />
            </div>

            <div className="mb-4">
              <h3 className="font-medium mb-2 text-black font-satoshi text-lg">
                Post Description
              </h3>
              <textarea
                value={caption}
                onChange={(e) => setEditedCaption(e.target.value)}
                className="w-full p-2  border-[#A6A6A6] bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF]  rounded border text-sm h-32 resize-none text-black"
              />
            </div>
            <button
              className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium"
              type="submit"
            >
              Generate ✨
            </button>
          </form>
          <div className="mb-4">
            <h3 className="font-medium mb-2 text-black font-satoshi text-lg">
              Post Description
            </h3>
            <input
              name="imagePrompt"
              value={caption}
              placeholder="Describe the image you want"
              // onChange={(e) => setEditedCaption(e.target.value)}
              onChange={handleInputChange}
              className="w-full p-2  border-[#A6A6A6] bg-gradient-to-r from-[#E6E9FA]  to-[#ECE6FF]  rounded border text-sm  resize-none text-black"
            />
          </div>

          <button
            onClick={regenerateImage}
            className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium"
            type="submit"
          >
            Generate ✨
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center bg-[#E6E9FA] relative">
          <div className="text-center mb-2 text-gray-500 text-sm">
            Instagram Post{" "}
            <span className="px-1 py-0.5 bg-gray-200 rounded text-xs">
              MOCKUPS
            </span>
          </div>

          <div className="pb-12">
            <div className="inline-block bg-white shadow-md relative overflow-hidden">
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                className="border-2 border-gray-800 rounded-xl shadow-lg cursor-move bg-white"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              />
            </div>
          </div>

          <div className="absolute bottom-4 flex space-x-2">
            <button
              className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 text-black"
              onClick={undo}
            >
              <svg
                className="w-4 h-4 mr-2 text-black"
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

            <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 text-black">
              <svg
                className="w-4 h-4 mr-2 text-black"
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

            <button
              className="flex items-center px-3 py-2 bg-red-100 text-red-600 border border-red-200 rounded hover:bg-red-200"
              onClick={removeSelected}
            >
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
        <div className="w-74 p-4 border-l border-[#4A4A4A]">
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-black font-satoshi">
              Filters
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {filters.map((filter) => (
                <div
                  key={filter.name}
                  className="flex flex-col items-center"
                  onClick={() => setCurrentFilter(filter.name)}
                >
                  <div
                    className={`w-12 h-12 rounded overflow-hidden cursor-pointer border-2 ${
                      currentFilter === filter.name
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
                  <span className="text-xs mt-1 text-black">{filter.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2 text-black font-satoshi">Text</h3>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Enter text"
              className="w-full p-2 border border-gray-500 rounded mb-2 text-gray-800"
            />
            <button
              onClick={addText}
              className="w-full p-2 bg-blue-500 text-white rounded mb-2 "
            >
              Add Text
            </button>

            <div className="flex items-center justify-between mt-4">
              <input
                type="range"
                min="10"
                max="30"
                value={textSize}
                onChange={(e) => setTextSize(parseInt(e.target.value))}
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

              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-6 h-6 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2 text-black font-satoshi">
              Stickers
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((sticker) => (
                <div
                  key={sticker}
                  className="cursor-pointer"
                  onClick={() =>
                    addSticker("/eid/images__1_-removebg-preview.png")
                  }
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                    <Image
                      src="/eid/images__1_-removebg-preview.png"
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
            <h3 className="font-medium mb-2 text-black font-satoshi">Image</h3>
            <input
              type="file"
              id="logo-upload"
              className="hidden"
              onChange={handleLogoUpload}
              accept="image/*"
            />
            <label
              htmlFor="logo-upload"
              className="flex items-center justify-center w-full p-2 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer text-black"
            >
              <svg
                className="w-4 h-4 mr-2 text-gray-700"
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
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className="mt-auto w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded font-medium flex items-center justify-center"
              onClick={() => {
                setElements([]);
                saveState();
              }}
            >
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
            <button
              className="mt-auto w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded font-medium flex items-center justify-center"
              type="button"
              onClick={downloadImage}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
