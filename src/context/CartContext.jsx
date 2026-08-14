import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";


const CartContext = createContext();


const CART_STORAGE_KEY = "activzone_cart";


export function CartProvider({ children }) {

    // ==========================================
    // CARRITO
    // ==========================================

    const [cart, setCart] = useState(() => {

        try {

            const saved =
                localStorage.getItem(
                    CART_STORAGE_KEY
                );

            return saved
                ? JSON.parse(saved)
                : [];

        } catch {

            return [];

        }

    });


    // ==========================================
    // GUARDAR CARRITO
    // ==========================================

    useEffect(() => {

        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(cart)
        );

    }, [cart]);


    // ==========================================
    // AÑADIR AL CARRITO
    // ==========================================

    function addToCart(product) {

        setCart(prevCart => {

            const talla =
                product.talla || "sin-talla";

            const nombre =
                product.nombrePersonalizado || "";

            const numero =
                product.numero || "";

            const parche =
                product.parche?.tipo ||
                "sin-parche";


            const cartId = [
                product.id,
                talla,
                nombre,
                numero,
                parche
            ].join("-");


            const existente =
                prevCart.find(
                    item =>
                        item.cartId === cartId
                );


            // Si ya existe → aumentar cantidad

            if (existente) {

                return prevCart.map(item =>

                    item.cartId === cartId

                        ? {
                            ...item,
                            cantidad:
                                Number(
                                    item.cantidad || 1
                                ) + 1
                        }

                        : item

                );

            }


            // Producto nuevo

            return [

                ...prevCart,

                {
                    ...product,
                    cartId,
                    cantidad: 1
                }

            ];

        });

    }


    // ==========================================
    // ELIMINAR
    // ==========================================

    function removeFromCart(cartId) {

        setCart(prevCart =>

            prevCart.filter(
                item =>
                    item.cartId !== cartId
            )

        );

    }


    // ==========================================
    // AUMENTAR CANTIDAD
    // ==========================================

    function increaseQuantity(cartId) {

        setCart(prevCart =>

            prevCart.map(item =>

                item.cartId === cartId

                    ? {
                        ...item,
                        cantidad:
                            Number(
                                item.cantidad || 1
                            ) + 1
                    }

                    : item

            )

        );

    }


    // ==========================================
    // DISMINUIR CANTIDAD
    // ==========================================

    function decreaseQuantity(cartId) {

        setCart(prevCart =>

            prevCart

                .map(item =>

                    item.cartId === cartId

                        ? {
                            ...item,
                            cantidad:
                                Number(
                                    item.cantidad || 1
                                ) - 1
                        }

                        : item

                )

                .filter(
                    item =>
                        Number(
                            item.cantidad
                        ) > 0
                )

        );

    }


    // ==========================================
    // ACTUALIZAR CANTIDAD
    // ==========================================

    function updateQuantity(
        cartId,
        cantidad
    ) {

        const nuevaCantidad =
            Math.max(
                1,
                Number(cantidad) || 1
            );


        setCart(prevCart =>

            prevCart.map(item =>

                item.cartId === cartId

                    ? {
                        ...item,
                        cantidad:
                            nuevaCantidad
                    }

                    : item

            )

        );

    }


    // ==========================================
    // VACIAR CARRITO
    // ==========================================

    function clearCart() {

        setCart([]);

    }


    // ==========================================
    // TOTAL DE CAMISETAS
    // ==========================================

    const totalProductos =
        cart.reduce(

            (total, item) =>

                total +
                Number(
                    item.cantidad || 0
                ),

            0

        );


    // ==========================================
    // SUBTOTAL
    // ==========================================

    const subtotal =
        cart.reduce(

            (total, item) =>

                total +

                Number(
                    item.precio || 0
                ) *

                Number(
                    item.cantidad || 0
                ),

            0

        );


    // ==========================================
    // DESCUENTO
    //
    // 10% POR CADA PAREJA
    //
    // 1 → 0%
    // 2 → 10%
    // 3 → 10%
    // 4 → 20%
    // 5 → 20%
    // 6 → 30%
    // ==========================================

    const precios = [];


    cart.forEach(item => {

        const cantidad =
            Number(
                item.cantidad || 0
            );

        const precio =
            Number(
                item.precio || 0
            );


        for (
            let i = 0;
            i < cantidad;
            i++
        ) {

            precios.push(precio);

        }

    });


    const parejas =
        Math.floor(
            precios.length / 2
        );


    const descuento =
        precios

            .slice(
                0,
                parejas * 2
            )

            .reduce(

                (total, precio) =>

                    total +
                    precio * 0.10,

                0

            );


    // ==========================================
    // TOTAL FINAL
    // ==========================================

    const total =
        Math.max(
            0,
            subtotal - descuento
        );


    // ==========================================
    // PROVIDER
    // ==========================================

    return (

        <CartContext.Provider
            value={{

                cart,

                subtotal,

                descuento,

                total,

                totalProductos,

                addToCart,

                removeFromCart,

                increaseQuantity,

                decreaseQuantity,

                updateQuantity,

                clearCart

            }}
        >

            {children}

        </CartContext.Provider>

    );

}


// ==========================================
// HOOK
// ==========================================

export function useCart() {

    return useContext(
        CartContext
    );

}