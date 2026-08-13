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

                <button
                    className="menu-mobile"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Abrir menú"
                >
                    <FiMenu />
                </button>


                <Link
                    to="/"
                    className="logo"
                >
                    ACTIVZONE25
                </Link>


                <div className="search-box">

                    <FiSearch className="search-icon" />

                    <input
                        type="text"
                        placeholder="Buscar camiseta..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                <div className="header-actions">

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


                    <button
                        className="icon-btn"
                        onClick={() => setCartOpen(true)}
                        aria-label="Abrir carrito"
                    >

                        <FiShoppingCart />

                        {totalProductos > 0 && (
                            <span className="count">
                                {totalProductos}
                            </span>
                        )}

                    </button>


                    <button
                        className="icon-btn menu-btn"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Abrir menú"
                    >
                        <FiMenu />
                    </button>

                </div>

            </div>

        </header>
    );
}


export default Header;