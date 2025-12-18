// src/pages/Cart.jsx

import React from 'react';
import { useCart } from '../contexts/CartContext';

/*
  Formata número como moeda BRL
*/
function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

/*
  Componente de exibição do carrinho.
  Usa o contexto `useCart` que provê `cart`, `removerDoCarrinho` e `limparCarrinho`.
*/
function Carrinho() {
  const { cart, removerDoCarrinho, limparCarrinho } = useCart();

  const total = cart.reduce((soma, item) => soma + (item.quantity || item.quantidade || 1) * (item.price || item.preco || 0), 0);

  return (
    <div>
      <h1 data-cy="titulo-carrinho">Carrinho</h1>

      {cart.length === 0 ? (
        <p data-cy="mensagem-carrinho-vazio">Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul data-cy="lista-carrinho" style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item, idx) => {
              const qtd = item.quantity || item.quantidade || 1;
              const preco = item.price || item.preco || 0;
              const subtotal = preco * qtd;
              return (
                <li key={item.id || idx} data-cy={`item-carrinho-${idx}`} style={{ marginBottom: 12, borderBottom: '1px solid #eee', paddingBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div data-cy={`item-nome-${idx}`} style={{ fontWeight: 600 }}>{item.name || item.title || item.nome || 'Produto'}</div>
                      <div data-cy={`item-quantidade-${idx}`}>Quantidade: {qtd}</div>
                      <div data-cy={`item-preco-${idx}`}>Preço unit.: {formatarMoeda(preco)}</div>
                      <div data-cy={`item-subtotal-${idx}`}>Subtotal: {formatarMoeda(subtotal)}</div>
                    </div>
                    <div>
                      <button data-cy={`button-remover-${idx}`} onClick={() => removerDoCarrinho(item.id ?? idx)}>Remover</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div style={{ marginTop: 16 }}>
            <div data-cy="total-carrinho" style={{ fontWeight: 700 }}>Total: {formatarMoeda(total)}</div>
            <button data-cy="button-limpar-carrinho" onClick={limparCarrinho} style={{ marginTop: 8 }}>Limpar Carrinho</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
