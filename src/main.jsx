import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/theme.css";
import "./styles/animations.css";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <FavoritesProvider>

      <CartProvider>

        <App />

      </CartProvider>

    </FavoritesProvider>

  </React.StrictMode>

);