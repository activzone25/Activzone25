import { Link } from "react-router-dom";

import {
    FiHeart,
    FiMenu,
    FiSearch,
    FiShoppingCart
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
    const { totalProductos } = useCart();
    const { favorites } = useFavorites();

    const favoriteCount = favorites.length;
    const cartCount = totalProductos;


    return (
        <header className="header">
            <div className="header-container">
                <button
                    type="button"
                    className="menu-mobile"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Abrir menú"
                >
                    <FiMenu />
                </button>

                <Link
                    to="/"
                    className="logo"
                    aria-label="Activzone25 - Inicio"
                >
                    ACTIVZONE25
                </Link>

                <div className="search-box">
                    <FiSearch
                        className="search-icon"
                        aria-hidden="true"
                    />

                    <input
                        type="search"
                        value={search}
                        placeholder="Buscar camiseta..."
                        aria-label="Buscar camiseta"
                        onChange={(event) =>
                            setSearch(event.target.value)
                        }
                    />
                </div>

                <div className="header-actions">
                    <Link
                        to="/favoritos"
                        className="icon-btn"
                        aria-label={
                            favoriteCount > 0
                                ? `Favoritos, ${favoriteCount} productos`
                                : "Favoritos"
                        }
                    >
                        <FiHeart aria-hidden="true" />

                        {favoriteCount > 0 && (
                            <span className="count">
                                {favoriteCount}
                            </span>
                        )}
                    </Link>

                    <button
                        type="button"
                        className="icon-btn"
                        onClick={() => setCartOpen(true)}
                        aria-label={
                            cartCount > 0
                                ? `Carrito, ${cartCount} productos`
                                : "Carrito"
                        }
                    >
                        <FiShoppingCart aria-hidden="true" />

                        {cartCount > 0 && (
                            <span className="count">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button
                        type="button"
                        className="icon-btn menu-btn"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Abrir menú"
                    >
                        <FiMenu aria-hidden="true" />
                    </button>
                </div>
            </div>
        </header>
    );
}


export default Header;