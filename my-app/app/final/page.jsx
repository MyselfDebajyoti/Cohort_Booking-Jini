// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import FinalPost from "../../components/Finalization";

// export default function EditPostPage() {
//   const searchParams = useSearchParams();
//   const encodedData = searchParams.get("data");
//   const [postData, setPostData] = useState(null);

//   useEffect(() => {
//     // Try to get data from URL first, then fall back to local storage
//     let data;
//     if (encodedData) {
//       data = JSON.parse(decodeURIComponent(encodedData));
//     } else {
//       const storedData = localStorage.getItem("instagramPostData");
//       if (storedData) {
//         data = JSON.parse(storedData);
//         console.log(data);
//       }
//     }

//     if (data) {
//       setPostData(data);
//     }
//   }, [encodedData]);

//   //   const [postData, setPostData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     try {
//       // Get data from localStorage
//       const storedData = localStorage.getItem("postData");

//       if (!storedData) {
//         setError("No post data found. Please go back and create a post.");
//         setLoading(false);
//         return;
//       }

//       const data = JSON.parse(storedData);
//       setPostData(data);
//       setLoading(false);
//       console.log(data);
//     } catch (error) {
//       console.error("Error retrieving post data:", error);
//       setError("Failed to load post data. Please try again.");
//       setLoading(false);
//     }
//   }, []);

//   if (!postData) {
//     return <div>Loading post data...</div>;
//   }

//   return <FinalPost />;
// }

"use client";
import { useEffect, useState } from "react";
import FinalPost from "../../components/Finalization";
import Final from "../testing/page";

export default function AnotherRoute() {
  // Initialize state to hold the data
  const [postData, setPostData] = useState({
    productName: "",
    caption: "",
    hashtags: "",
    imageUrl: "",
  });

  // Load data when component mounts
  useEffect(() => {
    try {
      // Get data from localStorage
      const storedData = localStorage.getItem("postData");

      if (storedData) {
        // Parse the JSON string back to an object
        const parsedData = JSON.parse(storedData);
        setPostData(parsedData);
      }
    } catch (error) {
      console.error("Error loading post data:", error);
    }
  }, []);

  // Destructure the data for easy use
  const { productName, caption, hashtags, imageUrl } = postData;

  return (
    <div>
      {/* Now you can use these variables or pass them as props */}
      <FinalPost
        image_url={imageUrl}
        product_name={productName}
        caption={caption}
        hashtags={hashtags}
      />
    </div>
  );
}
