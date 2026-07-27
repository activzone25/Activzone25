import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Fondo */}
      <div className="hero-overlay"></div>
      <div className="hero-glow hero-glow-left"></div>
      <div className="hero-glow hero-glow-right"></div>

      {/* Contenido */}
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
          Calidad Premium
        </h2>

        <p className="hero-description">
          Personaliza tu camiseta con nombre, dorsal y parches oficiales.
        </p>

        <div className="hero-buttons">

          <Link
            to="/adulto"
            className="btn-primary"
          >
            Comprar ahora
          </Link>

          <Link
            to="/"
            className="btn-secondary"
          >
            Ver catálogo
          </Link>

        </div>

        {/* Características */}

        <div className="hero-features">

          <div>
            🏆
            <span>Parches GRATIS</span>
          </div>

          <div>
            👕
            <span>2 camisetas por 46 €</span>
          </div>

          <div>
            ✍️
            <span>Personalización +5 €</span>
          </div>

          <div>
            🚚
            <span>Envío rápido</span>
          </div>

        </div>

      </div>

      {/* Flecha */}

      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}

export default Hero;