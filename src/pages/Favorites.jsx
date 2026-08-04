import { Link } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";

import { useFavorites } from "../../context/FavoritesContext";

import "./Favorites.css";


function Favorites(){


    const {
        favorites,
        clearFavorites

    } = useFavorites();




    return (

        <main className="favorites-page">



            <section className="favorites-header">


                <span className="section-badge">

                    ❤️ FAVORITOS

                </span>



                <h1>

                    Mis favoritos

                </h1>



                <p>

                    {favorites.length}

                    {" "}

                    {
                        favorites.length === 1
                        ? "camiseta guardada"
                        : "camisetas guardadas"
                    }

                </p>






                {
                    favorites.length > 0 && (

                        <button

                            className="clear-favorites"

                            onClick={clearFavorites}

                        >

                            Vaciar favoritos

                        </button>

                    )
                }


            </section>







            {
                favorites.length > 0 ? (


                    <div className="favorites-grid">


                        {
                            favorites.map(product => (


                                <ProductCard

                                    key={product.id}

                                    product={product}

                                />


                            ))
                        }


                    </div>



                )

                :


                (

                    <section className="favorites-empty">


                        <h2>

                            No tienes favoritos ❤️

                        </h2>



                        <p>

                            Guarda tus camisetas favoritas para verlas aquí.

                        </p>





                        <Link

                            to="/"

                            className="back-shop"

                        >

                            Ver catálogo

                        </Link>



                    </section>

                )

            }



        </main>

    );

}


export default Favorites;