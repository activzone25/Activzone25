import "./PriceFilter.css";

function PriceFilter({ maxPrice, setMaxPrice }) {

    return (
        <section className="price-filter">

            <div className="price-filter-header">

                <h3>
                    Precio máximo
                </h3>

                <strong>
                    {maxPrice} €
                </strong>

            </div>

            <input
                type="range"
                min="20"
                max="40"
                step="1"
                value={maxPrice}
                onChange={(e) =>
                    setMaxPrice(Number(e.target.value))
                }
            />

            <div className="price-range">

                <span>20 €</span>

                <span>40 €</span>

            </div>

        </section>
    );
}

export default PriceFilter;