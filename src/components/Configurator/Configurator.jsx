import Configurator from "../Configurator/Configurator";

import "./ProductDetail.css";

function ProductDetail({ product }) {
  return (
    <section className="product-detail">

      <div className="detail-image">

        <img
          className="main-shirt"
          src={product.imagen}
          alt={product.nombre}
        />

      </div>

      <div className="detail-info">

        <h1>{product.nombre}</h1>

        <p>Temporada {product.temporada}</p>

        <h2>{product.precio} €</h2>

        <Configurator product={product} />

      </div>

    </section>
  );
}

export default ProductDetail;