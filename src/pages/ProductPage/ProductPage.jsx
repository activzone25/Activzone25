import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import products from "../../data/products";
import { useCart } from "../../context/CartContext";

import laligaPatch from "../../assets/parches/laliga.png";
import championsPatch from "../../assets/parches/champions.png";

import "./ProductPage.css";


const ADULT_SIZES = [
    "S", "M", "L", "XL", "2XL", "3XL", "4XL"
];

const KID_SIZES = [
    "16", "18", "20", "22", "24", "26", "28"
];

const ADULT_SIZE_GUIDE = {
    S: "162–170 cm",
    M: "170–176 cm",
    L: "176–182 cm",
    XL: "182–190 cm",
    "2XL": "190–195 cm",
    "3XL": "195–197 cm",
    "4XL": "197–200 cm"
};

const KID_SIZE_GUIDE = {
    16: "95–105 cm",
    18: "105–115 cm",
    20: "115–125 cm",
    22: "125–135 cm",
    24: "135–145 cm",
    26: "145–155 cm",
    28: "155–165 cm"
};

const PATCHES = {
    laliga: {
        label: "LaLiga",
        image: laligaPatch
    },

    champions: {
        label: "Champions League",
        image: championsPatch
    }
};


function ProductPage() {
    const { slug } = useParams();
    const { addToCart } = useCart();

    const product = products.find(
        (item) => item.slug === slug
    );

    const isKidProduct = product?.categoria === "Niño";
    const defaultSize = isKidProduct ? "16" : "M";

    const [side, setSide] = useState("front");
    const [size, setSize] = useState(defaultSize);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [patch, setPatch] = useState("");
    const [added, setAdded] = useState(false);


    useEffect(() => {
        setSide("front");
        setSize(defaultSize);
        setName("");
        setNumber("");
        setPatch("");
        setAdded(false);
    }, [slug, defaultSize]);


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


    const positions = product.positions || {};
    const availablePatches = product.parches || [];
    const canCustomize = product.personalizable !== false;

    const sizes = isKidProduct
        ? KID_SIZES
        : ADULT_SIZES;

    const heightGuide = isKidProduct
        ? KID_SIZE_GUIDE[size]
        : ADULT_SIZE_GUIDE[size];

    const cleanName = canCustomize ? name.trim() : "";
    const cleanNumber = canCustomize ? number.trim() : "";

    const isPersonalized = Boolean(cleanName || cleanNumber);

    const basePrice = Number(product.precio) || 25;
    const personalizationExtra = isPersonalized ? 5 : 0;
    const finalPrice = basePrice + personalizationExtra;

    const previewImage = side === "back"
        ? product.back || product.front
        : product.front || product.back;

    const selectedPatch = PATCHES[patch];


    function handleNumberChange(event) {
        setNumber(
            event.target.value
                .replace(/\D/g, "")
                .slice(0, 2)
        );
    }


    function handleAddToCart() {
        addToCart({
            ...product,
            imagen: product.front || product.back,
            talla: size,
            nombrePersonalizado: cleanName,
            numero: cleanNumber,
            personalizada: isPersonalized,
            precioBase: basePrice,
            extraPersonalizacion: personalizationExtra,
            precio: finalPrice,
            parche: {
                tipo: patch || "sin-parche",
                nombre: selectedPatch?.label || ""
            }
        });

        setAdded(true);

        window.setTimeout(() => {
            setAdded(false);
        }, 2200);
    }


    return (
        <main className="product-page">
            <section className="product-detail">
                <div className="product-gallery">
                    <div className="preview-top">
                        <span className="preview-label">
                            VISTA PREVIA
                        </span>

                        <span className="preview-season">
                            {product.temporada || "2026/27"}
                        </span>
                    </div>

                    <div className="shirt-preview">
                        <div className="shirt-glow" />

                        <img
                            src={previewImage}
                            alt={`${product.nombre} - ${
                                side === "front"
                                    ? "vista delantera"
                                    : "vista trasera"
                            }`}
                            className="shirt-image"
                        />

                        {side === "front" && selectedPatch && (
                            <img
                                src={selectedPatch.image}
                                alt={`Parche ${selectedPatch.label}`}
                                className={`shirt-patch ${patch}`}
                                style={positions.patch}
                            />
                        )}

                        {side === "back" && cleanName && (
                            <span
                                className="shirt-name"
                                style={positions.name}
                            >
                                {cleanName.toUpperCase()}
                            </span>
                        )}

                        {side === "back" && cleanNumber && (
                            <span
                                className="shirt-number"
                                style={positions.number}
                            >
                                {cleanNumber}
                            </span>
                        )}
                    </div>

                    <div className="gallery-buttons">
                        <button
                            type="button"
                            className={
                                side === "front" ? "active" : ""
                            }
                            onClick={() => setSide("front")}
                        >
                            Delantera
                        </button>

                        <button
                            type="button"
                            className={
                                side === "back" ? "active" : ""
                            }
                            onClick={() => setSide("back")}
                        >
                            Trasera
                        </button>
                    </div>

                    <div className="preview-info">
                        <span>
                            👕 {product.temporada || "2026/27"}
                        </span>

                        <span>✓ Producto disponible</span>
                    </div>
                </div>

                <div className="product-options">
                    <span className="product-league">
                        {product.liga}
                    </span>

                    <h1>{product.nombre}</h1>

                    <p className="product-subtitle">
                        Camiseta oficial temporada{" "}
                        {product.temporada || "2026/27"}
                    </p>

                    <div className="product-price">
                        {finalPrice.toFixed(2)} €
                    </div>

                    <div
                        className={
                            isPersonalized
                                ? "price-note personalized"
                                : "price-note"
                        }
                    >
                        {isPersonalized
                            ? "✍️ Personalización añadida · +5 €"
                            : "Personalización opcional · +5 €"}
                    </div>

                    <div className="option-section">
                        <div className="option-title">
                            <div>
                                <h3>Talla</h3>

                                <span className="option-description">
                                    {isKidProduct
                                        ? "Selecciona la talla infantil"
                                        : "Selecciona tu talla"}
                                </span>
                            </div>

                            <strong>{size}</strong>
                        </div>

                        <div className="sizes">
                            {sizes.map((itemSize) => (
                                <button
                                    type="button"
                                    key={itemSize}
                                    className={
                                        size === itemSize
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setSize(itemSize)}
                                >
                                    {itemSize}
                                </button>
                            ))}
                        </div>

                        {heightGuide && (
                            <p className="size-guide">
                                📏 Altura recomendada: {heightGuide}
                            </p>
                        )}
                    </div>

                    {canCustomize && (
                        <div className="option-section">
                            <div className="option-title">
                                <div>
                                    <h3>Personalización</h3>

                                    <span className="option-description">
                                        Nombre y dorsal
                                    </span>
                                </div>

                                <strong>+5 €</strong>
                            </div>

                            <div className="custom-fields">
                                <div className="input-field">
                                    <label htmlFor="product-name">
                                        Nombre
                                    </label>

                                    <input
                                        id="product-name"
                                        type="text"
                                        value={name}
                                        maxLength="12"
                                        placeholder="Ej. PEDRI"
                                        onChange={(event) =>
                                            setName(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="product-number">
                                        Dorsal
                                    </label>

                                    <input
                                        id="product-number"
                                        type="text"
                                        inputMode="numeric"
                                        value={number}
                                        maxLength="2"
                                        placeholder="Ej. 8"
                                        onChange={handleNumberChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {availablePatches.length > 0 && (
                        <div className="option-section">
                            <div className="option-title">
                                <div>
                                    <h3>Parche de competición</h3>

                                    <span className="option-description">
                                        Selección gratuita
                                    </span>
                                </div>

                                <strong>GRATIS</strong>
                            </div>

                            <div className="patch-options">
                                <button
                                    type="button"
                                    className={
                                        patch === ""
                                            ? "patch-option active"
                                            : "patch-option"
                                    }
                                    onClick={() => setPatch("")}
                                >
                                    Sin parche
                                </button>

                                {availablePatches.map((patchType) => {
                                    const patchInfo = PATCHES[patchType];

                                    if (!patchInfo) {
                                        return null;
                                    }

                                    return (
                                        <button
                                            type="button"
                                            key={patchType}
                                            className={
                                                patch === patchType
                                                    ? "patch-option active"
                                                    : "patch-option"
                                            }
                                            onClick={() =>
                                                setPatch(patchType)
                                            }
                                        >
                                            <img
                                                src={patchInfo.image}
                                                alt=""
                                                className={
                                                    `patch-option-image ${patchType}`
                                                }
                                            />

                                            <span>
                                                {patchInfo.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <button
                        type="button"
                        className={
                            added
                                ? "add-cart-button added"
                                : "add-cart-button"
                        }
                        onClick={handleAddToCart}
                    >
                        {added
                            ? "✓ Añadido al carrito"
                            : `Añadir al carrito · ${finalPrice.toFixed(2)} €`}
                    </button>
                </div>
            </section>
        </main>
    );
}


export default ProductPage;