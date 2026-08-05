import { useState } from "react";
import { useParams } from "react-router-dom";

import products from "../../data/products";

import { useCart } from "../../context/CartContext";

import "./ProductPage.css";


function ProductPage(){

    const { slug } = useParams();

    const { addToCart } = useCart();


    const product = products.find(

        item => item.slug === slug

    );


    const [side,setSide] = useState("front");

    const [size,setSize] = useState("M");

    const [name,setName] = useState("");

    const [number,setNumber] = useState("");

    const [patch,setPatch] = useState("");


    if(!product){

        return (

            <div className="not-found">

                Producto no encontrado

            </div>

        );

    }



    function handleAddCart(){


        addToCart({

            ...product,

            imagen: product.front,

            talla:size,

            nombrePersonalizado:name,

            numero:number,

            parche:{

                tipo:patch

            },

            cantidad:1

        });


    }



    return (

        <main className="product-page">


            <section className="product-detail">


                <div className="product-gallery">


                   <div className="shirt-preview">

    <img

        src={
            side === "front"
            ? product.front
            : product.back
        }

        alt={product.nombre}

    />


    {
        side === "back" && name && (

            <span
                className="shirt-name"
                style={product.positions.back.name}
            >

                {name.toUpperCase()}

            </span>

        )
    }



    {
        side === "back" && number && (

            <span
                className="shirt-number"
                style={product.positions.back.number}
            >

                {number}

            </span>

        )
    }



    {
        patch && (

            <span
                className="shirt-patch"
                style={product.positions.front.patch[patch]}
            >

                🏆

            </span>

        )
    }


</div>
                    <div className="gallery-buttons">


                        <button

                            className={
                                side==="front"
                                ? "active"
                                : ""
                            }

                            onClick={()=>setSide("front")}

                        >

                            Delantera

                        </button>



                        <button

                            className={
                                side==="back"
                                ? "active"
                                : ""
                            }

                            onClick={()=>setSide("back")}

                        >

                            Trasera

                        </button>


                    </div>


                </div>




                <div className="product-options">


                    <span className="league">

                        {product.liga}

                    </span>


                    <h1>

                        {product.nombre}

                    </h1>


                    <div className="price">

                        {product.precio} €

                    </div>



                    <h3>

                        Talla

                    </h3>


                    <div className="sizes">


                        {
                            ["S","M","L","XL","2XL"].map(item=>(

                                <button

                                    key={item}

                                    className={
                                        size===item
                                        ? "active"
                                        :""
                                    }

                                    onClick={()=>setSize(item)}

                                >

                                    {item}

                                </button>

                            ))
                        }


                    </div>



                    <h3>
                        Personalización
                    </h3>


                    <input

                        placeholder="Nombre"

                        value={name}

                        onChange={
                            e=>setName(e.target.value)
                        }

                    />


                    <input

                        placeholder="Número"

                        value={number}

                        onChange={
                            e=>setNumber(e.target.value)
                        }

                    />



                    <h3>
                        Parche
                    </h3>


                    <select

                        value={patch}

                        onChange={
                            e=>setPatch(e.target.value)
                        }

                    >

                        <option value="">
                            Sin parche
                        </option>

                        <option value="laliga">
                            🏆 LaLiga GRATIS
                        </option>

                        <option value="champions">
                            ⭐ Champions GRATIS
                        </option>


                    </select>




                    <button

                        className="add-cart"

                        onClick={handleAddCart}

                    >

                        🛒 Añadir al carrito

                    </button>


                </div>


            </section>


        </main>

    );

}


export default ProductPage;