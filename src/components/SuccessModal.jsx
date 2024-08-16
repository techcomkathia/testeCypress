// src/components/SuccessModal.js

import React from 'react';

function SuccessModal({ show, handleClose }) {
  if (!show) return null;

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>&times;</span>
        <p>Conteúdo enviado</p>
      </div>
    </div>
  );
}

export default SuccessModal;
