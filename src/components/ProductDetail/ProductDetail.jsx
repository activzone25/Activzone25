import { useState } from "react";
import { useCart } from "../../context/CartContext";

import "./ProductDetail.css";

import champions from "../../assets/parches/champions.jpg";
import laliga from "../../assets/parches/laliga.jpg";


function ProductDetail({ product }) {


  const { addToCart } = useCart();


  const [talla, setTalla] = useState("M");
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [parche, setParche] = useState("Liga");



  const personalizada = nombre || numero;


  const precioFinal =
    product.precio + (personalizada ? 5 : 0);



  const añadirCarrito = () => {


    addToCart({

      ...product,

      precio: precioFinal,

      talla,

      nombrePersonalizado: nombre,

      numero,

      parche,

      imagenParche:
        parche === "Liga"
          ? laliga
          : champions

    });


  };



  return (

    <section className="product-detail">


      <div className="detail-image">

        <img
          src={product.imagen}
          alt={product.nombre}
        />

      </div>



      <div className="detail-info">


        <h1>
          {product.nombre}
        </h1>


        <p>
          Temporada {product.temporada}
        </p>


        <h2>
          {precioFinal} €
        </h2>



        <h3>
          Talla
        </h3>


        <div className="options">


          {
            [
              "16",
              "18",
              "20",
              "22",
              "24",
              "S",
              "M",
              "L",
              "XL",
              "2XL"
            ].map(t => (

              <button

                key={t}

                className={
                  talla === t
                  ? "active"
                  : ""
                }

                onClick={() => setTalla(t)}

              >

                {t}

              </button>

            ))

          }


        </div>



        <h3>
          Personalización +5€
        </h3>



        <input

          type="text"

          placeholder="Nombre"

          value={nombre}

          onChange={
            e => setNombre(e.target.value)
          }

        />



        <input

          type="number"

          placeholder="Número"

          value={numero}

          onChange={
            e => setNumero(e.target.value)
          }

        />



        <h3>
          Parche GRATIS
        </h3>



        <div className="patch-options">


          <button

            className={
              parche === "Liga"
              ? "active"
              : ""
            }

            onClick={() => setParche("Liga")}

          >

            <img
              src={laliga}
              alt="Parche LaLiga"
            />

            <span>
              Liga
            </span>


          </button>




          <button

            className={
              parche === "Champions"
              ? "active"
              : ""
            }

            onClick={() => setParche("Champions")}

          >

            <img
              src={champions}
              alt="Parche Champions"
            />

            <span>
              Champions
            </span>


          </button>



        </div>




        <button

          className="add-cart"

          onClick={añadirCarrito}

        >

          🛒 Añadir al carrito

        </button>



      </div>


    </section>

  );

}



export default ProductDetail;