import { Link } from "react-router-dom";

import {
    FiHeart,
    FiArrowRight,
    FiShoppingCart
} from "react-icons/fi";

import { useFavorites } from "../../context/FavoritesContext";
import { useCart } from "../../context/CartContext";

import "./ProductCard.css";


function ProductCard({ product }) {

    const {
        toggleFavorite,
        isFavorite
    } = useFavorites();

    const {
        addToCart
    } = useCart();


    /* ==========================================
       DATOS
    ========================================== */

    const favorite =
        isFavorite(product.id);

    const precio =
        Number(product.precio || 25);

    const rating =
        Number(product.rating || 5);

    const opiniones =
        Number(product.opiniones || 0);

    const tieneParches =
        Array.isArray(product.parches) &&
        product.parches.length > 0;

    const personalizable =
        product.personalizable !== false;


    /* ==========================================
       FAVORITO
    ========================================== */

    function handleFavorite(e) {

        e.preventDefault();
        e.stopPropagation();

        toggleFavorite(product);

    }


    /* ==========================================
       COMPRA RÁPIDA
    ========================================== */

    function handleAddCart(e) {

        e.preventDefault();
        e.stopPropagation();

        addToCart({

            ...product,

            imagen: product.front,

            talla: "M",

            nombrePersonalizado: "",

            numero: "",

            personalizada: false,

            precio,

            precioBase: precio,

            extraPersonalizacion: 0,

            parche: {
                tipo: ""
            }

        });

    }


    return (

        <Link
            to={`/producto/${product.slug}`}
            className="product-card"
            aria-label={`Ver ${product.nombre}`}
        >

            {/* ==================================
                IMAGEN
            ================================== */}

            <div className="product-image">

                {product.nuevo && (

                    <span className="badge">
                        ⭐ NUEVO 26/27
                    </span>

                )}


                <button
                    type="button"
                    className={`favorite-btn ${
                        favorite ? "active" : ""
                    }`}
                    onClick={handleFavorite}
                    aria-label={
                        favorite
                            ? `Quitar ${product.nombre} de favoritos`
                            : `Añadir ${product.nombre} a favoritos`
                    }
                    aria-pressed={favorite}
                >

                    <FiHeart />

                </button>


                <img
                    src={product.front}
                    alt={product.nombre}
                    loading="lazy"
                />

            </div>


            {/* ==================================
                INFORMACIÓN
            ================================== */}

            <div className="product-info">

                <span className="league">
                    {product.liga || "Fútbol"}
                </span>


                <h3>
                    {product.nombre}
                </h3>


                <p>
                    Temporada {product.temporada || "2026/27"}
                </p>


                {/* ==================================
                    ETIQUETAS
                ================================== */}

                <div className="product-tags">

                    {tieneParches && (

                        <span>
                            🏆 Parches GRATIS
                        </span>

                    )}


                    {personalizable && (

                        <span>
                            ✍️ Personalizable
                        </span>

                    )}

                </div>


                {/* ==================================
                    PRECIO
                ================================== */}

                <div className="price-box">

                    {product.oferta &&
                        product.precioAnterior && (

                        <span className="old-price">
                            {Number(
                                product.precioAnterior
                            ).toFixed(2)} €
                        </span>

                    )}


                    <span className="new-price">
                        {precio.toFixed(2)} €
                    </span>

                </div>


                {/* ==================================
                    VALORACIÓN
                ================================== */}

                <div className="rating">

                    <span>
                        ⭐ {rating.toFixed(1)}
                    </span>

                    <span>
                        ({opiniones})
                    </span>

                </div>


                {/* ==================================
                    AÑADIR AL CARRITO
                ================================== */}

                <button
                    type="button"
                    className="quick-cart"
                    onClick={handleAddCart}
                >

                    <FiShoppingCart />

                    <span>
                        Añadir al carrito
                    </span>

                </button>


                {/* ==================================
                    VER PRODUCTO
                ================================== */}

                <div className="view-product">

                    <span>
                        Ver producto
                    </span>

                    <FiArrowRight />

                </div>

            </div>

        </Link>

    );

}


export default ProductCard;