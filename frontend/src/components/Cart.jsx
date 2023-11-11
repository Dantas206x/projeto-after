import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";

import { logoutUser } from '../features/authSlice';

import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
    console.log("getTotals dispatch executed."); 
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    console.log("Product being added to cart:", product); 
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleLogout = () => {
    const dispatch = useDispatch();
  
    dispatch(clearCart());

    dispatch(logoutUser());

    history.push('/login');
  };



  return (
    <div className="">
    <div className="cart-container my-20 ">
      <h2 className="bg-neutral-800 rounded-xl">Carrinho</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty min-h-screen">
          <p>Seu carrinho esta vazio.</p>
          <div className="start-shopping">
            <Link to="/Loja">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Ir para a Loja</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title text-black font-semibold">Item</h3>
            <h3 className="price text-black font-semibold">Preço</h3>
            <h3 className="quantity text-black font-semibold">Quantidade</h3>
            <h3 className="total text-black font-semibold">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3 className="font-semibold text-black uppercase">{cartItem.name}</h3>
                      <p className="font-semibold text-black ">{cartItem.cdesc}</p>
                      <button  className="uppercase" onClick={() => handleRemoveFromCart(cartItem)}>
                        Remover
                      </button>
                    </div>
                  </div>
                  <div className=" font-semibold text-black uppercase">R${cartItem.price}</div>
                  <div className="cart-product-quantity text-black font-semibold">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price text-black font-semibold">
                    R${(cartItem.price * cartItem.cartQuantity).toFixed(2)}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Limpar
            </button>
            <div className="cart-checkout  bg-neutral-800 p-5 rounded-lg" >
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">R${cart.cartTotalAmount}</span>
              </div>
              <p>A taxa será calculada após a finalização da compra.</p>
              {auth._id ? (
                <button className="text-white font-semibold">Finalização da compra</button>
              ) : (
                <Link to="/Login">
                  <button className="text-white font-semibold" onClick={() => navigate("/login")}>
                    Faça login para o checkout
                  </button>
                </Link>
              )}
              <div className="continue-shopping" >
                <Link to="/Loja">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span className="text-white">Continuar comprando</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
