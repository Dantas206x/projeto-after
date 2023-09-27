import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import productsReducer, { productsFetch } from "./features/productsSlice";

import { productsApi } from "./features/productsApi";

const store = configureStore({
  reducer: {
    products: productsReducer,

    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

);