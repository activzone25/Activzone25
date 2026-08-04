import "./ProductGrid.css";

import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";


function ProductGrid({

    search = "",

    category = "Todas"

}) {


    const text = search
        .toLowerCase()
        .trim();



    const filteredProducts = products

        .filter(product => {


            const nombre =
                product.nombre?.toLowerCase() || "";


            const equipo =
                product.equipo?.toLowerCase() || "";



            const matchSearch =

                nombre.includes(text) ||

                equipo.includes(text);



            const matchCategory =

                category === "Todas" ||

                product.liga === category ||

                product.categoria === category;



            const disponible =

                product.disponible !== false;



            return (

                matchSearch &&

                matchCategory &&

                disponible

            );


        })



        .sort((a,b)=>

            Number(b.nuevo) -

            Number(a.nuevo)

        );







    return (

        <section className="product-grid-section">



            <div className="section-header">


                <span className="section-badge">

                    ⭐ COLECCIÓN 2026/27

                </span>



                <h2>

                    🔥 Novedades

                </h2>



                <p>

                    Descubre las últimas equipaciones disponibles.

                </p>



                <small>

                    {filteredProducts.length}

                    {" "}

                    {filteredProducts.length === 1

                        ? "producto disponible"

                        : "productos disponibles"

                    }


                </small>


            </div>







            {

                filteredProducts.length ? (


                    <div className="product-grid">


                        {

                            filteredProducts.map(product => (


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