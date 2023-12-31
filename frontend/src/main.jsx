import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import productsReducer, { ProductFetch } from "./features/productsSlice";
import cartReducer, { getTotals } from "./features/cartSlice";
import authReducer from "./features/authSlice";
import { productsApi } from "./features/productsApi";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(ProductFetch());
store.dispatch(getTotals());



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

);