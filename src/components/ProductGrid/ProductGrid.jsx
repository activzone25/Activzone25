import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid() {

    return (

        <section>

            {products.map(product=>(
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}

        </section>

    );

}

export default ProductGrid;