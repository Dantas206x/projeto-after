import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Shop from "./components/Shop.jsx";
import Sobre from "./components/Sobre";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import ProductDetailPage from "./components/ProductDetailPage.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./features/authSlice.js";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);


  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="relative bg-neutral-300">
        <div className="">
          <div>
            <a href="https://chat.whatsapp.com/CtcJgzlA4SbE75zje3wWPl" target="_blank" className="fixed right-5 bottom-5 rounded-full transition-all delay-100  hover:scale-110 position z-10 ">
              <img src="https://cdn-icons-png.flaticon.com/512/220/220236.png" width={50} />
            </a>
          </div>
        </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Novidades" element={<News />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Contatos" element={<Contact />} />
        <Route path="/Loja" element={<Shop />} />
        <Route path="/Carrinho" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetailPage />}  />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrar" element={<Register />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;