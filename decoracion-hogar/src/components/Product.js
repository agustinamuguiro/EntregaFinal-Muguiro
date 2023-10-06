import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <Link to={`/item/${product.codigo}`}>
        <span role="img" aria-label="Imagen">{product.imagen}</span>
        <h3>{product.nombre}</h3>
        <p>Precio: ${product.importe}</p>
      </Link>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
}

export default Product;

