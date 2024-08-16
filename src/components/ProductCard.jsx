// src/components/ProductCard.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessModal from './SuccessModal';
import productImage from '../assets/produto.png'; 

function ProductCard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      navigate('/cart');
    }, 2000); // Tempo para exibir o modal antes da navegação
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="product-card">
      <img src={productImage} alt="Produto" className="product-image" />
      <h2>Produto</h2>
      <p className="price">R$ 299,99</p>
      <p className="discount-price">R$ 209,99 à vista</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
      <SuccessModal show={isModalVisible} handleClose={closeModal} />
    </div>
  );
}

export default ProductCard;
