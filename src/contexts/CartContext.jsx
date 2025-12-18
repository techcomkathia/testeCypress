// src/contexts/CartContext.jsx

import React, { createContext, useState, useContext } from 'react';

// Criação do contexto do carrinho
const CartContext = createContext();

// Provedor do contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  /*
    Adiciona um produto ao carrinho.
    Se o produto já existir (mesmo id), incrementa a quantidade.
    Mantemos também a função em inglês `addToCart` para compatibilidade.
  */
  const adicionarAoCarrinho = (produto) => {
    setCart((prevCart) => {
      if (!produto || !produto.id) return [...prevCart, { ...produto }];
      const existe = prevCart.find((p) => p.id === produto.id);
      if (existe) {
        return prevCart.map((p) =>
          p.id === produto.id ? { ...p, quantity: (p.quantity || 1) + (produto.quantity || 1) } : p
        );
      }
      return [...prevCart, { ...produto, quantity: produto.quantity || 1 }];
    });
  };

  // Mesma funcionalidade em inglês (compatibilidade)
  const addToCart = adicionarAoCarrinho;

  /*
    Remove um item do carrinho por id do produto.
    Se o produto não tiver id, remove pelo índice passado no segundo parâmetro.
  */
  const removerDoCarrinho = (idOrIndex) => {
    setCart((prevCart) => {
      if (!prevCart || prevCart.length === 0) return prevCart;
      // Se for número, assume índice
      if (typeof idOrIndex === 'number') {
        return prevCart.filter((_, idx) => idx !== idOrIndex);
      }
      // Caso contrário, remove pelo id
      return prevCart.filter((p) => p.id !== idOrIndex);
    });
  };

  /*
    Limpa todo o carrinho.
  */
  const limparCarrinho = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, adicionarAoCarrinho, addToCart, removerDoCarrinho, limparCarrinho }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useCart() {
  return useContext(CartContext);
}
