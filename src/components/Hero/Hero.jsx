import { Link } from "react-router-dom";

import "./Hero.css";


function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay" />

            <div className="hero-glow hero-glow-left" />
            <div className="hero-glow hero-glow-right" />

            <div className="hero-content">
                <span className="hero-tag">
                    ⚽ TEMPORADA 2026/27
                </span>

                <h1 className="hero-title">
                    ACTIVZONE25
                </h1>

                <h2 className="hero-subtitle">
                    Camisetas de Fútbol
                    <br />
                    <span>Calidad Premium</span>
                </h2>

                <p className="hero-description">
                    Personaliza tu camiseta con nombre, dorsal y
                    parches oficiales.
                </p>

                <div className="hero-buttons">
                    <Link
                        to="/adulto"
                        className="btn-primary"
                    >
                        Comprar ahora
                    </Link>

                    <a
                        href="#productos"
                        className="btn-secondary"
                    >
                        Ver catálogo
                    </a>
                </div>

                <div className="hero-features">
                    <div className="feature-item">
                        <span
                            className="feature-icon"
                            aria-hidden="true"
                        >
                            🏆
                        </span>

                        <p>Parches GRATIS</p>
                    </div>

                    <div className="feature-item">
                        <span
                            className="feature-icon"
                            aria-hidden="true"
                        >
                            👕
                        </span>

                        <p>2 camisetas por 45 €</p>
                    </div>

                    <div className="feature-item">
                        <span
                            className="feature-icon"
                            aria-hidden="true"
                        >
                            ✍️
                        </span>

                        <p>Personalización +5 €</p>
                    </div>

                    <div className="feature-item">
                        <span
                            className="feature-icon"
                            aria-hidden="true"
                        >
                            🚚
                        </span>

                        <p>Envío rápido</p>
                    </div>
                </div>
            </div>

            <div
                className="scroll-indicator"
                aria-hidden="true"
            >
                <span />
            </div>
        </section>
    );
}


export default Hero;