import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className="product">
      <Link to={`/item/${product.codigo}`}> {}
        <span>{product.imagen}</span>
        <h3>{product.nombre}</h3>
        <p>Precio: ${product.importe}</p>
      </Link>
    </div>
  );
}

export default Product;
