// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Página 1</Link>
        <Link to="/page2">Página 2</Link>
        <Link to="/page3">Página 3</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
    </header>
  );
}

export default Header;
