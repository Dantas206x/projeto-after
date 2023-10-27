import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productsApi, useGetAllProductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";
import { imagen9 } from "../assets";
import React from "react";

const Shop = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="  rounded-xl my-20 ">
      <div className="m-2" id="shop">
        {isLoading ? (
          <p>Carregando</p>
        ) : error ? (
          <p>parece que algo deu errado</p>
        ) : (
          <>
            <div className="home-title py-10">
              <span className="mb-9 font-bold text-3xl  px-4 py-4 uppercase">
                Loja
              </span>
            </div>

            <div className="grid grid-cols-5 gap-5  max-lg:grid-cols-2 ">
              {data?.map((product) => (
                <div key={product.id} className="product hover:scale-110   ">
                  <div className="fill">
                    <a href={`${product.url}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="fill-img bg-white"
                      />
                    </a>
                  </div>

                  <div className=" contentBox font-bold text-black-200 text-base mb-3">
                    <h3>{product.desc}</h3>
                    <h2 className=" price font-bold mb-3">
                      R${product.price}
                    </h2>
                    <button
                      className="hover:scale-110  hover:bg-neutral-600 flex items-center"
                      onClick={() => handleAddToCart(product)}
                    >
                      <img src={imagen9} width={20} />
                      &nbsp; Adicionar
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
