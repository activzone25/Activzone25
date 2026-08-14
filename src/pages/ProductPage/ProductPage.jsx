import { useState } from "react";
import { useParams } from "react-router-dom";

import products from "../../data/products";
import { useCart } from "../../context/CartContext";

import laligaPatch from "../../assets/parches/laliga.png";
import championsPatch from "../../assets/parches/champions.png";

import "./ProductPage.css";


function ProductPage() {

    const { slug } = useParams();

    const { addToCart } = useCart();


    // ==========================================
    // ESTADOS
    // ==========================================

    const [side, setSide] = useState("front");

    const [size, setSize] = useState("M");

    const [name, setName] = useState("");

    const [number, setNumber] = useState("");

    const [patch, setPatch] = useState("");


    // ==========================================
    // PRODUCTO
    // ==========================================

    const product = products.find(
        item => item.slug === slug
    );


    // ==========================================
    // PRODUCTO NO ENCONTRADO
    // ==========================================

    if (!product) {

        return (

            <main className="not-found">

                <h2>
                    Producto no encontrado
                </h2>

            </main>

        );

    }


    // ==========================================
    // POSICIONES
    // ==========================================

    const positions =
        product.positions || {};


    // ==========================================
    // DATOS LIMPIOS
    // ==========================================

    const nombreLimpio =
        name.trim();


    const numeroLimpio =
        number.trim();


    // ==========================================
    // PERSONALIZACIÓN
    // ==========================================

    const personalizada =
        nombreLimpio.length > 0 ||
        numeroLimpio.length > 0;


    // ==========================================
    // PRECIO
    // ==========================================

    const precioBase =
        Number(product.precio || 25);


    const extraPersonalizacion =
        personalizada
            ? 5
            : 0;


    const precioFinal =
        precioBase +
        extraPersonalizacion;


    // ==========================================
    // TALLAS
    // ==========================================

    const tallasAdulto = [

        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL",
        "4XL"

    ];


    // ==========================================
    // CAMBIAR NÚMERO
    // ==========================================

    function handleNumberChange(e) {

        let value =
            e.target.value;


        // Solo números

        value =
            value.replace(/\D/g, "");


        // Máximo 2 cifras

        if (value.length > 2) {

            value =
                value.slice(0, 2);

        }


        // Máximo 99

        if (
            value !== "" &&
            Number(value) > 99
        ) {

            value = "99";

        }


        setNumber(value);

    }


    // ==========================================
    // AÑADIR AL CARRITO
    // ==========================================

    function handleAddCart() {

        addToCart({

            ...product,

            imagen:
                product.front,

            talla:
                size,

            nombrePersonalizado:
                nombreLimpio,

            numero:
                numeroLimpio,

            personalizada,

            precio:
                precioFinal,

            precioBase,

            extraPersonalizacion,

            parche: {

                tipo:
                    patch || "sin-parche"

            }

        });

    }


    // ==========================================
    // RENDER
    // ==========================================

    return (

        <main className="product-page">

            <section className="product-detail">


                {/* ==================================
                    GALERÍA
                ================================== */}

                <div className="product-gallery">

                    <div className="shirt-preview">

                        <img
                            src={
                                side === "front"
                                    ? product.front
                                    : product.back
                            }
                            alt={product.nombre}
                            className="shirt-image"
                        />


                        {/* ==================================
                            PARCHE LALIGA
                        ================================== */}

                        {side === "front" &&
                            patch === "laliga" && (

                                <img
                                    src={laligaPatch}
                                    alt="Parche LaLiga"
                                    className="shirt-patch"
                                    style={
                                        positions.patch
                                    }
                                />

                            )}


                        {/* ==================================
                            PARCHE CHAMPIONS
                        ================================== */}

                        {side === "front" &&
                            patch === "champions" && (

                                <img
                                    src={championsPatch}
                                    alt="Parche Champions"
                                    className="shirt-patch"
                                    style={
                                        positions.patch
                                    }
                                />

                            )}


                        {/* ==================================
                            NOMBRE
                        ================================== */}

                        {side === "back" &&
                            nombreLimpio && (

                                <span
                                    className="shirt-name"
                                    style={
                                        positions.name
                                    }
                                >
                                    {
                                        nombreLimpio.toUpperCase()
                                    }
                                </span>

                            )}


                        {/* ==================================
                            DORSAL
                        ================================== */}

                        {side === "back" &&
                            numeroLimpio && (

                                <span
                                    className="shirt-number"
                                    style={
                                        positions.number
                                    }
                                >
                                    {numeroLimpio}
                                </span>

                            )}

                    </div>


                    {/* ==================================
                        CAMBIAR VISTA
                    ================================== */}

                    <div className="gallery-buttons">

                        <button
                            type="button"
                            className={
                                side === "front"
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                setSide("front")
                            }
                        >
                            Delantera
                        </button>


                        <button
                            type="button"
                            className={
                                side === "back"
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                setSide("back")
                            }
                        >
                            Trasera
                        </button>

                    </div>

                </div>


                {/* ==================================
                    INFORMACIÓN
                ================================== */}

                <div className="product-options">


                    <span className="league">
                        {product.liga}
                    </span>


                    <h1>
                        {product.nombre}
                    </h1>


                    {/* ==================================
                        PRECIO
                    ================================== */}

                    <div className="price">

                        {precioFinal.toFixed(2)} €

                    </div>


                    {personalizada && (

                        <small className="personalization-price">

                            Precio camiseta:{" "}
                            {precioBase.toFixed(2)} €
                            {" + "}
                            5 € personalización

                        </small>

                    )}


                    {!personalizada && (

                        <small className="personalization-price">

                            Personalización opcional +5 €

                        </small>

                    )}


                    {/* ==================================
                        TALLA
                    ================================== */}

                    <h3>
                        Talla
                    </h3>


                    <div className="sizes">

                        {tallasAdulto.map(item => (

                            <button
                                type="button"
                                key={item}
                                className={
                                    size === item
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setSize(item)
                                }
                            >
                                {item}
                            </button>

                        ))}

                    </div>


                    {/* ==================================
                        PERSONALIZACIÓN
                    ================================== */}

                    <h3>
                        Personalización
                    </h3>


                    <input
                        type="text"
                        placeholder="Nombre en camiseta"
                        value={name}
                        maxLength={15}
                        onChange={e =>
                            setName(
                                e.target.value
                            )
                        }
                    />


                    <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Dorsal (0-99)"
                        value={number}
                        maxLength={2}
                        onChange={
                            handleNumberChange
                        }
                    />


                    <small className="option-help">

                        ✍️ Personalización +5 €

                    </small>


                    {/* ==================================
                        PARCHE
                    ================================== */}

                    <h3>
                        Parche
                    </h3>


                    <select
                        value={patch}
                        onChange={e =>
                            setPatch(
                                e.target.value
                            )
                        }
                    >

                        <option value="">
                            Sin parche
                        </option>


                        {product.parches?.includes(
                            "laliga"
                        ) && (

                            <option value="laliga">
                                🏆 LaLiga GRATIS
                            </option>

                        )}


                        {product.parches?.includes(
                            "champions"
                        ) && (

                            <option value="champions">
                                ⭐ Champions GRATIS
                            </option>

                        )}

                    </select>


                    {/* ==================================
                        RESUMEN
                    ================================== */}

                    <div className="product-summary">

                        <span>
                            Camiseta
                        </span>

                        <strong>
                            {precioBase.toFixed(2)} €
                        </strong>


                        {personalizada && (

                            <>

                                <span>
                                    Personalización
                                </span>

                                <strong>
                                    +5.00 €
                                </strong>

                            </>

                        )}


                        <span>
                            Total
                        </span>

                        <strong>
                            {precioFinal.toFixed(2)} €
                        </strong>

                    </div>


                    {/* ==================================
                        AÑADIR AL CARRITO
                    ================================== */}

                    <button
                        type="button"
                        className="add-cart"
                        onClick={handleAddCart}
                    >

                        🛒 Añadir al carrito ·{" "}
                        {precioFinal.toFixed(2)} €

                    </button>

                </div>

            </section>

        </main>

    );

}


export default ProductPage;