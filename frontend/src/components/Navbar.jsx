import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { useSelector, useDispatch } from "react-redux";
import ProfilePage from "./ProfilePage";
import { logoutUser } from "../features/authSlice";
import styledd from "styled-components";
import { clearCart } from "../features/cartSlice";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ContactsIcon from "@mui/icons-material/Contacts";
import CollectionsIcon from "@mui/icons-material/Collections";
import StoreIcon from "@mui/icons-material/Store";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOverlayToggle = () => {
    setOverlayVisible(!overlayVisible);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate("/login");
  };

  const handleNavItemClick = (navTitle) => {
    setActive(navTitle);
    setToggle(false); // Fechar o menu ao clicar em uma opção do Navbar
    setOverlayVisible(false); // Fechar o overlay ao clicar em uma opção do Navbar
  };

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
        scrolled ? "bg-neutral-800" : "bg-neutral-800"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-5xl mx-auto">
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
            className="w-160 h-20 max-[1024px]:hidden"
          />
        </Link>

        <ul className="list-none  sm flex flex-row gap-10  max-[700px]:hidden">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-white"
              } hover:text-stone-400 text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavItemClick(nav.title)}
            >
              <Link to={nav.id}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex estilo justify-self-end items-center max-[700px]:hidden">
          <div className="flex items-center m-2 relative">
            <Link>
              {toggle ? (
                <CloseIcon onClick={() => setToggle(!toggle)} />
              ) : (
                <PersonIcon onClick={() => setToggle(!toggle)} />
              )}
            </Link>
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              }  bg-neutral-800 rounded-bl-lg absolute top-[50px] p-10`}
            >
              {auth._id ? (
                <React.Fragment>
                  <div className="flex justify-end items-start flex-1 flex-col gap-5">
                    <button onClick={handleOverlayToggle} className="flex  justify-center items-center">
                      <PersonIcon />
                      Perfil
                    </button>

                    {overlayVisible && <ProfilePage />}
                    <Logout className="flex justify-center items-center"
                      onClick={() => {
                        handleLogout();
                        toast.warning("Logged out!", {
                          position: "bottom-left",
                        });
                        setToggle(!toggle);
                      }}
                    >
                      <LogoutIcon />
                      Deslogar
                    </Logout>
                  </div>
                </React.Fragment>
              ) : (
                <AuthLinks className="flex justify-end items-start flex-1 flex-col gap-5">
                  <div>
                    <Link to="/login" onClick={() => setToggle(!toggle)}>
                      Login
                    </Link>
                  </div>
                  <div>
                    <Link to="/Registrar" onClick={() => setToggle(!toggle)}>
                      Registrar
                    </Link>
                  </div>
                </AuthLinks>
              )}
            </div>
          </div>

          <div>
            <Link to="/Carrinho">
              <IconButton aria-label="cart" style={{ color: "white" }}>
                <StyledBadge badgeContent={cartTotalQuantity} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </div>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Link>
            {toggle ? (
              <CloseIcon onClick={() => setToggle(!toggle)} />
            ) : (
              <MenuIcon onClick={() => setToggle(!toggle)} />
            )}
          </Link>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-neutral-800 absolute top-[80px] p-10 right-0 min-h-screen bo-stone-950 `}
          >
            <div>
              <div>
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-10 ">
                  <Link to="/loja">
                    <div
                      className={`font-poppins font-medium cursor-pointer text-[16px] flex hover:text-neutral-600`}
                      onClick={() => handleNavItemClick("Loja")}
                    >
                      <StoreIcon />
                      &nbsp; Loja
                    </div>
                  </Link>
                  <Link to="/Carrinho">
                    <div
                      className={`font-poppins font-medium cursor-pointer text-[16px] flex hover:text-neutral-600`}
                      onClick={() => handleNavItemClick("Carrinho")}
                    >
                      <ShoppingCartIcon />
                      &nbsp; Carrinho
                    </div>
                  </Link>
              
                  <Link to="/Galeria">
                    <div
                      className={`font-poppins font-medium cursor-pointer text-[16px] flex hover:text-neutral-600`}
                      onClick={() => handleNavItemClick("Galeria")}
                    >
                      <CollectionsIcon />
                      &nbsp; Galeria
                    </div>
                  </Link>
                  {auth._id ? (
                <React.Fragment>
                  <div className="flex justify-end items-start flex-1 flex-col gap-5 font-poppins font-medium cursor-pointer text-[16px] ">
                    <button onClick={handleOverlayToggle} className="flex  justify-center items-center">
                      <PersonIcon />
                      &nbsp;  Perfil
                    </button>

                    {overlayVisible && <ProfilePage />}
                    <Logout className="flex justify-center items-center"
                      onClick={() => {
                        handleLogout();
                        toast.warning("Logged out!", {
                          position: "bottom-left",
                        });
                        setToggle(!toggle);
                      }}
                    >
                      <LogoutIcon />
                      &nbsp; Deslogar
                    </Logout>
                  </div>
                </React.Fragment>
              ) : (
                <AuthLinks className="flex justify-end items-start flex-1 flex-col gap-5">
                  <div>
                    <Link to="/login" onClick={() => setToggle(!toggle)}>
                      Login
                    </Link>
                  </div>
                  <div>
                    <Link to="/Registrar" onClick={() => setToggle(!toggle)}>
                      Registrar
                    </Link>
                  </div>
                </AuthLinks>
              )}
                  <Link to="/Novidades">
                    <div
                      className={`font-poppins font-medium cursor-pointer text-[16px] flex hover:text-neutral-600`}
                      onClick={() => handleNavItemClick("Novidades")}
                    >
                      <NewspaperIcon />
                      &nbsp; Novidades
                    </div>
                  </Link>
                  <Link to="/Contatos">
                    <div
                      className={`font-poppins font-medium cursor-pointer text-[16px] flex hover:text-neutral-600`}
                      onClick={() => handleNavItemClick("Contatos")}
                    >
                      <ContactsIcon />
                      &nbsp; Contatos
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

const Logout = styledd.div`
  color: white;
  cursor: pointer;
`;

const AuthLinks = styledd.div`
  a {
    display: block;
    margin-bottom: 10px;
  }
`;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));