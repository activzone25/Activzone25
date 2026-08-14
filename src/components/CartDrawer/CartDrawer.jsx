import {
    FiX,
    FiPlus,
    FiMinus,
    FiTrash2,
    FiShoppingBag,
    FiMessageCircle
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";

import "./CartDrawer.css";


function CartDrawer({ open, onClose }) {

    const {
        cart,
        subtotal,
        descuento,
        total,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart
    } = useCart();


    /* ==========================================
       PARCHE
    ========================================== */

    function getPatchName(item) {

        const patch = item.parche?.tipo;

        if (patch === "laliga") {
            return "LaLiga GRATIS";
        }

        if (patch === "champions") {
            return "Champions GRATIS";
        }

        return "Sin parche";
    }


    /* ==========================================
       WHATSAPP
    ========================================== */

    function comprarWhatsApp() {

        if (!cart.length) {
            return;
        }

        let mensaje = `🛒 *PEDIDO ACTIVZONE25*\n\n`;

        cart.forEach(item => {

            const cantidad =
                Number(item.cantidad || 1);

            const precio =
                Number(item.precio || 0);

            const totalProducto =
                precio * cantidad;


            mensaje +=
                `👕 *${item.nombre}*\n`;

            mensaje +=
                `📏 Talla: ${item.talla || "-"}\n`;

            mensaje +=
                `🏆 Parche: ${getPatchName(item)}\n`;


            /* PERSONALIZACIÓN */

            if (
                item.nombrePersonalizado ||
                item.numero
            ) {

                mensaje +=
                    `✍️ Personalización:\n`;

                if (item.nombrePersonalizado) {

                    mensaje +=
                        `   Nombre: ${item.nombrePersonalizado}\n`;

                }

                if (item.numero) {

                    mensaje +=
                        `   Dorsal: ${item.numero}\n`;

                }

            }


            mensaje +=
                `🔢 Cantidad: ${cantidad}\n`;

            mensaje +=
                `💰 Precio: ${totalProducto.toFixed(2)} €\n`;

            mensaje +=
                `----------------------\n\n`;

        });


        /* RESUMEN */

        mensaje +=
            `💰 Subtotal: ${subtotal.toFixed(2)} €\n\n`;


        if (descuento > 0) {

            mensaje +=
                `🎁 Descuento 10%: -${descuento.toFixed(2)} €\n\n`;

        }


        mensaje +=
            `💰 *TOTAL: ${total.toFixed(2)} €*\n\n`;

        mensaje +=
            `Gracias por comprar en ACTIVZONE25 ⚽`;


        const telefono =
            "34647602998";


        const url =
            `https://wa.me/${telefono}?text=${encodeURIComponent(
                mensaje
            )}`;


        window.open(
            url,
            "_blank"
        );

    }


    /* ==========================================
       RENDER
    ========================================== */

    return (

        <>

            {/* OVERLAY */}

            <div
                className={`cart-overlay ${
                    open ? "show" : ""
                }`}
                onClick={onClose}
            />


            {/* DRAWER */}

            <aside
                className={`cart-drawer ${
                    open ? "open" : ""
                }`}
                aria-hidden={!open}
            >


                {/* ==================================
                    HEADER
                ================================== */}

                <header className="cart-header">

                    <div className="cart-title">

                        <div className="cart-title-icon">
                            <FiShoppingBag />
                        </div>

                        <div>

                            <h2>
                                Mi carrito
                            </h2>

                            <span>
                                {cart.length === 0
                                    ? "Sin productos"
                                    : `${cart.length} producto${
                                        cart.length === 1
                                            ? ""
                                            : "s"
                                    }`
                                }
                            </span>

                        </div>

                    </div>


                    <button
                        className="cart-close"
                        onClick={onClose}
                        aria-label="Cerrar carrito"
                    >
                        <FiX />
                    </button>

                </header>


                {/* ==================================
                    CARRITO VACÍO
                ================================== */}

                {cart.length === 0 ? (

                    <div className="cart-empty">

                        <div className="empty-icon">
                            <FiShoppingBag />
                        </div>

                        <h3>
                            Tu carrito está vacío
                        </h3>

                        <p>
                            Añade alguna camiseta para comenzar tu pedido.
                        </p>

                        <button
                            className="empty-shop-btn"
                            onClick={onClose}
                        >
                            Ver camisetas
                        </button>

                    </div>

                ) : (

                    <>

                        {/* ==================================
                            PRODUCTOS
                        ================================== */}

                        <div className="cart-items">

                            {cart.map(item => {

                                const cantidad =
                                    Number(
                                        item.cantidad || 1
                                    );

                                const precio =
                                    Number(
                                        item.precio || 0
                                    );


                                return (

                                    <article
                                        key={item.cartId}
                                        className="cart-item"
                                    >


                                        {/* IMAGEN */}

                                        <div className="cart-product-image">

                                            <img
                                                src={
                                                    item.imagen ||
                                                    item.front
                                                }
                                                alt={item.nombre}
                                            />

                                        </div>


                                        {/* INFORMACIÓN */}

                                        <div className="cart-info">


                                            <div className="cart-product-top">

                                                <div>

                                                    <span className="cart-league">
                                                        {item.liga || "Fútbol"}
                                                    </span>

                                                    <h4>
                                                        {item.nombre}
                                                    </h4>

                                                </div>


                                                <button
                                                    className="remove-item"
                                                    onClick={() =>
                                                        removeFromCart(
                                                            item.cartId
                                                        )
                                                    }
                                                    aria-label="Eliminar producto"
                                                >
                                                    <FiTrash2 />
                                                </button>

                                            </div>


                                            {/* DETALLES */}

                                            <div className="cart-details">

                                                <span>
                                                    Talla {item.talla || "-"}
                                                </span>

                                                <span>
                                                    {getPatchName(item)}
                                                </span>

                                            </div>


                                            {/* PERSONALIZACIÓN */}

                                            {(item.nombrePersonalizado ||
                                                item.numero) && (

                                                <div className="cart-personalization">

                                                    <span>
                                                        ✍️
                                                    </span>

                                                    <div>

                                                        {item.nombrePersonalizado && (

                                                            <strong>
                                                                {item.nombrePersonalizado}
                                                            </strong>

                                                        )}

                                                        {item.numero && (

                                                            <strong>
                                                                #{item.numero}
                                                            </strong>

                                                        )}

                                                    </div>

                                                    <small>
                                                        +5 €
                                                    </small>

                                                </div>

                                            )}


                                            {/* PRECIO + CANTIDAD */}

                                            <div className="cart-product-bottom">

                                                <strong className="cart-price">
                                                    {precio.toFixed(2)} €
                                                </strong>


                                                <div className="qty">

                                                    <button
                                                        onClick={() =>
                                                            decreaseQuantity(
                                                                item.cartId
                                                            )
                                                        }
                                                        aria-label="Reducir cantidad"
                                                    >
                                                        <FiMinus />
                                                    </button>


                                                    <span>
                                                        {cantidad}
                                                    </span>


                                                    <button
                                                        onClick={() =>
                                                            increaseQuantity(
                                                                item.cartId
                                                            )
                                                        }
                                                        aria-label="Aumentar cantidad"
                                                    >
                                                        <FiPlus />
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    </article>

                                );

                            })}

                        </div>


                        {/* ==================================
                            FOOTER
                        ================================== */}

                        <footer className="cart-footer">


                            {/* DESCUENTO */}

                            {descuento > 0 && (

                                <div className="discount">

                                    <div>

                                        <span>
                                            🎁 Oferta activada
                                        </span>

                                        <small>
                                            10% de descuento
                                        </small>

                                    </div>

                                    <strong>
                                        -{descuento.toFixed(2)} €
                                    </strong>

                                </div>

                            )}


                            {/* SUBTOTAL */}

                            <div className="summary-row">

                                <span>
                                    Subtotal
                                </span>

                                <strong>
                                    {subtotal.toFixed(2)} €
                                </strong>

                            </div>


                            {/* TOTAL */}

                            <div className="summary-total">

                                <span>
                                    Total
                                </span>

                                <strong>
                                    {total.toFixed(2)} €
                                </strong>

                            </div>


                            {/* WHATSAPP */}

                            <button
                                className="buy-btn"
                                onClick={comprarWhatsApp}
                            >

                                <FiMessageCircle />

                                <span>
                                    Comprar por WhatsApp
                                </span>

                                <strong>
                                    {total.toFixed(2)} €
                                </strong>

                            </button>


                            {/* VACIAR */}

                            <button
                                className="clear-btn"
                                onClick={clearCart}
                            >
                                Vaciar carrito
                            </button>

                        </footer>

                    </>

                )}

            </aside>

        </>

    );

}


export default CartDrawer;