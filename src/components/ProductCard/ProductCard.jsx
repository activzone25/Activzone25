import { Link } from "react-router-dom";

import {
    FiArrowUpRight,
    FiHeart,
    FiShoppingCart
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

import "./ProductCard.css";


function ProductCard({ product }) {
    const { addToCart } = useCart();
    const { isFavorite, toggleFavorite } = useFavorites();

    const favorite = isFavorite(product.id);
    const price = Number(product.precio) || 25;
    const season = product.temporada || "2026/27";

    const image =
        product.front ||
        product.imagen ||
        product.image;


    function handleFavorite() {
        toggleFavorite(product);
    }


    function handleAddToCart() {
        addToCart({
            ...product,

            imagen: image,

            talla: product.categoria === "Niño" ? "16" : "M",

            nombrePersonalizado: "",
            numero: "",
            personalizada: false,

            precio: price,
            precioBase: price,
            extraPersonalizacion: 0,

            parche: {
                tipo: "sin-parche",
                nombre: ""
            }
        });
    }


    return (
        <article className="product-card">
            <div className="product-card-image">
                <Link
                    to={`/producto/${product.slug}`}
                    className="product-card-image-link"
                    aria-label={`Ver ${product.nombre}`}
                >
                    <div className="product-card-badges">
                        {product.nuevo && (
                            <span className="product-badge new">
                                ⭐ NUEVO {season}
                            </span>
                        )}

                        {product.oferta && (
                            <span className="product-badge offer">
                                OFERTA
                            </span>
                        )}
                    </div>

                    {image ? (
                        <img
                            src={image}
                            alt={product.nombre}
                            loading="lazy"
                            className="product-image"
                        />
                    ) : (
                        <div className="product-image-placeholder">
                            Sin imagen
                        </div>
                    )}

                    <div className="product-card-overlay">
                        <span>
                            Ver producto
                            <FiArrowUpRight />
                        </span>
                    </div>
                </Link>

                <button
                    type="button"
                    className={
                        favorite
                            ? "product-favorite active"
                            : "product-favorite"
                    }
                    onClick={handleFavorite}
                    aria-label={
                        favorite
                            ? "Quitar de favoritos"
                            : "Añadir a favoritos"
                    }
                >
                    <FiHeart aria-hidden="true" />
                </button>
            </div>

            <div className="product-card-info">
                <div className="product-card-top">
                    <div>
                        <span className="product-card-league">
                            {product.liga || "Fútbol"}
                        </span>

                        <Link
                            to={`/producto/${product.slug}`}
                            className="product-card-name"
                        >
                            {product.nombre}
                        </Link>
                    </div>

                    <strong className="product-card-price">
                        {price.toFixed(2)} €
                    </strong>
                </div>

                <div className="product-card-meta">
                    <span>👕 {season}</span>

                    {product.personalizable !== false && (
                        <span>✍️ +5 €</span>
                    )}
                </div>

                <div className="product-card-actions">
                    <Link
                        to={`/producto/${product.slug}`}
                        className="product-view"
                    >
                        Ver detalles
                        <FiArrowUpRight />
                    </Link>

                    <button
                        type="button"
                        className="product-add"
                        onClick={handleAddToCart}
                        aria-label={`Añadir ${product.nombre} al carrito`}
                    >
                        <FiShoppingCart aria-hidden="true" />
                        <span>Añadir</span>
                    </button>
                </div>
            </div>
        </article>
    );
}


export default ProductCard;