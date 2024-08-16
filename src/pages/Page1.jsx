// src/pages/Page1.js

import React, { useState } from 'react';

function Page1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Página 1</h1>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Adicionar Contagem</button>
    </div>
  );
}

export default Page1;
