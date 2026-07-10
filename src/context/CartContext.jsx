import { createContext, useContext, useState } from "react";

const CartContext = createContext();


export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);


  const addToCart = (product) => {

    setCart((prevCart) => {

      const exists = prevCart.find(
        item => item.id === product.id
      );


      if (exists) {

        return prevCart.map(item =>
          item.id === product.id
            ? {
                ...item,
                cantidad: item.cantidad + 1
              }
            : item
        );

      }


      return [
        ...prevCart,
        {
          ...product,
          cantidad: 1
        }
      ];

    });

  };


  const removeFromCart = (id) => {

    setCart(prevCart =>
      prevCart.filter(
        item => item.id !== id
      )
    );

  };


  const clearCart = () => {

    setCart([]);

  };


  const updateQuantity = (id, cantidad) => {

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? {
              ...item,
              cantidad
            }
          : item
      )
    );

  };


  return (

    <CartContext.Provider

      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity
      }}

    >

      {children}

    </CartContext.Provider>

  );

}



export function useCart() {

  return useContext(CartContext);

}