import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart, getTotals } from "../features/cartSlice";
import CustomRating from "./CustomRating";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import axios from "axios";

const Shop = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const [productData, setProductData] = useState({
    id: 0,
    name: "",
    desc: "",
    price: 0.0,
    disc: "",
    autor: "",
    cdesc: "",
    image: "",
    images: ["", "", "", "", ""], // Inicialize com strings vazias
  });
  const [showForm, setShowForm] = useState(false);

  const formatImageString = (imageString) => {
    return imageString.split(",").map((url) => url.trim());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = name === "images" ? formatImageString(value) : value;
    setProductData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const handleChangeImage = (e, index) => {
    const { value } = e.target;
    const updatedImages = [...productData.images];
    updatedImages[index] = value;

    setProductData((prevData) => ({
      ...prevData,
      images: updatedImages,
    }));
  };

  const handleSubmitForm = async (productData) => {
    await axios.post("http://localhost:5000/api/addProduct", productData);
    console.log("Produto enviado com sucesso!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleSubmitForm(productData);

      setProductData({
        id: 0,
        name: "",
        desc: "",
        price: 0.0,
        disc: "",
        autor: "",
        cdesc: "",
        image: "",
        images: [],
      });

      console.log("Produto enviado com sucesso!");
      setShowForm(false);
    } catch (error) {
      console.error("Erro ao enviar produto:", error.message);
    }
  };

  const handleAddToCart = (product) => {
    console.log("Adicionar ao carrinho:", product);
    dispatch(addToCart(product));
    dispatch(getTotals());
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };
  
  const closeForm = () => {
    setShowForm(false);
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

            <div>
              <div>
                {isAdmin && (
                  <div>
                    <button
                      className="bg-neutral-700 hover:bg-neutral-400 text-sm font-bold text-white p-4 rounded-lg flex items-center justify-center shadow-lg right-0 fixed"
                      onClick={toggleFormVisibility}
                    >
                      <LibraryAddIcon />
                      &nbsp; +
                    </button>
                    {showForm && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                        <div className="max-w-2xl mx-auto p-6  bg-neutral-300  rounded shadow-md">
                          <button
                            className="absolute  w-8 h-8 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center"
                            onClick={closeForm}
                          >
                            <CloseIcon />
                          </button>
                          <h2 className="text-2xl font-bold mb-4  text-black text-center">
                            Postagem de Produto
                          </h2>
                          <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="mb-4">
                                <label className="block text-sm font-bold  text-black mb-2">
                                  ID:
                                </label>
                                <input
                                  type="text"
                                  id="id"
                                  name="id"
                                  value={productData.id}
                                  onChange={handleChange}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold  text-black mb-2">
                                  Nome do Produto:
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={productData.name}
                                  onChange={handleChange}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold  text-black mb-2">
                                  Descrição detalhada:
                                </label>
                                <input
                                  type="text"
                                  id="desc"
                                  name="desc"
                                  value={productData.desc}
                                  onChange={handleChange}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold  text-black mb-2">
                                  Preço do produto:
                                </label>
                                <input
                                  type="number"
                                  id="price"
                                  name="price"
                                  value={productData.price}
                                  onChange={handleChange}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold  text-black mb-2">
                                  Desconto do produto:
                                </label>
                                <input
                                  type="number"
                                  id="disc"
                                  name="disc"
                                  value={productData.disc}
                                  onChange={handleChange}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold  text-black mb-2">
                                  Autor do produto:
                                </label>
                                <input
                                  type="text"
                                  id="autor"
                                  name="autor"
                                  value={productData.autor}
                                  onChange={handleChange}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold  text-black mb-2">
                                  Descrição curta:
                                </label>
                                <input
                                  type="text"
                                  id="cdesc"
                                  name="cdesc"
                                  value={productData.cdesc}
                                  onChange={handleChange}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold  text-black mb-2">
                                  Imagem principal:
                                </label>
                                <input
                                  type="text"
                                  id="image"
                                  name="image"
                                  value={productData.image}
                                  onChange={handleChange}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold text-black mb-2">
                                  Imagem 1:
                                </label>
                                <input
                                  type="text"
                                  id="image1"
                                  name="image1"
                                  value={productData.images[0]}
                                  onChange={(e) => handleChangeImage(e, 0)}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold text-black mb-2">
                                  Imagem 2:
                                </label>
                                <input
                                  type="text"
                                  id="image2"
                                  name="image2"
                                  value={productData.images[1]}
                                  onChange={(e) => handleChangeImage(e, 1)}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold text-black mb-2">
                                  Imagem 3:
                                </label>
                                <input
                                  type="text"
                                  id="image3"
                                  name="image3"
                                  value={productData.images[2]}
                                  onChange={(e) => handleChangeImage(e, 2)}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold text-black mb-2">
                                  Imagem 4:
                                </label>
                                <input
                                  type="text"
                                  id="image4"
                                  name="image4"
                                  value={productData.images[3]}
                                  onChange={(e) => handleChangeImage(e, 3)}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-bold text-black mb-2">
                                  Imagem 5:
                                </label>
                                <input
                                  type="text"
                                  id="image5"
                                  name="image5"
                                  value={productData.images[4]}
                                  onChange={(e) => handleChangeImage(e, 4)}
                                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                  required
                                />
                              </div>
                            </div>
                            <div className="bg-neutral-800">
                              <button
                                type="submit"
                                className="w-full h-12 text-white font-bold rounded-md hover:bg-neutral-600"
                              >
                                Enviar Produto
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
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
