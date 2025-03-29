"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FinalPost({
  image_url,
  product_name,
  caption,
  hashtags,
}: {
  image_url: string;
  product_name: string;
  caption: string;
  hashtags: string;
}) {
  const router = useRouter();
  const [scheduleTime, setScheduleTime] = useState("");

  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = "final_post.png";
    link.href = image_url;
    link.click();
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${caption} ${hashtags}`);
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    );
  };

  const shareOnWhatsApp = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${caption} ${hashtags}`);
    window.open(`https://api.whatsapp.com/send?text=${text} ${url}`, "_blank");
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/schedule-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_url,
          caption,
          hashtags,
          schedule_time: scheduleTime,
        }),
      });

      if (response.ok) {
        alert("Post scheduled successfully!");
      } else {
        throw new Error("Failed to schedule post");
      }
    } catch (error) {
      console.error("Error scheduling post:", error);
      alert("Error scheduling post. Please try again.");
    }
  };

  return (
    <div className="font-sans text-center mx-5 my-10">
      <h1 className="text-3xl font-bold mb-6">Your Finalized Post</h1>

      <h2 className="text-2xl font-semibold mb-4">{product_name}</h2>

      <p className="font-bold mb-2">Caption:</p>
      <p className="mb-6">{caption}</p>

      <p className="font-bold mb-2">Hashtags:</p>
      <p className="mb-6">{hashtags}</p>

      <img
        id="finalImage"
        src={image_url}
        alt="Final Image"
        className="rounded-lg shadow-md mx-auto mb-6 max-w-full h-auto"
        width="400"
      />
      <br />

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => window.print()}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
        >
          Print or Save
        </button>
        <button
          onClick={downloadImage}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
        >
          Download Image
        </button>
      </div>

      <h3 className="text-xl font-semibold mb-4">Upload to Social Media</h3>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={shareOnFacebook}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
        >
          Facebook
        </button>
        <button
          onClick={shareOnTwitter}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
        >
          Twitter (X)
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
        >
          LinkedIn
        </button>
        <button
          onClick={shareOnWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
        >
          WhatsApp
        </button>
      </div>

      <div className="max-w-md mx-auto mt-8 p-5 border border-gray-300 rounded-lg bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">Schedule Post</h3>
        <form onSubmit={handleScheduleSubmit} className="space-y-4">
          <input type="hidden" name="image_url" value={image_url} />
          <input type="hidden" name="caption" value={caption} />
          <input type="hidden" name="hashtags" value={hashtags} />

          <div>
            <label htmlFor="schedule_time" className="block mb-2">
              Select Date & Time:
            </label>
            <input
              type="datetime-local"
              id="schedule_time"
              name="schedule_time"
              required
              value={scheduleTime}
              onChange={(e) => setScheduleTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors w-full"
          >
            Schedule Post
          </button>
        </form>
      </div>

      {/* OpenGraph meta tags */}
      <head>
        <meta property="og:image" content={image_url} />
        <meta property="og:title" content={product_name} />
        <meta property="og:description" content={caption} />
        <meta property="og:type" content="website" />
      </head>
    </div>
  );
}
