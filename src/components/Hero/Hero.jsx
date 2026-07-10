import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">

        <span className="hero-badge">
          ⚽ Equipaciones Oficiales 2026/27
        </span>

        <h1>
          Tu pasión.
          <br />
          Tu camiseta.
        </h1>

        <p>
          Camisetas de clubes y selecciones con personalización,
          parches y la mejor calidad.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Comprar ahora
          </button>

          <button className="btn-secondary">
            Ver catálogo
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;