import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiMenu
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";

import "./Header.css";

function Header({
  search,
  setSearch,
  setCartOpen,
  setMenuOpen
}) {

  const { cart } = useCart();

  const totalProductos = cart.reduce(
    (sum, item) => sum + (item.cantidad || 1),
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
            placeholder="Buscar camiseta..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* ACCIONES */}
        <div className="header-actions">

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>

          <button
            className="cart-btn"
            onClick={() => setCartOpen(true)}
          >

            <FiShoppingCart />

            {totalProductos > 0 && (
              <span className="cart-count">
                {totalProductos}
              </span>
            )}

          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;