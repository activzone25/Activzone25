import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        try {
            const saved = localStorage.getItem("activzone_cart");
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            "activzone_cart",
            JSON.stringify(cart)
        );
    }, [cart]);

    function addToCart(product) {

        setCart(prev => {

            const parche =
                product.parche?.tipo || "sin-parche";

            const cartId = [
                product.id,
                product.talla || "sin-talla",
                product.nombrePersonalizado || "",
                product.numero || "",
                parche
            ].join("-");

            const existe = prev.find(
                item => item.cartId === cartId
            );

            if (existe) {

                return prev.map(item =>
                    item.cartId === cartId
                        ? {
                              ...item,
                              cantidad: item.cantidad + 1
                          }
                        : item
                );
            }

            return [
                ...prev,
                {
                    ...product,
                    cartId,
                    cantidad: 1
                }
            ];
        });
    }

    function removeFromCart(cartId) {
        setCart(prev =>
            prev.filter(item => item.cartId !== cartId)
        );
    }

    function increaseQuantity(cartId) {

        setCart(prev =>
            prev.map(item =>
                item.cartId === cartId
                    ? {
                          ...item,
                          cantidad: item.cantidad + 1
                      }
                    : item
            )
        );

    }

    function decreaseQuantity(cartId) {

        setCart(prev =>
            prev
                .map(item =>
                    item.cartId === cartId
                        ? {
                              ...item,
                              cantidad: item.cantidad - 1
                          }
                        : item
                )
                .filter(item => item.cantidad > 0)
        );

    }

    function updateQuantity(cartId, cantidad) {

        setCart(prev =>
            prev.map(item =>
                item.cartId === cartId
                    ? {
                          ...item,
                          cantidad: Math.max(1, cantidad)
                      }
                    : item
            )
        );

    }

    function clearCart() {
        setCart([]);
    }

    const subtotal = cart.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
    );

    const totalProductos = cart.reduce(
        (total, item) => total + item.cantidad,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                subtotal,
                totalProductos,
                addToCart,
                removeFromCart,
                updateQuantity,
                increaseQuantity,
                decreaseQuantity,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}