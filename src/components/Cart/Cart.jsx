import {
    FiX,
    FiTrash2,
    FiPlus,
    FiMinus
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";

import "./Cart.css";


function Cart({ open, setOpen }) {

    const {
        cart,
        removeFromCart,
        updateQuantity,
        clearCart
    } = useCart();


    // ==========================================
    // TOTAL DE CAMISETAS
    // ==========================================

    const totalProductos = cart.reduce(
        (total, item) =>
            total + Number(item.cantidad || 1),
        0
    );


    // ==========================================
    // SUBTOTAL
    // ==========================================

    const subtotal = cart.reduce(
        (total, item) =>
            total +
            Number(item.precio || 0) *
            Number(item.cantidad || 1),
        0
    );


    // ==========================================
    // DESCUENTO
    //
    // 10% POR CADA PAREJA DE CAMISETAS
    //
    // 2 camisetas  -> 10%
    // 4 camisetas  -> 20%
    // 6 camisetas  -> 30%
    //
    // Se calcula sobre el precio REAL
    // de las camisetas.
    // ==========================================

    let descuento = 0;
    let camisetasRestantes = 0;


    const preciosCamisetas = [];


    cart.forEach(item => {

        const cantidad =
            Number(item.cantidad || 1);

        const precio =
            Number(item.precio || 0);


        for (let i = 0; i < cantidad; i++) {

            preciosCamisetas.push(precio);

        }

    });


    // Ordenamos de mayor a menor para
    // formar las parejas correctamente.

    preciosCamisetas.sort(
        (a, b) => b - a
    );


    const parejas =
        Math.floor(preciosCamisetas.length / 2);


    for (let i = 0; i < parejas * 2; i += 2) {

        const precioPareja =
            preciosCamisetas[i] +
            preciosCamisetas[i + 1];

        descuento +=
            precioPareja * 0.10;

    }


    camisetasRestantes =
        totalProductos - (parejas * 2);


    // ==========================================
    // TOTAL
    // ==========================================

    const total =
        subtotal - descuento;


    // ==========================================
    // NOMBRE DEL PARCHE
    // ==========================================

    function getPatchName(item) {

        const patch =
            item.parche?.tipo;


        if (patch === "laliga") {

            return "LaLiga GRATIS";

        }


        if (patch === "champions") {

            return "Champions GRATIS";

        }


        return "Sin parche";

    }


    // ==========================================
    // WHATSAPP
    // ==========================================

    function enviarWhatsApp() {

        if (!cart.length) return;


        let mensaje =
`🛒 PEDIDO ACTIVZONE25

`;


        cart.forEach(item => {

            const cantidad =
                Number(item.cantidad || 1);

            const precio =
                Number(item.precio || 0);

            const precioTotal =
                precio * cantidad;


            mensaje +=
`👕 ${item.nombre}

📏 Talla: ${item.talla || "-"}

🏆 Parche: ${getPatchName(item)}

✍️ Nombre: ${
    item.nombrePersonalizado || "-"
}

🔢 Número: ${
    item.numero || "-"
}

${item.personalizada
    ? "✨ Personalización: +5 €\n"
    : ""
}Cantidad: ${cantidad}

Precio unitario: ${precio.toFixed(2)} €

Total producto: ${precioTotal.toFixed(2)} €

----------------------

`;

        });


        mensaje +=
`💰 Subtotal: ${subtotal.toFixed(2)} €

`;


        if (descuento > 0) {

            mensaje +=
`🎉 Descuento 10% por cada pareja: -${descuento.toFixed(2)} €

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

            {/* ==================================
                OVERLAY
            ================================== */}

            {open && (

                <div
                    className="cart-overlay active"
                    onClick={() => setOpen(false)}
                />

            )}


            {/* ==================================
                CARRITO
            ================================== */}

            <aside
                className={`cart ${
                    open ? "active" : ""
                }`}
            >


                {/* ==================================
                    HEADER
                ================================== */}

                <div className="cart-header">

                    <h2>
                        🛒 Tu carrito
                    </h2>


                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Cerrar carrito"
                    >

                        <FiX />

                    </button>

                </div>


                {/* ==================================
                    PRODUCTOS
                ================================== */}

                <div className="cart-items">

                    {cart.length === 0 ? (

                        <p className="empty-cart">
                            El carrito está vacío
                        </p>

                    ) : (

                        cart.map(item => (

                            <div
                                className="cart-item"
                                key={
                                    item.cartId ||
                                    item.id
                                }
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

                                    <h3>
                                        {item.nombre}
                                    </h3>


                                    <p>
                                        {Number(
                                            item.precio || 0
                                        ).toFixed(2)} €
                                    </p>


                                    <small>
                                        📏 Talla:{" "}
                                        {item.talla || "-"}
                                    </small>


                                    <small>
                                        🏆 Parche:{" "}
                                        {getPatchName(item)}
                                    </small>


                                    {(item.nombrePersonalizado ||
                                        item.numero) && (

                                        <small>

                                            ✍️{" "}
                                            {item.nombrePersonalizado ||
                                                "-"}

                                            {" "}

                                            #
                                            {item.numero || "-"}

                                        </small>

                                    )}


                                    {/* PERSONALIZACIÓN */}

                                    {item.personalizada && (

                                        <small className="personalization-cart">

                                            ✨ Personalización:
                                            {" "}
                                            +5 €

                                        </small>

                                    )}


                                    {/* CANTIDAD */}

                                    <div className="quantity">


                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.cartId,
                                                    Math.max(
                                                        1,
                                                        Number(
                                                            item.cantidad || 1
                                                        ) - 1
                                                    )
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
                                                updateQuantity(
                                                    item.cartId,
                                                    Number(
                                                        item.cantidad || 1
                                                    ) + 1
                                                )
                                            }
                                            aria-label="Aumentar cantidad"
                                        >

                                            <FiPlus />

                                        </button>


                                    </div>


                                    {/* ELIMINAR */}

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            removeFromCart(
                                                item.cartId
                                            )
                                        }
                                    >

                                        <FiTrash2 />

                                        Eliminar

                                    </button>

                                </div>

                            </div>

                        ))

                    )}

                </div>


                {/* ==================================
                    FOOTER
                ================================== */}

                <div className="cart-footer">


                    <p>

                        Camisetas:
                        {" "}

                        <strong>
                            {totalProductos}
                        </strong>

                    </p>


                    <p>

                        Subtotal:
                        {" "}

                        <strong>
                            {subtotal.toFixed(2)} €
                        </strong>

                    </p>


                    {descuento > 0 && (

                        <p className="discount">

                            🎉 Descuento por parejas:
                            {" "}

                            <strong>
                                -{descuento.toFixed(2)} €
                            </strong>

                        </p>

                    )}


                    <h3>

                        Total:
                        {" "}

                        {total.toFixed(2)} €

                    </h3>


                    {/* WHATSAPP */}

                    <button
                        className="checkout"
                        onClick={enviarWhatsApp}
                        disabled={!cart.length}
                    >

                        📲 Pedir por WhatsApp

                    </button>


                    {/* VACIAR */}

                    {cart.length > 0 && (

                        <button
                            className="clear-cart"
                            onClick={clearCart}
                        >

                            Vaciar carrito

                        </button>

                    )}

                </div>

            </aside>

        </>

    );

}


export default Cart;