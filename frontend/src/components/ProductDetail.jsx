import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { addToCartS } from "../features/cartSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rproducts from "../../../backend/Rproducts";
import { Pagination, Navigation } from "swiper/modules";
import CustomRating from "./CustomRating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState(1);

  const handleImageChange = (index) => {
    console.log("Image index changed to:", index);
    setImages(index);
  };

  const handleAddToCart = () => {
    console.log("Adding to cart - Product:", product);
    console.log("Quantity to be added to cart:", quantity);
    dispatch(addToCartS({ ...product, quantity }));
  };

  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);
    console.log("Quantity changed to:", newQuantity);
    setQuantity(newQuantity);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 ">
        <div className="flex flex-col md:flex-row -mx-4 bg-neutral-200 rounded-lg">
          <div className="md:flex-1 px-4 items-center flex justify-center ">
            <div className="h-64 md:h-80 rounded-lg bg-gray-300 mb-4">
              <div className="flex items-center justify-center">
                {product.images.map((imagesUrl, index) => (
                  <div
                    key={index}
                    style={{ display: images === index + 1 ? "block" : "none" }}
                    className="h-64 md:h-80 rounded-lg glass mb-4 flex items-center justify-center"
                  >
                    <img
                      src={imagesUrl}
                      alt={`Imagem ${index + 1}`}
                      className="max-h-full max-w-full"
                    />
                  </div>
                ))}
              </div>

              <div className="flex -mx-2 mb-4">
                {product.images.map((imagesUrl, index) => (
                  <div key={index} className="flex-1 px-2 hover:scale-110">
                    <button
                      onClick={() => handleImageChange(index + 1)}
                      className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                        images === index + 1
                          ? "ring-2 text-black ring-inset"
                          : ""
                      }`}
                    >
                      <img
                        src={imagesUrl}
                        alt={`Imagem ${index + 1}`}
                        className="max-h-full max-w-full "
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4 mt-28">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-black text-2xl md:text-3xl">
              {product.name}
            </h2>
            <p className="text-black text-sm">
              fubs{" "}
              <a href="#" className="text-black hover:underline">
                Fubecas
              </a>
            </p>

            <div className="flex items-center bg-neutral-300 rounded-lg space-x-4 my-4">
              <div>
                <div className="rounded-lg flex py-2 px-3">
                  <span className="text-black mr-1 mt-1">R$</span>
                  <span className="font-bold text-black text-3xl">
                    {product.price}
                  </span>
                </div>
              </div>
              <div className="flex-1 rounded-lg">
                <p className=" text-red text-xl font-semibold">
                  Economize 202%
                </p>
                <p className="  text-black text-sm">Incluindo as taxas.</p>
              </div>
            </div>

            <p className="text-black">{product.desc}</p>

            <div className="flex py-4 space-x-4">
              <div className="relative">
                <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                  QNT
                </div>
                <select
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>

                <svg
                  className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
              <div className="bg-neutral-600 rounded-xl">
                <Link to="/Carrinho">
                  <button
                    type="button"
                    className="h-14 px-6 py-2 font-semibold rounded-xl  hover:bg-zinc-700 text-white"
                    onClick={handleAddToCart}
                  >
                    Adicionar ao <ShoppingCartIcon/>
                  </button>
                </Link>
              </div>
              <div>
              <CustomRating
                  productId={id}
                  initialRating={product.ratings ? product.ratings[0] : 0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="font-bold text-2xl text-gray-800 border-b border-gray-300 mb-6 text-center">
          Produtos recomendados
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
        >
          {shuffleArray(Rproducts).map((product, index) => (
            <SwiperSlide key={index}>
              <div className="w-64 bg-white p-4 border rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-700 mt-2">Preço: R$ {product.price}</p>
                {/* Adicione outros detalhes do produto aqui */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetail;
