import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { collection, addDoc, query, where } from 'firebase/firestore';
import { db } from './firebase';

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.cart.findIndex(item => item.codigo === action.payload.codigo);

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].cantidad += action.payload.cantidad;
        return { ...state, cart: [...state.cart] };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload }] };
      }
    case 'CLEAR_CART':
      return { ...state, cart: [] }; 
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);



  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return <CartContext.Provider value={{ state, dispatch, clearCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw an Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;


