import "./Toast.css";

function Toast({ open, product }) {
  return (
    <div className={`toast ${open ? "show" : ""}`}>

      <div className="toast-icon">
        ✅
      </div>

      <div className="toast-content">

        <h4>Producto añadido</h4>

        {product && (
          <>
            <p>{product.nombre}</p>

            <small>
              {product.precio} €
            </small>
          </>
        )}

      </div>

    </div>
  );
}

export default Toast;