import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Importa useHistory para redirigir al usuario
import { CartContext } from './CartContext';

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const [isPurchaseComplete, setPurchaseComplete] = useState(false); 
  const history = useHistory(); 

  const totalAmount = cartItems.reduce((total, item) => total + item.importe * item.quantity, 0);


  const handlePurchaseComplete = () => {
   
    setPurchaseComplete(true);
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
            {item.nombre} x {item.quantity} - ${item.importe * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${totalAmount}</p>
      <Link to="/">Seguir comprando</Link>
      <button onClick={handlePurchaseComplete}>Finalizar Compra</button>
    </div>
  );
}

export default Checkout;
