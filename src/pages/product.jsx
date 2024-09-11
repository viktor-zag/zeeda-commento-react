import React from "react";
import { useParams } from "react-router-dom";
import Commento from "../components/Commento";

const Product = () => {
  const { id } = useParams();
  return <h1>{id}</h1>;
  //   return <Commento pageId={id} />;
};

export default Product;
