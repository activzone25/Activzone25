import { useState } from "react";
import { useCart } from "../../context/CartContext";

import "./ProductDetail.css";
import PreviewShirt from "../PreviewShirt/PreviewShirt";

import laliga from "../../assets/parches/laliga.png";
import champions from "../../assets/parches/champions.png";

function ProductDetail({ product }) {

  const { addToCart } = useCart();

  const [talla, setTalla] = useState("M");
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [parche, setParche] = useState(null);

  const personalizada =
    nombre.trim() !== "" || numero.trim() !== "";

  const precioFinal =
    product.precio + (personalizada ? 5 : 0);

  function añadirCarrito() {

    addToCart({

      ...product,

      imagen: product.front,

      precio: precioFinal,

      talla,

      nombrePersonalizado: nombre,

      numero,

      parche: parche ? parche.tipo : "Sin parche",

      imagenParche: parche ? parche.imagen : null

    });

  }

  return (

    <section className="product-detail">

      <div className="detail-image">

        <PreviewShirt
          product={product}
          front={product.front}
          back={product.back}
          nombre={nombre}
          numero={numero}
          parche={parche}
        />

      </div>

      <div className="detail-info">

        <h1>{product.nombre}</h1>

        <p>Temporada {product.temporada}</p>

        <h2>{precioFinal} €</h2>

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