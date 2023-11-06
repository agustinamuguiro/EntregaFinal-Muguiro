import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from './CartContext';

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [isPurchaseComplete, setPurchaseComplete] = useState(false);
  const history = useHistory();

  const totalAmount = cartItems.reduce((total, item) => total + item.importe * item.cantidad, 0);

  const handlePurchaseComplete = () => {

    setPurchaseComplete(true);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (isPurchaseComplete) {
    return (
      <div className="checkout">
        <h2>¡Compra Completada!</h2>
        <Link to="/">Volver a la Tienda</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Resumen de Compra</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.codigo}>
            {item.nombre} x {item.cantidad} - ${item.importe * item.cantidad}
          </li>
        ))}
      </ul>
      <p>Total: ${totalAmount}</p>
      <button onClick={handleClearCart}>Vaciar Carrito</button>
      <Link to="/">Seguir comprando</Link>
      <button onClick={handlePurchaseComplete}>Finalizar Compra</button>
    </div>
  );
}

export default Checkout;
