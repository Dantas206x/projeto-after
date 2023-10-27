import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import {  navLinks, navLinkss } from "../constants";
import { logo, menu, close, imagen8, imagen9 } from "../assets";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-1 max-[1024px]:py-7 fixed top-0 z-20 ${
        scrolled ? "gradientecor" : "gradientecor"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className=" w-160 h-20  max-[1024px]:hidden"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-white"
              } hover:text-stone-400 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex estilo justify-self-end  items-center max-[1024px]:hidden">
          <Link>
            <div className="flex items-center m-2">
              <img
                src={toggle ? close : imagen8}
                alt="imagen8"
                width={20}
                onClick={() => setToggle(!close)}
              />
            </div>
          </Link>
          <Link to="/Carrinho">
            <div className="flex items-center m-2 hover:scale-110">
              <img src={imagen9} width={20} />
              <span className="bag-quantity gradientecoral22">
                <span>{cartTotalQuantity}</span>
              </span>
            </div>
          </Link>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } glass absolute top-[84px] p-10 right-0 min-h-screen bo-stone-950 `}
          >
            <div>
              <div>
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-10 ">
                  {navLinkss.map((nav) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-neutral-600 ${
                        active === nav.title ? "text-black" : "text-white"
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`${nav.id}`}>{nav.title}</a>
                      
                    </li>
                  ))}
                  
                  <Link to="/Login">
                      <div className={`font-poppins font-medium cursor-pointer text-[16px] flex hover:text-neutral-600`}><img src={imagen8} width={20}/>&nbsp;
                      Perfil
                      </div>
                      
                      
                  
                  </Link>
                  <Link to="/Carrinho">
                      <div className={`font-poppins font-medium cursor-pointer text-[16px] flex hover:text-neutral-600`}><img src={imagen9} width={20} />&nbsp;
                      Carrinho
                      </div>
                      
                      
                  
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
