"use client";
import { useRef, useState, useEffect } from "react";

export default function SocialMediaPostEditor({
  productName,
  caption,
  hashtags,
  imageUrl,
}) {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Edit Your Social Media Post
        </h1>

        {/* Canvas */}
        <div className="flex justify-center mb-8">
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

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <input
            type="file"
            id="uploadLogo"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
          />
          <label
            htmlFor="uploadLogo"
            className="px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
          >
            Upload Logo
          </label>

          <div className="flex items-center gap-2">
            <label htmlFor="bgColor" className="font-medium text-gray-700">
              Background:
            </label>
            <input
              type="color"
              id="bgColor"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-10 h-10 rounded-lg border-2 border-gray-800"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              id="customText"
              placeholder="Enter text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="px-4 py-2 border-2 border-gray-800 rounded-lg"
            />
            <button
              onClick={addText}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Text
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="textColor" className="font-medium text-gray-700">
              Text Color:
            </label>
            <input
              type="color"
              id="textColor"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-8 h-8 rounded-lg border-2 border-gray-800"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="textSize" className="font-medium text-gray-700">
              Text Size:
            </label>
            <input
              type="range"
              id="textSize"
              min="10"
              max="100"
              value={textSize}
              onChange={(e) => setTextSize(parseInt(e.target.value))}
              className="w-32"
            />
            <span>{textSize}</span>
          </div>

          <button
            onClick={removeSelected}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Remove Selected
          </button>

          <button
            onClick={undo}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Undo
          </button>
        </div>

        {/* Stickers */}
        <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Stickers
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <img
              src="https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
              alt="Sticker 1"
              onClick={() =>
                addSticker(
                  "https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
                )
              }
              className="w-24 h-24 cursor-pointer border-2 border-transparent rounded-lg hover:border-green-600 hover:scale-110 transition-all"
            />
            <img
              src="https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
              alt="Sticker 2"
              onClick={() =>
                addSticker(
                  "https://img.freepik.com/premium-photo/stickers-instagram-post-15_1202918-286.jpg"
                )
              }
              className="w-24 h-24 cursor-pointer border-2 border-transparent rounded-lg hover:border-green-600 hover:scale-110 transition-all"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4 bg-white bg-opacity-80 rounded-xl shadow-lg p-4">
            <label htmlFor="filter" className="font-medium text-gray-700">
              Apply Filter:
            </label>
            <select
              id="filter"
              value={currentFilter}
              onChange={(e) => applyFilter(e.target.value)}
              className="px-4 py-2 border-2 border-gray-800 rounded-lg"
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
          method="POST"
          action="/finalize_post"
          className="bg-white bg-opacity-80 rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="{{ csrf_token }}"
          />

          <p className="mb-4">
            <strong className="text-gray-800">Product Name:</strong>{" "}
            {productName}
          </p>

          <div className="mb-6">
            <label
              htmlFor="edited_caption"
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              Edit Caption:
            </label>
            <textarea
              name="edited_caption"
              id="edited_caption"
              rows="4"
              value={editedCaption}
              onChange={(e) => setEditedCaption(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-800 rounded-lg focus:border-green-600 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="edited_hashtags"
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              Edit Hashtags:
            </label>
            <textarea
              name="edited_hashtags"
              id="edited_hashtags"
              rows="2"
              value={editedHashtags}
              onChange={(e) => setEditedHashtags(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-800 rounded-lg focus:border-green-600 focus:outline-none"
            />
          </div>

          <div className="text-center">
            <button
              href="/final-post"
              type="submit"
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
            >
              Finalize Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
