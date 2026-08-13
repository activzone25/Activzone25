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
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart
    } = useCart();


    // ==========================================
    // TOTAL DE CAMISETAS
    // ==========================================

    const totalProductos = cart.reduce(
        (total, item) =>
            total + (item.cantidad || 1),
        0
    );


    // ==========================================
    // DESCUENTO
    // 10% POR CADA PAREJA DE 2 CAMISETAS
    // ==========================================

    const parejas = Math.floor(
        totalProductos / 2
    );

    const descuento =
        parejas * (25 * 2 * 0.10);


    // ==========================================
    // TOTAL
    // ==========================================

    const total =
        subtotal - descuento;


    // ==========================================
    // WHATSAPP
    // ==========================================

    function comprarWhatsApp() {

        if (!cart.length) return;


        let mensaje =
`🛒 *PEDIDO ACTIVZONE25*

`;


        cart.forEach(item => {

            mensaje +=
`👕 ${item.nombre}
📏 Talla: ${item.talla || "-"}
🔢 Cantidad: ${item.cantidad || 1}
💰 Precio: ${(
    Number(item.precio || 0) *
    (item.cantidad || 1)
).toFixed(2)} €

`;


            if (item.nombrePersonalizado) {

                mensaje +=
`✍️ Nombre: ${item.nombrePersonalizado}

`;

            }


            if (item.numero) {

                mensaje +=
`🔢 Dorsal: ${item.numero}

`;

            }


            if (item.parche?.tipo) {

                mensaje +=
`🏆 Parche: ${item.parche.tipo}

`;

            }


            mensaje +=
`----------------------

`;

        });


        mensaje +=
`💰 Subtotal: ${subtotal.toFixed(2)} €

`;


        if (descuento > 0) {

            mensaje +=
`🎁 Descuento 10% por cada 2 camisetas: -${descuento.toFixed(2)} €

`;

        }


        mensaje +=
`💰 TOTAL: ${total.toFixed(2)} €`;


        window.open(
            `https://wa.me/34647602998?text=${encodeURIComponent(mensaje)}`,
            "_blank"
        );

    }


    return (

        <>

            {/* OVERLAY */}

            <div
                className={`cart-overlay ${
                    open ? "show" : ""
                }`}
                onClick={onClose}
            />


            {/* CARRITO */}

            <aside
                className={`cart-drawer ${
                    open ? "open" : ""
                }`}
            >


                {/* HEADER */}

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


                {/* CONTENIDO */}

                {cart.length === 0 ? (

                    <div className="cart-empty">

                        <h3>
                            Tu carrito está vacío
                        </h3>

                        <p>
                            Añade alguna camiseta.
                        </p>

                    </div>

                ) : (

                    <>


                        {/* PRODUCTOS */}

                        <div className="cart-items">

                            {cart.map(item => (

                                <div
                                    key={item.cartId}
                                    className="cart-item"
                                >


                                    <img
                                        src={item.imagen}
                                        alt={item.nombre}
                                    />


                                    <div className="cart-info">

                                        <h4>
                                            {item.nombre}
                                        </h4>


                                        <p>
                                            Talla {item.talla}
                                        </p>


                                        <strong>
                                            {Number(
                                                item.precio || 0
                                            ).toFixed(2)} €
                                        </strong>


                                        {item.nombrePersonalizado && (

                                            <small>
                                                ✍️{" "}
                                                {item.nombrePersonalizado}
                                                {item.numero &&
                                                    ` #${item.numero}`}
                                            </small>

                                        )}


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


                        {/* FOOTER */}

                        <div className="cart-footer">


                            <div className="subtotal">

                                <span>
                                    Subtotal
                                </span>

                                <strong>
                                    {subtotal.toFixed(2)} €
                                </strong>

                            </div>


                            {descuento > 0 && (

                                <div className="discount">

                                    🎁 Descuento 10% por cada 2 camisetas

                                    <strong>
                                        -{descuento.toFixed(2)} €
                                    </strong>

                                </div>

                            )}


                            <div className="cart-total">

                                <span>
                                    Total
                                </span>

                                <strong>
                                    {total.toFixed(2)} €
                                </strong>

                            </div>


                            <button
                                className="buy-btn"
                                onClick={comprarWhatsApp}
                            >
                                📲 Comprar por WhatsApp
                            </button>


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