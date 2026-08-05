import "./PriceFilter.css";

function PriceFilter({ maxPrice, setMaxPrice }) {

    return (

        <section className="price-filter">

            <h3>Precio máximo</h3>

            <input
                type="range"
                min="20"
                max="40"
                step="1"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
            />

            <span>{maxPrice} €</span>

        </section>

    );

}

export default PriceFilter;