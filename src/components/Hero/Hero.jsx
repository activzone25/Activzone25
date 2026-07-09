import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          ⚽ Temporada 2026/27
        </span>

        <h1>
          Las mejores camisetas
          <br />
          de fútbol
        </h1>

        <p>
          Equipaciones oficiales, retro y personalizadas.
          Parches GRATIS y pedido directo por WhatsApp.
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

      <div className="hero-image">

        <img
          src="/assets/images/hero-shirt.png"
          alt="Camiseta destacada"
        />

      </div>

    </section>
  );
}

export default Hero;