// src/components/Form.js

import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });

  // Atualiza o estado do formulário ao digitar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Trata submissão do formulário e chama o callback recebido
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} data-cy="form-principal">
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          data-cy="input-nome"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          data-cy="input-email"
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
          data-cy="input-senha"
        />
      </div>
      <button type="submit" data-cy="button-submit-form">Enviar</button>
    </form>
  );
}

export default Form;
