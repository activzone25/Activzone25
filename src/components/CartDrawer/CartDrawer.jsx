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

    const total =
        cart.length >= 2
            ? subtotal * 0.9
            : subtotal;

    function comprarWhatsApp() {

        let mensaje =
`🛒 *PEDIDO ACTIVZONE25*

`;

        cart.forEach(item => {

            mensaje +=
`👕 ${item.nombre}
📏 ${item.talla}
🔢 Cantidad: ${item.cantidad}
💰 ${item.precio} €

`;

            if(item.nombrePersonalizado){

                mensaje +=
`✍️ ${item.nombrePersonalizado}

`;

            }

            if(item.numero){

                mensaje +=
`🔢 Dorsal: ${item.numero}

`;

            }

        });

        mensaje +=
`----------------------

💰 Total: ${total.toFixed(2)} €

`;

        window.open(

`https://wa.me/34647602998?text=${encodeURIComponent(mensaje)}`,

"_blank"

);

    }

    return (

        <>

            <div
                className={`cart-overlay ${open ? "show" : ""}`}
                onClick={onClose}
            />

            <aside
                className={`cart-drawer ${open ? "open" : ""}`}
            >

                <div className="cart-header">

                    <h2>
                        🛒 Mi carrito
                    </h2>

                    <button onClick={onClose}>
                        <FiX />
                    </button>

                </div>

                {

                    cart.length === 0 ?

                    (

                        <div className="cart-empty">

                            <h3>
                                Tu carrito está vacío
                            </h3>

                            <p>
                                Añade alguna camiseta.
                            </p>

                        </div>

                    )

                    :

                    (

                        <>

                            <div className="cart-items">

                                {

                                    cart.map(item => (

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
                                                    {item.precio} €
                                                </strong>

                                                <div className="qty">

                                                    <button
                                                        onClick={() =>
                                                            decreaseQuantity(item.cartId)
                                                        }
                                                    >
                                                        <FiMinus />
                                                    </button>

                                                    <span>
                                                        {item.cantidad}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            increaseQuantity(item.cartId)
                                                        }
                                                    >
                                                        <FiPlus />
                                                    </button>

                                                </div>

                                            </div>

                                            <button
                                                className="remove-item"
                                                onClick={() =>
                                                    removeFromCart(item.cartId)
                                                }
                                            >
                                                <FiTrash2 />
                                            </button>

                                        </div>

                                    ))

                                }

                            </div>

                            <div className="cart-footer">

                                {

                                    cart.length >= 2 && (

                                        <div className="discount">

                                            🎁 Descuento aplicado (-10%)

                                        </div>

                                    )

                                }

                                <h3>

                                    Total

                                    <span>

                                        {total.toFixed(2)} €

                                    </span>

                                </h3>

                                <button
                                    className="buy-btn"
                                    onClick={comprarWhatsApp}
                                >

                                    Comprar por WhatsApp

                                </button>

                                <button
                                    className="clear-btn"
                                    onClick={clearCart}
                                >

                                    Vaciar carrito

                                </button>

                            </div>

                        </>

                    )

                }

            </aside>

        </>

    );

}

export default CartDrawer;