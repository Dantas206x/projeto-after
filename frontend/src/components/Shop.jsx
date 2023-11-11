import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart, getTotals } from "../features/cartSlice";
import CustomRating, { averageRating } from "./CustomRating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";



const Shop = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();


  const handleAddToCart = (product) => {
    console.log("Adicionar ao carrinho:", product);
    dispatch(addToCart(product));
    dispatch(getTotals());
  };


  return (
    <div className="rounded-xl py-16">
      <div id="shop">
        {isLoading ? (
          <p>Carregando</p>
        ) : error ? (
          <p>Parece que algo deu errado</p>
        ) : (
          <>
            <div className="relative">
              <div className="absolute inset-0">
                <img
                  src="https://pbs.twimg.com/profile_banners/1560406068135706624/1677628656/1500x500"
                  alt="Banner Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center items-center h-80 mx-auto rounded-lg overflow-hidden"></div>
            </div>
            <div className="text-center py-4 font-bold  text-3xl text-gray-800 border-b border-gray-300 mb-6">
              DESTAQUES
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mx-auto max-w-7xl px-4">
              {data?.map((product) => (
                <div
                  key={product.id}
                  className="bg-neutral-200 rounded-lg shadow-lg flex flex-col justify-between"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-lg lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <a href={`/product/${product.id}`}>
                      <img
                        src={product?.image}
                        alt={product?.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </a>
                  </div>

                  {/* Nome do produto no topo */}
                  <div className="flex flex-col items-center mt-4">
                    <h3 className="text-lg font-bold text-gray-700">
                      {product.name}
                    </h3>
                  </div>

                  {/* Preço abaixo do nome do produto */}
                  <div className="flex flex-col items-center mt-2">
                    <p className="text-lg font-medium text-gray-900 flex items-center bg-neutral-300 rounded-lg">
                      R${product.price}{" "}
                      
                    </p>
                    <CustomRating productId={product.id} initialRating={0} />
                  </div>

                  {/* Botão de Adicionar ao Carrinho */}
                  <div className="py-5 text-sm text-gray-500 flex justify-center">
                    <button
                      className="bg-neutral-700 hover:bg-neutral-400  text-sm font-bold text-white p-4 rounded-lg flex items-center justify-center shadow-lg"
                      onClick={() => {
                        handleAddToCart(product);
                        dispatch(getTotals());
                      }}
                    >
                      <ShoppingCartIcon />
                      &nbsp; +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;
