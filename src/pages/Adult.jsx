import ProductGrid from "../components/ProductGrid/ProductGrid";

import "./Adult.css";


function Adult(){

    return (

        <main className="category-page">


            <section className="category-header">


                <span className="section-badge">
                    ⭐ COLECCIÓN ADULTO 2026/27
                </span>


                <h1>
                    👕 Camisetas Adulto
                </h1>


                <p>
                    Equipaciones oficiales 2026/27 para adulto.
                </p>


            </section>



            <ProductGrid

                category="Adulto"

            />


        </main>

    );

}


export default Adult;