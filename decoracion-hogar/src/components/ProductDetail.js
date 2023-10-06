import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function ProductDetail({ product }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity: parseInt(quantity) };
    addToCart(productToAdd);
  };

  return (
    <div className="product">
      <Link to={`/item/${product.codigo}`}>
        <span role="img" aria-label="Imagen">{product.imagen}</span>
        <h3>{product.nombre}</h3>
        <p>Precio: ${product.importe}</p>
        <p>Descripción: {product.descripcion}</p>
      </Link>
      <div>
        <label>Cantidad:</label>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductDetail;

