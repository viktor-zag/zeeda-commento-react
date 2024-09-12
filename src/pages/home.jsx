import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {
  let query = useQuery();
  const productId = query.get("id");

  const iframeRef = useRef(null);

  const adjustIframeHeight = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const iframeContent =
        iframe.contentDocument || iframe.contentWindow.document;
      const rootDiv = iframeContent.getElementById("root");
      if (iframeContent) {
        console.log("iframe");
        console.log(iframeContent.body.clientHeight);
        console.log("root");
        console.log(rootDiv.clientHeight);
        iframe.style.height = iframeContent.body.scrollHeight + "px";
      }
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = adjustIframeHeight;
    }

    // Clean-up function
    return () => {
      if (iframe) {
        iframe.onload = null;
      }
    };
  }, []);

  return (
    <div>
      <iframe
        ref={iframeRef}
        src={"https://zeeda-commento.vercel.app/product/" + productId}
        style={{ width: "100%", border: "none" }}
      ></iframe>
    </div>
  );
};

export default Home;
