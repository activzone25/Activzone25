import { Link } from "react-router-dom";

import { useFavorites } from "../context/FavoritesContext";

import ProductCard from "../components/ProductCard/ProductCard";

import "./Favorites.css";


function Favorites(){


  const { favorites } = useFavorites();



  return (


    <main className="favorites-page">


      <div className="favorites-header">


        <h1>
          ❤️ Mis Favoritos
        </h1>


        <p>
          Tus camisetas guardadas para comprar más tarde.
        </p>


      </div>





      {
        favorites.length === 0 ? (


          <div className="empty-favorites">


            <h2>
              No tienes camisetas guardadas
            </h2>


            <p>
              Añade tus equipaciones favoritas pulsando el corazón.
            </p>


            <Link
              to="/"
              className="back-shop"
            >
              Ver catálogo
            </Link>


          </div>


        ) : (


          <div className="product-grid">


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

      }



    </main>


  );


}


export default Favorites;