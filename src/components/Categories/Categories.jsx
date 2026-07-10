import "./Categories.css";

const categories = [
  {
    nombre: "Todas",
    imagen: "/img/leagues/all.png"
  },
  {
    nombre: "LaLiga",
    imagen: "/img/leagues/laliga.png"
  },
  {
    nombre: "Premier League",
    imagen: "/img/leagues/premier-league.png"
  },
  {
    nombre: "Serie A",
    imagen: "/img/leagues/serie-a.png"
  },
  {
    nombre: "Bundesliga",
    imagen: "/img/leagues/bundesliga.png"
  },
  {
    nombre: "Ligue 1",
    imagen: "/img/leagues/ligue1.png"
  },
  {
    nombre: "Retro",
    imagen: "/img/leagues/retro.png"
  }
];

function Categories({ category, setCategory }) {
  return (
    <section className="categories">

      <div className="categories-header">
        <h2>Explora por competición</h2>
        <p>Elige tu liga favorita.</p>
      </div>

      <div className="categories-grid">

        {categories.map((item) => (
          <button
            key={item.nombre}
            className={`category-card ${
              category === item.nombre ? "active" : ""
            }`}
            onClick={() => setCategory(item.nombre)}
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              className="category-logo"
            />

            <span>{item.nombre}</span>
          </button>
        ))}

      </div>

    </section>
  );
}

export default Categories;