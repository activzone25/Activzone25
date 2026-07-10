import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

import Cart from "../Cart/Cart";

import {
  FiSearch,
  FiHeart,
  FiShoppingCart
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";


function Header() {

  const [openCart, setOpenCart] = useState(false);

  const { cart } = useCart();


  return (
    <>

      <div className="top-banner">
        🚚 Envío gratis | ⭐ Parches GRATIS | 👕 Personalización +5€
      </div>


      <header className="header">


        <Link to="/" className="logo">
          <span className="logo-blue">
            ACTIV
          </span>
          ZONE25
        </Link>



        <nav className="menu">

          <Link to="/">
            Inicio
          </Link>

          <Link to="/adulto">
            Adulto
          </Link>

          <Link to="/nino">
            Niño
          </Link>

        </nav>



        <div className="header-actions">


          <button 
            className="icon-btn"
            aria-label="Buscar"
          >
            <FiSearch />
          </button>



          <button 
            className="icon-btn"
            aria-label="Favoritos"
          >
            <FiHeart />

            <span className="badge">
              0
            </span>

          </button>




          <button
            className="icon-btn"
            aria-label="Carrito"
            onClick={() => setOpenCart(true)}
          >

            <FiShoppingCart />

            <span className="badge">
              {cart.length}
            </span>

          </button>



          <a
            href="https://wa.me/34647602998"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp
          </a>


        </div>


      </header>


      <Cart
        open={openCart}
        setOpen={setOpenCart}
      />


    </>
  );
}


export default Header;