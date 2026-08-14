import "./Categories.css";


const CATEGORIES = [
    {
        id: "Todas",
        name: "Todas",
        shortName: "Todo"
    },
    {
        id: "LaLiga",
        name: "LaLiga",
        shortName: "LaLiga"
    },
    {
        id: "Premier League",
        name: "Premier League",
        shortName: "Premier"
    },
    {
        id: "Bundesliga",
        name: "Bundesliga",
        shortName: "Bundesliga"
    },
    {
        id: "Ligue 1",
        name: "Ligue 1",
        shortName: "Ligue 1"
    }
];


function Categories({
    category,
    setCategory
}) {
    return (
        <section
            className="categories"
            aria-label="Filtrar camisetas por liga"
        >
            <div className="categories-container">
                {CATEGORIES.map((item) => {
                    const isActive = category === item.id;

                    return (
                        <button
                            type="button"
                            key={item.id}
                            className={
                                isActive
                                    ? "category-button active"
                                    : "category-button"
                            }
                            onClick={() => setCategory(item.id)}
                            aria-pressed={isActive}
                        >
                            <span className="category-name">
                                <span className="category-name-full">
                                    {item.name}
                                </span>

                                <span className="category-name-short">
                                    {item.shortName}
                                </span>
                            </span>

                            {isActive && (
                                <span
                                    className="category-indicator"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}


export default Categories;