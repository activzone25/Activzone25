import { Link } from "react-router-dom";

import {
  FiHeart,
  FiShoppingCart,
  FiEye
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";

import laliga from "../../assets/ligas/laliga.png";
import champions from "../../assets/ligas/champions.png";

import "./ProductCard.css";


function ProductCard({ product }) {


  const { addToCart } = useCart();



  const patches = {

    laliga,

    champions

  };



  return (

    <article className="product-card">


      <div className="product-image-container">


        {product.nuevo && (

          <span className="badge new">

            ⭐ NUEVO 26/27

          </span>

        )}



        <button className="favorite-btn">

          <FiHeart />

        </button>



        <img

          className="product-image"

          src={product.imagen}

          alt={product.nombre}

        />


      </div>




      <div className="product-info">


        <h3>

          {product.nombre}

        </h3>



        <p className="season">

          Temporada {product.temporada}

        </p>




        <div className="rating">

          ⭐⭐⭐⭐⭐

        </div>




        <div className="extras">


          <span>
            ✅ Personalización disponible
          </span>


          <span>
            🏆 Parches GRATIS
          </span>


        </div>




        {product.parches && (

          <div className="patch-container">


            {product.parches.map((patch) => (

              <img

                key={patch}

                src={patches[patch]}

                alt={patch}

              />

            ))}


          </div>

        )}






        <div className="price">

          {product.precio} €

        </div>




        <div className="stock ok">

          ● En stock

        </div>




        <div className="product-buttons">



          <button

            className="add-btn"

            onClick={() => addToCart(product)}

          >

            <FiShoppingCart />

            Añadir


          </button>





          <Link

            to={`/producto/${product.slug}`}

            className="view-btn"

          >

            <FiEye />

            Ver


          </Link>



        </div>



      </div>



    </article>

  );

}



export default ProductCard;