import "./Categories.css";

const categories = [
  {
    id: "Todas",
    icon: "🌍",
    name: "Todas"
  },
  {
    id: "LaLiga",
    icon: "🇪🇸",
    name: "LaLiga"
  },
  {
    id: "Premier League",
    icon: "🏴",
    name: "Premier"
  },
  {
    id: "Bundesliga",
    icon: "🇩🇪",
    name: "Bundesliga"
  },
  {
    id: "Ligue 1",
    icon: "🇫🇷",
    name: "Ligue 1"
  }
];

function Categories({ category, setCategory }) {
  return (
    <section className="categories">

      <div className="categories-container">

        {categories.map((item) => (

          <button
            key={item.id}
            className={category === item.id ? "active" : ""}
            onClick={() => setCategory(item.id)}
          >

            <span className="category-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </button>

        ))}

      </div>

    </section>
  );
}

export default Categories;