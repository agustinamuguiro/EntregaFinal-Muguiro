import React from 'react';

function CartWidget({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-notification">{totalItems}</span>
    </div>
  );
}

export default CartWidget;