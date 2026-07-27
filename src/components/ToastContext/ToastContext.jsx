const { showToast } = useToast();

const añadirCarrito = () => {
  addToCart({
    ...product,
    imagen: product.front,
    precio: precioFinal,
    talla,
    nombrePersonalizado: nombre,
    numero,
    parche: parche ? parche.tipo : "Sin parche",
    imagenParche: parche ? parche.imagen : null
  });

  showToast({
    nombre: product.nombre,
    precio: precioFinal,
    imagen: product.front
  });
};