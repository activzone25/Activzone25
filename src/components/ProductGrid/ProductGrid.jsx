import "./ProductGrid.css";

import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";


function ProductGrid({
  search = "",
  category = "Todas"
}) {


  const filteredProducts = products.filter((product)=>{


    const text = search
      .toLowerCase()
      .trim();


    const matchSearch =

      product.nombre
        ?.toLowerCase()
        .includes(text)

      ||

      product.equipo
        ?.toLowerCase()
        .includes(text);



    const matchCategory =

      category === "Todas"

      ||

      product.liga === category;



    return matchSearch && matchCategory;


  });



  return (

    <section className="product-grid-section">


      <div className="section-header">


        <span>
          ⭐ COLECCIÓN 2026/27
        </span>


        <h2>
          🔥 Novedades
        </h2>


        <p>
          Descubre las últimas equipaciones disponibles.
        </p>


        <small>

          {filteredProducts.length} productos disponibles

        </small>


      </div>



      {

        filteredProducts.length > 0 ? (


          <div className="product-grid">


            {filteredProducts.map((product)=>(


              <ProductCard

                key={product.id}

                product={product}

              />


            ))}


          </div>


        )

        :

        (


          <div className="empty-products">


            <h3>
              😕 No encontramos productos
            </h3>


            <p>
              Prueba con otra búsqueda o categoría.
            </p>


          </div>


        )


      }


    </section>

  );

}


export default ProductGrid;