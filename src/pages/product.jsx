import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Commento from "../components/Commento";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Product = () => {
  //   const { id } = useParams();
  let query = useQuery();
  const id = query.get("id");
  return <Commento pageId={id} />;
};

export default Product;
