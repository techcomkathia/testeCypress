// src/components/ProductCard.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessModal from './SuccessModal';
import productImage from '../assets/produto.png'; 
import { useCart } from '../contexts/CartContext';

function ProductCard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  // Abre modal de sucesso, adiciona produto ao contexto e depois navega para o carrinho
  const { adicionarAoCarrinho } = useCart();

  const handleAddToCart = () => {
    // Cria objeto produto consistente para o contexto
    const produto = {
      id: 'produto-1',
      name: 'Produto',
      price: 299.99,
      image: productImage,
      quantity: 1,
    };

    adicionarAoCarrinho(produto);
    setIsModalVisible(true);
    setTimeout(() => {
      navigate('/cart');
    }, 1000); // tempo menor antes da navegação
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="product-card" data-cy="product-card">
      <img src={productImage} alt="Produto" className="product-image" data-cy="product-image" />
      <h2 data-cy="product-title">Produto</h2>
      <p className="price" data-cy="product-price">R$ 299,99</p>
      <p className="discount-price" data-cy="product-discount">R$ 209,99 à vista</p>
      <button onClick={handleAddToCart} data-cy="button-add-cart">Adicionar ao Carrinho</button>
      <SuccessModal show={isModalVisible} handleClose={closeModal} />
    </div>
  );
}

export default ProductCard;
