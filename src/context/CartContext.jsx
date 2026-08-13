import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const CartContext = createContext();

const CART_STORAGE_KEY = "activzone_cart";


export function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {

        try {

            const saved = localStorage.getItem(
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

            const parche =
                product.parche?.tipo || "sin-parche";

            const talla =
                product.talla || "sin-talla";

            const nombre =
                product.nombrePersonalizado || "";

            const numero =
                product.numero || "";


            const cartId = [
                product.id,
                talla,
                nombre,
                numero,
                parche
            ].join("-");


            const existingProduct = prevCart.find(
                item => item.cartId === cartId
            );


            if (existingProduct) {

                return prevCart.map(item =>
                    item.cartId === cartId
                        ? {
                            ...item,
                            cantidad:
                                Number(item.cantidad || 1) + 1
                        }
                        : item
                );

            }


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
    // ELIMINAR PRODUCTO
    // ==========================================

    function removeFromCart(cartId) {

        setCart(prevCart =>
            prevCart.filter(
                item => item.cartId !== cartId
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
                            Number(item.cantidad || 1) + 1
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
                                Number(item.cantidad || 1) - 1
                        }
                        : item
                )
                .filter(item => item.cantidad > 0)
        );

    }


    // ==========================================
    // ACTUALIZAR CANTIDAD
    // ==========================================

    function updateQuantity(cartId, cantidad) {

        const nuevaCantidad = Math.max(
            1,
            Number(cantidad)
        );


        setCart(prevCart =>
            prevCart.map(item =>
                item.cartId === cartId
                    ? {
                        ...item,
                        cantidad: nuevaCantidad
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
    // SUBTOTAL
    // ==========================================

    const subtotal = cart.reduce(
        (total, item) =>
            total +
            Number(item.precio || 0) *
            Number(item.cantidad || 0),
        0
    );


    // ==========================================
    // TOTAL PRODUCTOS
    // ==========================================

    const totalProductos = cart.reduce(
        (total, item) =>
            total +
            Number(item.cantidad || 0),
        0
    );


    // ==========================================
    // CONTEXT
    // ==========================================

    return (

        <CartContext.Provider
            value={{
                cart,
                subtotal,
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

    return useContext(CartContext);

}