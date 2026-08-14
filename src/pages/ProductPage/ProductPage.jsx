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
    const [added, setAdded] = useState(false);


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
                <div className="not-found-box">
                    <span>404</span>
                    <h2>Producto no encontrado</h2>
                    <p>La camiseta que buscas no está disponible.</p>
                </div>
            </main>
        );

    }


    // ==========================================
    // DATOS
    // ==========================================

    const positions = product.positions || {};

    const nombreLimpio = name.trim();
    const numeroLimpio = number.trim();

    const personalizada =
        nombreLimpio !== "" ||
        numeroLimpio !== "";


    // ==========================================
    // PRECIO
    // ==========================================

    const precioBase =
        Number(product.precio || 25);

    const extraPersonalizacion =
        personalizada ? 5 : 0;

    const precioFinal =
        precioBase + extraPersonalizacion;


    // ==========================================
    // TALLAS
    // ==========================================

    const tallas = [
        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL",
        "4XL"
    ];


    // ==========================================
    // NÚMERO
    // ==========================================

    function handleNumberChange(e) {

        let value =
            e.target.value.replace(/\D/g, "");

        if (value.length > 2) {
            value = value.slice(0, 2);
        }

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
                tipo: patch || "sin-parche"
            }

        });


        // Confirmación visual

        setAdded(true);

        setTimeout(() => {
            setAdded(false);
        }, 2200);

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


                    {/* CABECERA PREVIEW */}

                    <div className="preview-top">

                        <span className="preview-label">
                            VISTA PREVIA
                        </span>

                        <span className="preview-season">
                            26/27
                        </span>

                    </div>


                    {/* CAMISETA */}

                    <div className="shirt-preview">

                        <div className="shirt-glow" />


                        <img
                            src={
                                side === "front"
                                    ? product.front
                                    : product.back
                            }
                            alt={product.nombre}
                            className="shirt-image"
                        />


                        {/* PARCHE LALIGA */}

                        {side === "front" &&
                            patch === "laliga" && (

                            <img
                                src={laligaPatch}
                                alt="Parche LaLiga"
                                className="shirt-patch"
                                style={positions.patch}
                            />

                        )}


                        {/* PARCHE CHAMPIONS */}

                        {side === "front" &&
                            patch === "champions" && (

                            <img
                                src={championsPatch}
                                alt="Parche Champions"
                                className="shirt-patch"
                                style={positions.patch}
                            />

                        )}


                        {/* NOMBRE */}

                        {side === "back" &&
                            nombreLimpio && (

                            <span
                                className="shirt-name"
                                style={positions.name}
                            >
                                {nombreLimpio.toUpperCase()}
                            </span>

                        )}


                        {/* DORSAL */}

                        {side === "back" &&
                            numeroLimpio && (

                            <span
                                className="shirt-number"
                                style={positions.number}
                            >
                                {numeroLimpio}
                            </span>

                        )}

                    </div>


                    {/* CAMBIAR VISTA */}

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


                    {/* INFO PREVIEW */}

                    <div className="preview-info">

                        <span>
                            👕 {product.temporada || "2026/27"}
                        </span>

                        <span>
                            ✓ Producto disponible
                        </span>

                    </div>

                </div>


                {/* ==================================
                    INFORMACIÓN
                ================================== */}

                <div className="product-options">


                    {/* LIGA */}

                    <span className="product-league">
                        {product.liga}
                    </span>


                    {/* NOMBRE */}

                    <h1>
                        {product.nombre}
                    </h1>


                    <p className="product-subtitle">
                        Camiseta oficial temporada{" "}
                        {product.temporada || "2026/27"}
                    </p>


                    {/* PRECIO */}

                    <div className="product-price">

                        {precioFinal.toFixed(2)} €

                    </div>


                    {/* NOTA PRECIO */}

                    <div
                        className={
                            personalizada
                                ? "price-note personalized"
                                : "price-note"
                        }
                    >

                        {personalizada
                            ? "✍️ Personalización añadida · +5 €"
                            : "Personalización opcional · +5 €"
                        }

                    </div>


                    {/* ==================================
                        TALLA
                    ================================== */}

                    <div className="option-section">

                        <div className="option-title">

                            <div>

                                <h3>
                                    Talla
                                </h3>

                                <span className="option-description">
                                    Selecciona tu talla
                                </span>

                            </div>

                            <strong>
                                {size}
                            </strong>

                        </div>


                        <div className="sizes">

                            {tallas.map(item => (

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

                    </div>


                    {/* ==================================
                        PERSONALIZACIÓN
                    ================================== */}

                    <div className="option-section">

                        <div className="option-title">

                            <div>

                                <h3>
                                    Personalización
                                </h3>

                                <span className="option-description">
                                    Nombre y dorsal
                                </span>

                            </div>

                            <strong>
                                +5 €
                            </strong>

                        </div>


                        <div className="custom-fields">

                            <div className="input-field">

                                <label>
                                    Nombre
                                </label>

                                <input
                                    type="text"
                                    placeholder="Ej. TERRON"
                                    value={name}
                                    maxLength={15}
                                    onChange={e =>
                                        setName(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>


                            <div className="input-field number-field">

                                <label>
                                    Dorsal
                                </label>

                                <input
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="10"
                                    value={number}
                                    maxLength={2}
                                    onChange={
                                        handleNumberChange
                                    }
                                />

                            </div>

                        </div>


                        <small className="option-help">
                            Máximo 15 caracteres · dorsal 0-99
                        </small>

                    </div>


                    {/* ==================================
                        PARCHES
                    ================================== */}

                    <div className="option-section">

                        <div className="option-title">

                            <div>

                                <h3>
                                    Parche
                                </h3>

                                <span className="option-description">
                                    Elige tu parche
                                </span>

                            </div>

                            <strong className="free-label">
                                GRATIS
                            </strong>

                        </div>


                        <div className="patch-options">


                            {/* SIN PARCHE */}

                            <button
                                type="button"
                                className={
                                    patch === ""
                                        ? "patch-option active"
                                        : "patch-option"
                                }
                                onClick={() =>
                                    setPatch("")
                                }
                            >

                                <span className="patch-empty">
                                    −
                                </span>

                                <strong>
                                    Sin parche
                                </strong>

                            </button>


                            {/* LALIGA */}

                            {product.parches?.includes(
                                "laliga"
                            ) && (

                                <button
                                    type="button"
                                    className={
                                        patch === "laliga"
                                            ? "patch-option active"
                                            : "patch-option"
                                    }
                                    onClick={() =>
                                        setPatch("laliga")
                                    }
                                >

                                    <img
                                        src={laligaPatch}
                                        alt="LaLiga"
                                    />

                                    <strong>
                                        LaLiga
                                    </strong>

                                    <small>
                                        GRATIS
                                    </small>

                                </button>

                            )}


                            {/* CHAMPIONS */}

                            {product.parches?.includes(
                                "champions"
                            ) && (

                                <button
                                    type="button"
                                    className={
                                        patch === "champions"
                                            ? "patch-option active"
                                            : "patch-option"
                                    }
                                    onClick={() =>
                                        setPatch("champions")
                                    }
                                >

                                    <img
                                        src={championsPatch}
                                        alt="Champions"
                                    />

                                    <strong>
                                        Champions
                                    </strong>

                                    <small>
                                        GRATIS
                                    </small>

                                </button>

                            )}

                        </div>

                    </div>


                    {/* ==================================
                        RESUMEN
                    ================================== */}

                    <div className="product-summary">

                        <div>

                            <span>
                                Camiseta
                            </span>

                            <strong>
                                {precioBase.toFixed(2)} €
                            </strong>

                        </div>


                        {personalizada && (

                            <div>

                                <span>
                                    Personalización
                                </span>

                                <strong>
                                    +5.00 €
                                </strong>

                            </div>

                        )}


                        {patch && (

                            <div>

                                <span>
                                    Parche
                                </span>

                                <strong className="free">
                                    GRATIS
                                </strong>

                            </div>

                        )}


                        <div className="summary-total">

                            <span>
                                Total
                            </span>

                            <strong>
                                {precioFinal.toFixed(2)} €
                            </strong>

                        </div>

                    </div>


                    {/* ==================================
                        AÑADIR AL CARRITO
                    ================================== */}

                    <button
                        type="button"
                        className={
                            added
                                ? "add-cart added"
                                : "add-cart"
                        }
                        onClick={handleAddCart}
                    >

                        <span className="cart-button-text">

                            {added
                                ? "✓ Añadido al carrito"
                                : "🛒 Añadir al carrito"
                            }

                        </span>

                        <span>
                            {precioFinal.toFixed(2)} €
                        </span>

                    </button>


                    {/* ==================================
                        INFORMACIÓN
                    ================================== */}

                    <div className="purchase-info">

                        <div>
                            <span>✓</span>
                            <p>
                                Parches incluidos gratis
                            </p>
                        </div>

                        <div>
                            <span>✍</span>
                            <p>
                                Personalización opcional
                            </p>
                        </div>

                        <div>
                            <span>💬</span>
                            <p>
                                Pedido fácil por WhatsApp
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </main>

    );

}


export default ProductPage;