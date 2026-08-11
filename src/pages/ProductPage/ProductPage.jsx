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

    const product = products.find(
        item => item.slug === slug
    );


    const [side, setSide] = useState("front");
    const [size, setSize] = useState("M");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [patch, setPatch] = useState("");


    if (!product) {

        return (
            <div className="not-found">
                Producto no encontrado
            </div>
        );

    }


    const positions = product.positions || {};


    function handleAddCart() {

        addToCart({

            ...product,

            imagen: product.front,

            talla: size,

            nombrePersonalizado: name,

            numero: number,

            parche: {
                tipo: patch
            },

            cantidad: 1

        });

    }


    return (

        <main className="product-page">

            <section className="product-detail">


                {/* ==============================
                    GALERÍA
                ============================== */}

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


                        {/* ==============================
                            PARCHE
                        ============================== */}

                        {side === "front" && patch === "laliga" && (

                            <img
                                src={laligaPatch}
                                alt="LaLiga"
                                className="shirt-patch"
                                style={positions.patch}
                            />

                        )}


                        {side === "front" && patch === "champions" && (

                            <img
                                src={championsPatch}
                                alt="Champions"
                                className="shirt-patch"
                                style={positions.patch}
                            />

                        )}


                        {/* ==============================
                            NOMBRE
                        ============================== */}

                        {side === "back" && name && (

                            <span
                                className="shirt-name"
                                style={positions.name}
                            >
                                {name.toUpperCase()}
                            </span>

                        )}


                        {/* ==============================
                            DORSAL
                        ============================== */}

                        {side === "back" && number && (

                            <span
                                className="shirt-number"
                                style={positions.number}
                            >
                                {number}
                            </span>

                        )}


                    </div>


                    {/* ==============================
                        CAMBIAR VISTA
                    ============================== */}

                    <div className="gallery-buttons">

                        <button
                            className={
                                side === "front"
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setSide("front")}
                        >
                            Delantera
                        </button>


                        <button
                            className={
                                side === "back"
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setSide("back")}
                        >
                            Trasera
                        </button>

                    </div>

                </div>


                {/* ==============================
                    INFORMACIÓN
                ============================== */}

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


                    {/* TALLAS */}

                    <h3>
                        Talla
                    </h3>


                    <div className="sizes">

                        {["S", "M", "L", "XL", "2XL", "3XL", "4XL"].map(
                            item => (

                                <button
                                    key={item}
                                    className={
                                        size === item
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setSize(item)}
                                >
                                    {item}
                                </button>

                            )
                        )}

                    </div>


                    {/* PERSONALIZACIÓN */}

                    <h3>
                        Personalización
                    </h3>


                    <input
                        type="text"
                        placeholder="Nombre"
                        value={name}
                        maxLength={15}
                        onChange={e => setName(e.target.value)}
                    />


                    <input
                        type="number"
                        placeholder="Número"
                        value={number}
                        min="0"
                        max="99"
                        onChange={e => setNumber(e.target.value)}
                    />


                    {/* PARCHE */}

                    <h3>
                        Parche
                    </h3>


                    <select
                        value={patch}
                        onChange={e => setPatch(e.target.value)}
                    >

                        <option value="">
                            Sin parche
                        </option>


                        {product.parches?.includes("laliga") && (

                            <option value="laliga">
                                🏆 LaLiga GRATIS
                            </option>

                        )}


                        {product.parches?.includes("champions") && (

                            <option value="champions">
                                ⭐ Champions GRATIS
                            </option>

                        )}

                    </select>


                    {/* CARRITO */}

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