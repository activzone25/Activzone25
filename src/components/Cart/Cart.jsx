import "./Cart.css";

import {
  FiX,
  FiTrash2,
  FiPlus,
  FiMinus
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";


function Cart({ open, setOpen }) {


  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart

  } = useCart();



  const subtotal = cart.reduce(

    (sum,item)=>

      sum +
      item.precio *
      (item.cantidad || 1),

    0

  );



  const totalProductos = cart.reduce(

    (sum,item)=>

      sum +
      (item.cantidad || 1),

    0

  );



  const descuento =

    totalProductos >= 2

      ? subtotal * 0.10

      : 0;



  const total = subtotal - descuento;



  function enviarWhatsApp(){


    let mensaje =
`🛒 *PEDIDO ACTIVZONE25*

`;



    cart.forEach((item)=>{


      mensaje +=

`👕 ${item.nombre}

📏 Talla: ${item.talla || "-"}

🏆 Parche: ${item.parche || "Sin parche"}

✍️ Nombre: ${item.nombrePersonalizado || "-"}

🔢 Número: ${item.numero || "-"}

Cantidad: ${item.cantidad || 1}

----------------------

`;


    });



    mensaje +=

`💰 TOTAL: ${total.toFixed(2)} €`;



    window.open(

      `https://wa.me/34647602998?text=${encodeURIComponent(mensaje)}`,

      "_blank"

    );


  }



  return (


    <aside className={`cart ${open ? "active" : ""}`}>


      <div className="cart-header">


        <h2>
          🛒 Tu carrito
        </h2>



        <button
          onClick={()=>setOpen(false)}
        >

          <FiX />

        </button>


      </div>




      <div className="cart-items">



      {
        cart.length === 0 ? (


          <p className="empty-cart">

            El carrito está vacío

          </p>


        )


        :


        cart.map((item)=>(


          <div
            className="cart-item"
            key={item.cartId || item.id}
          >


            <img

              src={item.imagen || item.front}

              alt={item.nombre}

            />



            <div className="cart-info">



              <h3>

                {item.nombre}

              </h3>



              <p>

                {item.precio} €

              </p>



              <small>

                📏 {item.talla}

              </small>



              <small>

                🏆 {item.parche || "Sin parche"}

              </small>



              {
                item.imagenParche && (

                  <img

                    src={item.imagenParche}

                    className="patch-cart"

                    alt="parche"

                  />

                )
              }




              {
                item.nombrePersonalizado && (

                  <small>

                    ✍️ {item.nombrePersonalizado}

                    {" "}

                    #{item.numero}

                  </small>

                )
              }




              <div className="quantity">


                <button

                  onClick={()=>


                    updateQuantity(

                      item.cartId,

                      Math.max(

                        1,

                        (item.cantidad || 1)-1

                      )

                    )

                  }

                >

                  <FiMinus />

                </button>



                <span>

                  {item.cantidad || 1}

                </span>



                <button

                  onClick={()=>


                    updateQuantity(

                      item.cartId,

                      (item.cantidad || 1)+1

                    )

                  }

                >

                  <FiPlus />

                </button>


              </div>




              <button

                className="remove-btn"

                onClick={()=>removeFromCart(item.cartId)}

              >

                <FiTrash2 />

                Eliminar

              </button>



            </div>


          </div>


        ))
      }



      </div>





      <div className="cart-footer">



        <p>

          Subtotal:

          <strong>

            {" "}

            {subtotal.toFixed(2)} €

          </strong>

        </p>



        {
          descuento > 0 && (

            <p className="discount">

              🎉 Descuento 10%:

              -

              {descuento.toFixed(2)} €

            </p>

          )
        }




        <h3>

          Total:

          {" "}

          {total.toFixed(2)} €

        </h3>



        <button

          className="checkout"

          onClick={enviarWhatsApp}

        >

          Pedir por WhatsApp

        </button>



        {
          cart.length > 0 && (

            <button

              className="clear-cart"

              onClick={clearCart}

            >

              Vaciar carrito

            </button>

          )
        }



      </div>



    </aside>


  );

}


export default Cart;