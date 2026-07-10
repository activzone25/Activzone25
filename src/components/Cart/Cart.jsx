import "./Cart.css";

import { FiX, FiTrash2 } from "react-icons/fi";

import { useCart } from "../context/CartContext.jsx";


function Cart({ open, setOpen }) {

  const { cart, removeFromCart } = useCart();


  const total = cart.reduce(
    (sum, item) =>
      sum + (item.precio * (item.cantidad || 1)),
    0
  );


  return (

    <aside className={`cart ${open ? "active" : ""}`}>


      <div className="cart-header">

        <h2>
          🛒 Carrito
        </h2>


        <button
          onClick={() => setOpen(false)}
        >
          <FiX />
        </button>

      </div>



      <div className="cart-items">


        {cart.length === 0 ? (

          <p>
            El carrito está vacío
          </p>


        ) : (

          cart.map((item)=>(

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.imagen}
                alt={item.nombre}
              />


              <div>

                <h3>
                  {item.nombre}
                </h3>


                <p className="cart-price">
                  {item.precio} €
                </p>


                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
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


        <h3>
          Total: {total} €
        </h3>


        <a
          className="checkout"
          href="#"
        >
          Finalizar pedido
        </a>


      </div>


    </aside>

  );

}


export default Cart;