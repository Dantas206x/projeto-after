import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, imagen8, imagen9 } from "../assets";

const Navbar = () => {
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
      } w-full flex items-center py-1 fixed top-0 z-20 ${
        scrolled ? "gradientecor" : "gradientecor"
      }`}
    >
     
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className=' w-160 h-20 ' />
          <p className=' max-[1024px]:hidden text-white text-[20px] cursor-pointer flex font-bold uppercase'>
          AFTER&nbsp;MIDNIGHT
           
          </p>
        </Link>
        

        <ul className='list-none hidden sm:flex flex-row gap-10 '>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-white"
              } hover:text-stone-400 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="max-[768px]:hidden flex estilo " >
        <a href="/Login"  className="mx-4">
        <img src={imagen8} width={20} />

      </a> 
      <a href="/Register" className="mx-4">
        <img src={imagen9} width={20} />

      </a> 
      </div>
        
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-60 glass absolute top-20 right-0 mx-0 my-0 min-w-full z-10 rounded `}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-10'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                  
                </li>
              ))}
              <div className="rounded gradientecoral px-5 py-2.5 ">
             <a href="https://www.ingresso.com/" className="uppercase">
              <button>iNGRESSOS</button>
             </a>
             </div>
            </ul>
          </div>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;