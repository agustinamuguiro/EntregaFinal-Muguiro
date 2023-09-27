import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.codigo === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.nombre}</h2>
      <p>Imagen: {product.imagen}</p>
      <p>Precio: ${product.importe}</p>
    </div>
  );
}

export default ProductDetail;