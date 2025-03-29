"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SocialMediaPostEditor from "../edit-post/page";
import Canvas from "../../components/Canvas";

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
    <Canvas
      productName={postData.productName || postData.product_name}
      caption={postData.caption}
      hashtags={postData.hashtags}
      imageUrl={postData.imageUrl || postData.image_url}
    />
  );
}
