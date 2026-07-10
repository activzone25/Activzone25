import "./Cart.css";

import { FiX, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

import { useCart } from "../../context/CartContext";


function Cart({ open, setOpen }) {

  const {
    cart,
    removeFromCart,
    updateQuantity
  } = useCart();


  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.precio * item.cantidad,
    0
  );


  const descuento = cart.length >= 2
    ? subtotal * 0.10
    : 0;


  const total = subtotal - descuento;



  const enviarWhatsApp = () => {

    let mensaje =
      "🛒 Pedido Activzone25%0A%0A";


    cart.forEach(item => {

      mensaje +=
        `👕 ${item.nombre} x${item.cantidad} - ${item.precio}€%0A`;

    });


    mensaje +=
      `%0A💰 Total: ${total.toFixed(2)}€`;


    window.open(
      `https://wa.me/34647602998?text=${mensaje}`,
      "_blank"
    );

  };



  return (

    <aside className={`cart ${open ? "active" : ""}`}>


      <div className="cart-header">

        <h2>
          🛒 Tu carrito
        </h2>


        <button onClick={() => setOpen(false)}>
          <FiX />
        </button>

      </div>



      <div className="cart-items">


        {cart.length === 0 ? (

          <p>
            El carrito está vacío
          </p>


        ) : (


          cart.map(item => (

            <div
              className="cart-item"
              key={item.id}
            >


              <img
                src={item.imagen}
                alt={item.nombre}
              />


              <div className="cart-info">


                <h3>
                  {item.nombre}
                </h3>


                <p>
                  {item.precio} €
                </p>


                <div className="quantity">


                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        Math.max(1,item.cantidad-1)
                      )
                    }
                  >
                    <FiMinus />
                  </button>


                  <span>
                    {item.cantidad}
                  </span>


                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.cantidad+1
                      )
                    }
                  >
                    <FiPlus />
                  </button>


                </div>



                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
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



      <div className="cart-footer">


        <p>
          Subtotal: {subtotal.toFixed(2)} €
        </p>


        {descuento > 0 && (

          <p className="discount">
            🎉 Descuento 10%: -{descuento.toFixed(2)} €
          </p>

        )}



        <h3>
          Total: {total.toFixed(2)} €
        </h3>



        <button
          className="checkout"
          onClick={enviarWhatsApp}
        >
          Pedir por WhatsApp
        </button>


      </div>


    </aside>

  );

}


export default Cart;