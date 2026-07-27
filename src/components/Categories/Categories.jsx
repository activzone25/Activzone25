import { Link } from "react-router-dom";

import categories from "../../data/categories";

import "./Categories.css";


function Categories(){

    return (

        <section className="categories">

            <div className="section-title">

                <span>
                    ⚽ CATEGORÍAS
                </span>

                <h2>
                    Encuentra tu estilo
                </h2>

            </div>


            <div className="categories-grid">


                {categories.map((category)=>(

                    <Link
                        key={category.id}
                        to={category.link}
                        className="category-card"
                    >

                        <img
                            src={category.image}
                            alt={category.name}
                        />


                        <div className="category-overlay">

                            <h3>
                                {category.name}
                            </h3>

                            <span>
                                Ver colección →
                            </span>

                        </div>


                    </Link>

                ))}


            </div>


        </section>

    );

}


export default Categories;