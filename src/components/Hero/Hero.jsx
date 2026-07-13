import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-glow hero-glow-left"></div>
      <div className="hero-glow hero-glow-right"></div>

      <div className="hero-content">

        <span className="hero-tag">
          ⚽ NUEVA COLECCIÓN 2026/27
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
          Máxima calidad · Personalización +5 € · Parches GRATIS
        </p>

        <div className="hero-buttons">

          <Link
            to="/adulto"
            className="btn-primary"
          >
            Comprar ahora
          </Link>

          <Link
            to="/adulto"
            className="btn-secondary"
          >
            Ver catálogo
          </Link>

        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}

export default Hero;