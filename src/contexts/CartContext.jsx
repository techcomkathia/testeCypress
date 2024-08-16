// src/contexts/CartContext.js

import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const CartContext = createContext();

// Provedor do contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useCart() {
  return useContext(CartContext);
}
