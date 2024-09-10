import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Commento from "../components/Commento";

const Product = () => {
  const { id } = useParams();
  return <Commento pageId={id} />;
};

export default Product;
