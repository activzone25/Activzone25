import { useState } from "react";
import { useParams } from "react-router-dom";

import products from "../../data/products";

import PreviewShirt from "../../components/PreviewShirt/PreviewShirt";

import { useCart } from "../../context/CartContext";

import laliga from "../../assets/parches/laliga.png";
import champions from "../../assets/parches/champions.png";

import "./ProductPage.css";


function ProductPage(){

    const { slug } = useParams();

    const { addToCart } = useCart();


    const product = products.find(
        item => item.slug === slug
    );


    const [talla,setTalla] = useState("M");

    const [nombre,setNombre] = useState("");

    const [numero,setNumero] = useState("");

    const [parche,setParche] = useState(null);



    if(!product){

        return (

            <main className="not-product">

                <h1>
                    Producto no encontrado
                </h1>

            </main>

        );

    }



    const personalizado =
        nombre.trim() !== "" ||
        numero.trim() !== "";


    const precioFinal =
        personalizado
        ? product.precio + 5
        : product.precio;



    const parches = [

        {
            tipo:"laliga",
            nombre:"LaLiga",
            imagen:laliga
        },

        {
            tipo:"champions",
            nombre:"Champions",
            imagen:champions
        }

    ];



    const añadirCarrito = () => {


        addToCart({

            ...product,

            imagen:product.front,

            precio:precioFinal,

            talla,

            nombrePersonalizado:nombre,

            numero,

            parche,

            cantidad:1

        });


    };



    const tallas =

        product.categoria === "Niño"

        ?

        [
            "16",
            "18",
            "20",
            "22",
            "24",
            "26",
            "28"
        ]

        :

        [
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ];




    return (

        <main className="product-page">


            <div className="product-detail">


                {/* PREVIEW */}

                <div className="detail-preview">


                    <PreviewShirt

                        product={product}

                        front={product.front}

                        back={product.back}

                        nombre={nombre}

                        numero={numero}

                        parche={parche}

                    />


                </div>




                {/* INFORMACIÓN */}


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



                    <div className="sizes">


                        {tallas.map(size => (


                            <button

                                key={size}

                                className={
                                    talla === size
                                    ? "active"
                                    : ""
                                }

                                onClick={() =>
                                    setTalla(size)
                                }

                            >

                                {size}

                            </button>


                        ))}


                    </div>





                    <h3>
                        Personalización (+5 €)
                    </h3>



                    <input

                        type="text"

                        placeholder="Nombre dorsal"

                        value={nombre}

                        onChange={
                            e =>
                            setNombre(
                                e.target.value
                            )
                        }

                    />



                    <input

                        type="number"

                        placeholder="Número"

                        value={numero}

                        onChange={
                            e =>
                            setNumero(
                                e.target.value
                            )
                        }

                    />






                    <h3>
                        Parche gratis
                    </h3>



                    <div className="patch-options">


                        {parches.map(item => (


                            <button

                                key={item.tipo}

                                className={
                                    parche?.tipo === item.tipo
                                    ? "active"
                                    : ""
                                }


                                onClick={() =>
                                    setParche(item)
                                }


                            >

                                <img

                                    src={item.imagen}

                                    alt={item.nombre}

                                />


                                <span>
                                    {item.nombre}
                                </span>


                            </button>


                        ))}


                    </div>





                    <button

                        className="add-cart"

                        onClick={añadirCarrito}

                    >

                        🛒 Añadir al carrito


                    </button>



                </div>



            </div>


        </main>

    );

}


export default ProductPage;