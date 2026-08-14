import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";


const CartContext = createContext(undefined);

const CART_STORAGE_KEY = "activzone_cart";


function getSavedCart() {
    try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        const parsedCart = savedCart ? JSON.parse(savedCart) : [];

        return Array.isArray(parsedCart) ? parsedCart : [];
    } catch {
        return [];
    }
}


function getCartId(product) {
    const size = product.talla || "sin-talla";
    const name = (product.nombrePersonalizado || "")
        .trim()
        .toUpperCase();
    const number = String(product.numero || "").trim();
    const patch = product.parche?.tipo || "sin-parche";

    return JSON.stringify([
        product.id,
        size,
        name,
        number,
        patch
    ]);
}


export function CartProvider({ children }) {
    const [cart, setCart] = useState(getSavedCart);


    useEffect(() => {
        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(cart)
        );
    }, [cart]);


    function addToCart(product) {
        const cartId = getCartId(product);

        const cartItem = {
            ...product,
            cartId,
            talla: product.talla || "sin-talla",
            nombrePersonalizado: (
                product.nombrePersonalizado || ""
            ).trim(),
            numero: String(product.numero || "").trim(),
            cantidad: 1
        };

        setCart((currentCart) => {
            const itemExists = currentCart.some(
                (item) => item.cartId === cartId
            );

            if (!itemExists) {
                return [...currentCart, cartItem];
            }

            return currentCart.map((item) =>
                item.cartId === cartId
                    ? {
                        ...item,
                        cantidad: Number(item.cantidad || 1) + 1
                    }
                    : item
            );
        });
    }


    function removeFromCart(cartId) {
        setCart((currentCart) =>
            currentCart.filter(
                (item) => item.cartId !== cartId
            )
        );
    }


    function increaseQuantity(cartId) {
        setCart((currentCart) =>
            currentCart.map((item) =>
                item.cartId === cartId
                    ? {
                        ...item,
                        cantidad: Number(item.cantidad || 1) + 1
                    }
                    : item
            )
        );
    }


    function decreaseQuantity(cartId) {
        setCart((currentCart) =>
            currentCart
                .map((item) =>
                    item.cartId === cartId
                        ? {
                            ...item,
                            cantidad: Number(item.cantidad || 1) - 1
                        }
                        : item
                )
                .filter((item) => item.cantidad > 0)
        );
    }


    function updateQuantity(cartId, quantity) {
        const safeQuantity = Math.max(
            1,
            Number(quantity) || 1
        );

        setCart((currentCart) =>
            currentCart.map((item) =>
                item.cartId === cartId
                    ? {
                        ...item,
                        cantidad: safeQuantity
                    }
                    : item
            )
        );
    }


    function clearCart() {
        setCart([]);
    }


    const cartSummary = useMemo(() => {
        const totalProductos = cart.reduce(
            (total, item) =>
                total + Number(item.cantidad || 0),
            0
        );

        const subtotal = cart.reduce(
            (total, item) =>
                total +
                Number(item.precio || 0) *
                Number(item.cantidad || 0),
            0
        );

        // Cada pareja recibe un 10% de descuento.
        // 2 productos: descuento sobre 2.
        // 3 productos: descuento sobre 2.
        // 4 productos: descuento sobre 4.
        const productsWithDiscount =
            Math.floor(totalProductos / 2) * 2;

        const unitPrices = cart.flatMap((item) =>
            Array.from(
                { length: Number(item.cantidad || 0) },
                () => Number(item.precio || 0)
            )
        );

        const descuento = unitPrices
            .slice(0, productsWithDiscount)
            .reduce(
                (total, price) => total + price * 0.1,
                0
            );

        return {
            totalProductos,
            subtotal,
            descuento,
            total: Math.max(0, subtotal - descuento)
        };
    }, [cart]);


    return (
        <CartContext.Provider
            value={{
                cart,
                ...cartSummary,
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


export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart debe utilizarse dentro de CartProvider."
        );
    }

    return context;
}