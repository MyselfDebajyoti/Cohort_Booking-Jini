// "use client";

// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import SocialMediaPostEditor from "../edit-post/page";

// export default function EditPostPage() {
//   const searchParams = useSearchParams();
//   const encodedData = searchParams.get("data");

//   useEffect(() => {
//     // Try to get data from URL first, then fall back to local storage
//     let postData;
//     if (encodedData) {
//       postData = JSON.parse(decodeURIComponent(encodedData));
//     } else {
//       const storedData = localStorage.getItem("instagramPostData");
//       if (storedData) {
//         postData = JSON.parse(storedData);
//       }
//     }

//     if (postData) {
//       // Use the postData in your component
//       console.log(postData);
//       const { productName, caption, hashtags, imageURL } = postData;

//     }
//   }, [encodedData]);

//   // ... rest of your component
//   return (
//     <SocialMediaPostEditor
//       productName={productName}
//       caption={caption}
//       hashtags={hashtags}
//       imageUrl={imageURL}
//     ></SocialMediaPostEditor>
//   );

// }

"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SocialMediaPostEditor from "../edit-post/page";

export default function EditPostPage() {
  const searchParams = useSearchParams();
  const encodedData = searchParams.get("data");
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    // Try to get data from URL first, then fall back to local storage
    let data;
    if (encodedData) {
      data = JSON.parse(decodeURIComponent(encodedData));
    } else {
      const storedData = localStorage.getItem("instagramPostData");
      if (storedData) {
        data = JSON.parse(storedData);
      }
    }

    if (data) {
      setPostData(data);
    }
  }, [encodedData]);

  if (!postData) {
    return <div>Loading post data...</div>;
  }

  return (
    <SocialMediaPostEditor
      productName={postData.productName || postData.product_name}
      caption={postData.caption}
      hashtags={postData.hashtags}
      imageUrl={postData.imageUrl || postData.image_url}
    />
  );
}
