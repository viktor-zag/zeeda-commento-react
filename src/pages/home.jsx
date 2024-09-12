import React from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {
  let query = useQuery();
  const productId = query.get("id");

  return (
    <div>
      <iframe
        src={"https://zeeda-commento.vercel.app/product/" + productId}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default Home;
