import { Link } from "react-router-dom";

import {
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiHeart
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

import "./Header.css";


function Header({

  search = "",

  setSearch = () => {},

  setCartOpen = () => {},

  setMenuOpen = () => {}

}) {


  const { cart } = useCart();

  const { favorites } = useFavorites();




  const totalProductos = cart.reduce(

    (total, item) =>

      total + (item.cantidad || 1),

    0

  );





  return (

    <header className="header">


      <div className="header-container">



        {/* LOGO */}

        <Link
          to="/"
          className="logo"
        >

          ACTIVZONE25

        </Link>






        {/* BUSCADOR */}

        <div className="search-box">


          <FiSearch />


          <input

            type="text"

            value={search}

            placeholder="Buscar camiseta..."

            onChange={(e)=>

              setSearch(e.target.value)

            }

          />


        </div>







        {/* ACCIONES */}

        <div className="header-actions">





          {/* FAVORITOS */}


          <Link

            to="/favoritos"

            className="icon-btn"

            aria-label="Favoritos"

          >


            <FiHeart />


            {favorites.length > 0 && (

              <span className="count">

                {favorites.length}

              </span>

            )}


          </Link>








          {/* CARRITO */}


          <button

            className="icon-btn"

            onClick={()=>setCartOpen(true)}

            aria-label="Carrito"

          >


            <FiShoppingCart />


            {totalProductos > 0 && (

              <span className="count">

                {totalProductos}

              </span>

            )}


          </button>







          {/* MENU */}


          <button

            className="icon-btn menu-btn"

            onClick={()=>setMenuOpen(true)}

            aria-label="Menú"

          >


            <FiMenu />


          </button>





        </div>


      </div>


    </header>

  );

}


export default Header;