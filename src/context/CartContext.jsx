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

            const saved =
                localStorage.getItem(
                    "activzone_cart"
                );

            return saved
                ? JSON.parse(saved)
                : [];


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







    function addToCart(product){


        setCart(prevCart => {


            const parche =

                product.parche?.tipo
                ||
                "sin-parche";



            const cartId = [

                product.id,

                product.talla || "sin-talla",

                product.nombrePersonalizado || "",

                product.numero || "",

                parche

            ].join("-");





            const existe = prevCart.find(

                item =>
                    item.cartId === cartId

            );





            if(existe){


                return prevCart.map(item =>


                    item.cartId === cartId

                    ?

                    {

                        ...item,

                        cantidad:
                            (item.cantidad || 1) + 1

                    }


                    :

                    item


                );


            }







            return [

                ...prevCart,

                {

                    ...product,

                    cartId,

                    cantidad:1

                }

            ];



        });


    }









    function removeFromCart(cartId){


        setCart(prev =>

            prev.filter(

                item =>
                    item.cartId !== cartId

            )

        );


    }









    function updateQuantity(cartId, cantidad){


        setCart(prev =>


            prev.map(item =>


                item.cartId === cartId

                ?

                {

                    ...item,

                    cantidad:
                        Math.max(
                            1,
                            cantidad
                        )

                }


                :

                item


            )


        );


    }









    function clearCart(){

        setCart([]);

    }









    return (

        <CartContext.Provider

            value={{

                cart,

                addToCart,

                removeFromCart,

                updateQuantity,

                clearCart

            }}

        >

            {children}

        </CartContext.Provider>

    );


}









export function useCart(){


    return useContext(
        CartContext
    );


}