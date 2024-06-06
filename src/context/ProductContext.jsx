import React, { createContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProduct(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
}

export default ProductProvider;
