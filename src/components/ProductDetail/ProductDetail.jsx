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

  const añadirCarrito = () => {
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
  };

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

        <h3>Talla</h3>

        <div className="options">

          {[
            "16",
            "18",
            "20",
            "22",
            "24",
            "26",
            "28",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
          ].map((t) => (
            <button
              key={t}
              className={talla === t ? "active" : ""}
              onClick={() => setTalla(t)}
            >
              {t}
            </button>
          ))}

        </div>

        <h3>Personalización (+5€)</h3>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <h3>Parche GRATIS</h3>

        <div className="patch-options">

          <button
            className={!parche ? "active" : ""}
            onClick={() => setParche(null)}
          >
            Sin parche
          </button>

          <button
            className={parche?.tipo === "laliga" ? "active" : ""}
            onClick={() =>
              setParche({
                tipo: "laliga",
                imagen: laliga
              })
            }
          >
            <img src={laliga} alt="LaLiga" />
            <span>LaLiga</span>
          </button>

          <button
            className={parche?.tipo === "champions" ? "active" : ""}
            onClick={() =>
              setParche({
                tipo: "champions",
                imagen: champions
              })
            }
          >
            <img src={champions} alt="Champions" />
            <span>Champions</span>
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