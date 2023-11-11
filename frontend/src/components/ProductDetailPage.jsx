import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";
import { useGetAllProductsQuery } from "../features/productsApi.js";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { data: products } = useGetAllProductsQuery(); // Obtenha os produtos da consulta

  useEffect(() => {
    if (products) {
      // Verifique se os produtos estão disponíveis
      const productDetails = products.find((p) => p.id === parseInt(id, 10));

      if (productDetails) {
        setProduct(productDetails);
      }
    }
  }, [id, products]);

  if (!product) {
    return <p>Carregando...</p>;
  }

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;