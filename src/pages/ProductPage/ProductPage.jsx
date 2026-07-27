import { useParams } from "react-router-dom";

import ProductDetail from "../../components/ProductDetail/ProductDetail";

import products from "../../data/products";


function ProductPage() {

  const { slug } = useParams();


  const product = products.find(
    item => item.slug === slug
  );


  if (!product) {

    return (
      <h2>
        Producto no encontrado
      </h2>
    );

  }


  return (

    <ProductDetail
      product={product}
    />

  );

}


export default ProductPage;