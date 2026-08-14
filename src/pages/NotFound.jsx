import { Link } from "react-router-dom";

import "./NotFound.css";


function NotFound() {
    return (
        <main className="not-found-page">
            <section className="not-found-content">
                <span className="not-found-code">404</span>

                <h1>Página no encontrada</h1>

                <p>
                    Parece que esta página no existe o ha cambiado
                    de dirección.
                </p>

                <Link
                    to="/"
                    className="not-found-link"
                >
                    Volver al catálogo
                </Link>
            </section>
        </main>
    );
}


export default NotFound;