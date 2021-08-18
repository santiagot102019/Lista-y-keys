import React from 'react';

export default function Lista() {
  const arr = ['uno', 'dos', 'tres', 'cuatro'];
  const title = <h1>Titulo pagina</h1>;
  const lista = arr.map((valor, index) => (
    <li key={index}>
      {index + 1} - {valor}
    </li>
  ));
  return (
    <div>
      {title}
      <ul>{lista}</ul>
    </div>
  );
}
