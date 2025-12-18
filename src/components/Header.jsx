// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/" data-cy="link-pagina1">Página 1</Link>
        <Link to="/page2" data-cy="link-pagina2">Página 2</Link>
        <Link to="/page3" data-cy="link-pagina3">Página 3</Link>
        <Link to="/cart" data-cy="link-carrinho">Carrinho</Link>
      </nav>
    </header>
  );
}

export default Header;
