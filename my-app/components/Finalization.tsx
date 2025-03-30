"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Share,
  Calendar,
  Download,
  Printer,
  Facebook,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
      const response = await fetch("http://127.0.0.1:8000/api/schedule-post", {
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
    // <div className="font-sans text-center mx-5 my-10">
    //   <h1 className="text-3xl font-bold mb-6">Your Finalized Post</h1>

    //   <h2 className="text-2xl font-semibold mb-4">{product_name}</h2>

    //   <p className="font-bold mb-2">Caption:</p>
    //   <p className="mb-6">{caption}</p>

    //   <p className="font-bold mb-2">Hashtags:</p>
    //   <p className="mb-6">{hashtags}</p>

    //   {image_url ? (
    //     <img
    //       id="finalImage"
    //       src={image_url}
    //       alt="Final Image"
    //       className="rounded-lg shadow-md mx-auto mb-6 max-w-full h-auto"
    //       width="400"
    //     />
    //   ) : null}
    //   <br />

    //   <div className="flex justify-center gap-4 mb-8">
    //     <button
    //       onClick={() => window.print()}
    //       className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
    //     >
    //       Print or Save
    //     </button>
    //     <button
    //       onClick={downloadImage}
    //       className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
    //     >
    //       Download Image
    //     </button>
    //   </div>

    //   <h3 className="text-xl font-semibold mb-4">Upload to Social Media</h3>
    //   <div className="flex flex-wrap justify-center gap-3 mb-10">
    //     <button
    //       onClick={shareOnFacebook}
    //       className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
    //     >
    //       Facebook
    //     </button>
    //     <button
    //       onClick={shareOnTwitter}
    //       className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
    //     >
    //       Twitter (X)
    //     </button>
    //     <button
    //       onClick={shareOnLinkedIn}
    //       className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
    //     >
    //       LinkedIn
    //     </button>
    //     <button
    //       onClick={shareOnWhatsApp}
    //       className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
    //     >
    //       WhatsApp
    //     </button>
    //   </div>

    //   <div className="max-w-md mx-auto mt-8 p-5 border border-gray-300 rounded-lg bg-gray-50">
    //     <h3 className="text-xl font-semibold mb-4">Schedule Post</h3>
    //     <form onSubmit={handleScheduleSubmit} className="space-y-4">
    //       <input type="hidden" name="image_url" value={image_url} />
    //       <input type="hidden" name="caption" value={caption} />
    //       <input type="hidden" name="hashtags" value={hashtags} />

    //       <div>
    //         <label htmlFor="schedule_time" className="block mb-2">
    //           Select Date & Time:
    //         </label>
    //         <input
    //           type="datetime-local"
    //           id="schedule_time"
    //           name="schedule_time"
    //           required
    //           value={scheduleTime}
    //           onChange={(e) => setScheduleTime(e.target.value)}
    //           className="w-full p-2 border border-gray-300 rounded"
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors w-full"
    //       >
    //         Schedule Post
    //       </button>
    //     </form>
    //   </div>

    //   {/* OpenGraph meta tags */}
    //   <head>
    //     <meta property="og:image" content={image_url} />
    //     <meta property="og:title" content={product_name} />
    //     <meta property="og:description" content={caption} />
    //     <meta property="og:type" content="website" />
    //   </head>
    // </div>
    <div
      className="min-h-screen bg-cover bg-no-repeat p-4 md:p-8"
      style={{
        backgroundImage: "url('/Frame 41.png')",
      }}
    >
      <Card className="max-w-6xl mx-auto overflow-hidden border-none shadow-lg">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Image Column */}
            <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-10">
              <div className="relative group">
                <img
                  src={image_url || "/placeholder.svg"}
                  alt={product_name}
                  className="rounded-lg shadow-md max-w-full h-auto object-cover transition-all duration-300 group-hover:shadow-xl"
                />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full shadow-lg"
                    onClick={downloadImage}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full md:w-1/2 bg-white p-6 md:p-10">
              <h1 className="text-2xl font-bold text-slate-800 mb-6">
                Your Finalized Post
              </h1>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-800 mb-2">
                    {product_name}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-black font-satoshi mt-4">
                        Caption
                      </p>
                      <p className="text-slate-700">{caption}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-black font-satoshi mt-4">
                        Hashtags
                      </p>
                      <p className="text-blue-500">{hashtags}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => window.print()}
                    >
                      <Printer className="h-3.5 w-3.5" />
                      <span>Print</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={downloadImage}
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Download</span>
                    </Button>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-700 mb-2 flex items-center gap-1">
                      <Share className="h-3.5 w-3.5" />
                      <span className="text-black font-satoshi">
                        Share on Social Media
                      </span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        className="bg-[#1877F2] hover:bg-[#0E65D9] text-white"
                        onClick={() => shareOnFacebook()}
                      >
                        <Facebook className="h-3.5 w-3.5 mr-1" />
                        Facebook
                      </Button>
                      <Button
                        size="sm"
                        className="bg-black hover:bg-gray-800 text-white"
                        onClick={() => shareOnTwitter()}
                      >
                        <Twitter className="h-3.5 w-3.5 mr-1" />
                        Twitter
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#0A66C2] hover:bg-[#084E96] text-white"
                        onClick={() => shareOnLinkedIn()}
                      >
                        <Linkedin className="h-3.5 w-3.5 mr-1" />
                        LinkedIn
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#25D366] hover:bg-[#1FAD53] text-white"
                        onClick={() => shareOnWhatsApp()}
                      >
                        <Send className="h-3.5 w-3.5 mr-1" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-medium text-slate-700 mb-2 flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="text-black font-satoshi">
                      Schedule Post
                    </span>
                  </p>
                  <form onSubmit={handleScheduleSubmit} className="space-y-3">
                    <input
                      type="datetime-local"
                      id="schedule_time"
                      name="schedule_time"
                      required
                      value={scheduleTime}
                      onChange={(e) => setScheduleTime(e.target.value)}
                      className="w-full p-2 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium mt-4"
                    >
                      Schedule Post
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
