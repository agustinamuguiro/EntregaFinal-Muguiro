import React from 'react';
import { useCart } from './CartContext';

function CartWidget() {
  const { state } = useCart(); 
  const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-notification">{totalItems}</span>
    </div>
  );
}

export default CartWidget;