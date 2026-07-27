import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const CartContext = createContext();



export function CartProvider({ children }) {


  const [cart, setCart] = useState(() => {


    const savedCart =
      localStorage.getItem("activzone_cart");


    return savedCart
      ? JSON.parse(savedCart)
      : [];


  });





  useEffect(()=>{


    localStorage.setItem(
      "activzone_cart",
      JSON.stringify(cart)
    );


  },[cart]);







  function addToCart(product){



    setCart(prevCart=>{


      const parcheTipo =
        product.parche?.tipo || "sin-parche";



      const cartId =

      `${product.id}-
      ${product.talla}-
      ${product.nombrePersonalizado}-
      ${product.numero}-
      ${parcheTipo}`;





      const existe = prevCart.find(

        item =>
        item.cartId === cartId

      );





      if(existe){


        return prevCart.map(item=>


          item.cartId === cartId

          ?

          {

            ...item,

            cantidad:item.cantidad + 1

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


    setCart(prev=>

      prev.filter(

        item =>
        item.cartId !== cartId

      )

    );


  }








  function updateQuantity(cartId,cantidad){


    setCart(prev=>


      prev.map(item=>


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


return useContext(CartContext);


}