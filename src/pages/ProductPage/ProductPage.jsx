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




    const favorite = isFavorite(product.id);





    function handleFavorite(e){

        e.preventDefault();

        e.stopPropagation();

        toggleFavorite(product);

    }







    function handleAddCart(e){

        e.preventDefault();

        e.stopPropagation();



        addToCart({

            ...product,

            imagen: product.front,

            talla:"M",

            cantidad:1

        });

    }






    return (

        <Link

            to={`/producto/${product.slug}`}

            className="product-card"

        >



            <div className="product-image">



                {
                    product.nuevo && (

                        <span className="badge">

                            ⭐ NUEVO 26/27

                        </span>

                    )
                }






                <button

                    className={`favorite-btn ${
                        favorite ? "active" : ""
                    }`}

                    onClick={handleFavorite}

                >

                    <FiHeart />

                </button>







                <img

                    src={product.front}

                    alt={product.nombre}

                />



            </div>









            <div className="product-info">





                <span className="league">

                    {product.liga}

                </span>






                <h3>

                    {product.nombre}

                </h3>






                <p>

                    Temporada {product.temporada}

                </p>







                <div className="product-tags">


                    {
                        product.parches?.length > 0 && (

                            <span>

                                🏆 Parches GRATIS

                            </span>

                        )
                    }



                    {
                        product.personalizable !== false && (

                            <span>

                                ✍️ Personalizable

                            </span>

                        )
                    }



                </div>







                <div className="stars">

                    ⭐⭐⭐⭐⭐

                </div>







                <div className="price">

                    {product.precio} €

                </div>








                <button

                    className="quick-cart"

                    onClick={handleAddCart}

                >

                    <FiShoppingCart />

                    Añadir al carrito


                </button>








                <div className="view-product">

                    Ver producto

                    <FiArrowRight />

                </div>






            </div>




        </Link>

    );

}


export default ProductCard;