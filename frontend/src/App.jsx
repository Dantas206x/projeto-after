import  Contact  from "./components/Contact";
import  Footer  from "./components/Footer";
import  Galeria  from "./components/Galeria";
import Cart from "./components/Cart";
import  Navbar  from "./components/Navbar";
import  News  from "./components/News";
import  Shop  from "./components/shop";
import  Sobre  from "./components/Sobre";

import Home from "./components/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";



function App() {

  return (

    <BrowserRouter>
      <ToastContainer />
      <div className="relative  gradientecoral">
        <div className="">
          <div>
            <a href="https://chat.whatsapp.com/CtcJgzlA4SbE75zje3wWPl" target="_blank" className="fixed right-5 bottom-5 rounded-full transition-all delay-100  hover:scale-110 position z-10 ">
              <img src="https://cdn-icons-png.flaticon.com/512/220/220236.png" width={50} />
            </a>
          </div>
        </div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Novidades" element={<News/>}/>
          <Route exact path="/Galeria" element={<Galeria/>}/>
          <Route exact path="/Sobre" element={<Sobre/>}/>
          <Route exact path="/Contatos" element={<Contact/>}/>
          <Route exact path="/Loja" element={<Shop/>}/>
          <Route exact path="/Carrinho" element={<Cart/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Registrar" element={<Register/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App

