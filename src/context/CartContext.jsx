import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext();



export function CartProvider({ children }) {


  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("activzone_cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });



  // Guardar carrito automáticamente

  useEffect(() => {

    localStorage.setItem(
      "activzone_cart",
      JSON.stringify(cart)
    );

  }, [cart]);





  const addToCart = (product) => {


    setCart(prevCart => {


      const productId =

        `${product.id}-${product.talla}-${product.nombrePersonalizado}-${product.numero}-${product.parche}`;



      const exists = prevCart.find(

        item => item.cartId === productId

      );



      if (exists) {


        return prevCart.map(item =>

          item.cartId === productId

          ?

          {
            ...item,
            cantidad: item.cantidad + 1
          }

          :

          item

        );


      }



      return [

        ...prevCart,

        {

          ...product,

          cartId: productId,

          cantidad:1

        }

      ];


    });


  };





  const removeFromCart = (cartId) => {


    setCart(prevCart =>

      prevCart.filter(

        item => item.cartId !== cartId

      )

    );


  };





  const updateQuantity = (cartId, cantidad) => {


    setCart(prevCart =>

      prevCart.map(item =>


        item.cartId === cartId

        ?

        {
          ...item,
          cantidad
        }

        :

        item


      )

    );


  };





  const clearCart = () => {

    setCart([]);

  };





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

  return useContext(CartContext);

}