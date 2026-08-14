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


    // ==========================================
    // FAVORITO
    // ==========================================

    const favorite =
        isFavorite(product.id);


    function handleFavorite(e) {

        e.preventDefault();
        e.stopPropagation();

        toggleFavorite(product);

    }


    // ==========================================
    // AÑADIR AL CARRITO
    // COMPRA RÁPIDA
    // ==========================================

    function handleAddCart(e) {

        e.preventDefault();
        e.stopPropagation();

        addToCart({

            ...product,

            imagen:
                product.front,

            talla:
                "M",

            nombrePersonalizado:
                "",

            numero:
                "",

            personalizada:
                false,

            precio:
                Number(product.precio || 25),

            precioBase:
                Number(product.precio || 25),

            extraPersonalizacion:
                0,

            parche: {
                tipo: ""
            }

        });

    }


    return (

        <Link
            to={`/producto/${product.slug}`}
            className="product-card"
        >

            {/* ==================================
                IMAGEN
            ================================== */}

            <div className="product-image">


                {/* NUEVO */}

                {product.nuevo && (

                    <span className="badge">
                        ⭐ NUEVO 26/27
                    </span>

                )}


                {/* FAVORITO */}

                <button
                    className={`favorite-btn ${
                        favorite ? "active" : ""
                    }`}
                    onClick={handleFavorite}
                    aria-label="Favorito"
                >
                    <FiHeart />
                </button>


                {/* CAMISETA */}

                <img
                    src={product.front}
                    alt={product.nombre}
                />

            </div>


            {/* ==================================
                INFORMACIÓN
            ================================== */}

            <div className="product-info">


                {/* LIGA */}

                <span className="league">
                    {product.liga}
                </span>


                {/* NOMBRE */}

                <h3>
                    {product.nombre}
                </h3>


                {/* TEMPORADA */}

                <p>
                    Temporada {product.temporada}
                </p>


                {/* ==================================
                    ETIQUETAS
                ================================== */}

                <div className="product-tags">

                    {product.parches?.length > 0 && (

                        <span>
                            🏆 Parches GRATIS
                        </span>

                    )}


                    {product.personalizable !== false && (

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
                            {product.precioAnterior} €
                        </span>

                    )}


                    <span className="new-price">
                        {Number(
                            product.precio || 25
                        )} €
                    </span>

                </div>


                {/* ==================================
                    VALORACIÓN
                ================================== */}

                <div className="rating">

                    ⭐ {product.rating || 5.0}

                    <span>
                        ({product.opiniones || 0})
                    </span>

                </div>


                {/* ==================================
                    AÑADIR AL CARRITO
                ================================== */}

                <button
                    className="quick-cart"
                    onClick={handleAddCart}
                >

                    <FiShoppingCart />

                    Añadir al carrito

                </button>


                {/* ==================================
                    VER PRODUCTO
                ================================== */}

                <div className="view-product">

                    Ver producto

                    <FiArrowRight />

                </div>

            </div>

        </Link>

    );

}


export default ProductCard;