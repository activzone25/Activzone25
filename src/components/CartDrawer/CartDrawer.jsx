import {
    FiX,
    FiPlus,
    FiMinus,
    FiTrash2
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


    // ==========================================
    // NOMBRE DEL PARCHE
    // ==========================================

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


    // ==========================================
    // COMPRAR POR WHATSAPP
    // ==========================================

    function comprarWhatsApp() {

        if (!cart.length) {
            return;
        }

        let mensaje = `🛒 *PEDIDO ACTIVZONE25*

`;

        cart.forEach(item => {

            const cantidad =
                Number(item.cantidad || 1);

            const precio =
                Number(item.precio || 0);

            const totalProducto =
                precio * cantidad;


            mensaje += `👕 *${item.nombre}*

`;

            mensaje += `📏 Talla: ${item.talla || "-"}

`;

            mensaje += `🏆 Parche: ${getPatchName(item)}

`;


            // PERSONALIZACIÓN

            if (
                item.nombrePersonalizado ||
                item.numero
            ) {

                mensaje += `✍️ Personalización:

`;

                if (item.nombrePersonalizado) {

                    mensaje +=
                        `   Nombre: ${item.nombrePersonalizado}
`;

                }

                if (item.numero) {

                    mensaje +=
                        `   Dorsal: ${item.numero}
`;

                }

            }


            mensaje +=
                `🔢 Cantidad: ${cantidad}

`;

            mensaje +=
                `💰 Precio: ${totalProducto.toFixed(2)} €

`;

            mensaje +=
                `----------------------

`;

        });


        // ==========================================
        // RESUMEN
        // ==========================================

        mensaje +=
            `💰 Subtotal: ${subtotal.toFixed(2)} €

`;


        if (descuento > 0) {

            mensaje +=
                `🎁 Descuento: -${descuento.toFixed(2)} €

`;

        }


        mensaje +=
            `💰 *TOTAL: ${total.toFixed(2)} €*

`;


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


    // ==========================================
    // RENDER
    // ==========================================

    return (

        <>

            {/* ==========================================
                OVERLAY
            ========================================== */}

            <div
                className={`cart-overlay ${
                    open ? "show" : ""
                }`}
                onClick={onClose}
            />


            {/* ==========================================
                CARRITO
            ========================================== */}

            <aside
                className={`cart-drawer ${
                    open ? "open" : ""
                }`}
            >


                {/* ======================================
                    HEADER
                ====================================== */}

                <div className="cart-header">

                    <h2>
                        🛒 Mi carrito
                    </h2>

                    <button
                        onClick={onClose}
                        aria-label="Cerrar carrito"
                    >
                        <FiX />
                    </button>

                </div>


                {/* ======================================
                    CARRITO VACÍO
                ====================================== */}

                {cart.length === 0 ? (

                    <div className="cart-empty">

                        <h3>
                            Tu carrito está vacío
                        </h3>

                        <p>
                            Añade alguna camiseta para comenzar.
                        </p>

                    </div>

                ) : (

                    <>

                        {/* ==================================
                            PRODUCTOS
                        ================================== */}

                        <div className="cart-items">

                            {cart.map(item => (

                                <div
                                    key={item.cartId}
                                    className="cart-item"
                                >

                                    {/* IMAGEN */}

                                    <img
                                        src={
                                            item.imagen ||
                                            item.front
                                        }
                                        alt={item.nombre}
                                    />


                                    {/* INFORMACIÓN */}

                                    <div className="cart-info">

                                        <h4>
                                            {item.nombre}
                                        </h4>


                                        <p>
                                            Talla {item.talla || "-"}
                                        </p>


                                        {/* PRECIO */}

                                        <strong>
                                            {Number(
                                                item.precio || 0
                                            ).toFixed(2)} €
                                        </strong>


                                        {/* PERSONALIZACIÓN */}

                                        {(item.nombrePersonalizado ||
                                            item.numero) && (

                                            <small>

                                                ✍️{" "}

                                                {item.nombrePersonalizado ||
                                                    "Sin nombre"}

                                                {item.numero &&
                                                    ` #${item.numero}`}

                                                {" (+5 €)"}

                                            </small>

                                        )}


                                        {/* PARCHE */}

                                        <small>

                                            🏆{" "}

                                            {getPatchName(item)}

                                        </small>


                                        {/* CANTIDAD */}

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
                                                {item.cantidad || 1}
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


                                    {/* ELIMINAR */}

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

                            ))}

                        </div>


                        {/* ==================================
                            FOOTER
                        ================================== */}

                        <div className="cart-footer">


                            {/* SUBTOTAL */}

                            <div className="subtotal">

                                <span>
                                    Subtotal
                                </span>

                                <strong>
                                    {subtotal.toFixed(2)} €
                                </strong>

                            </div>


                            {/* DESCUENTO */}

                            {descuento > 0 && (

                                <div className="discount">

                                    <span>
                                        🎁 Descuento 10%
                                    </span>

                                    <strong>
                                        -{descuento.toFixed(2)} €
                                    </strong>

                                </div>

                            )}


                            {/* TOTAL */}

                            <div className="cart-total">

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
                                📲 Comprar por WhatsApp
                            </button>


                            {/* VACIAR */}

                            <button
                                className="clear-btn"
                                onClick={clearCart}
                            >
                                Vaciar carrito
                            </button>

                        </div>

                    </>

                )}

            </aside>

        </>

    );

}


export default CartDrawer;