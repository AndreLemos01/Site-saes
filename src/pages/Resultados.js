// src/pages/Resultados.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Resultados() {
  const query = useQuery();
  const searchTerm = query.get('query'); // Obtém o termo de pesquisa da URL
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Simulando uma busca no conteúdo da página
    const pageContent = document.body.textContent; // Obtém todo o texto da página

    const regex = new RegExp(searchTerm, 'gi'); // Expressão regular para busca (case insensitive)
    const matches = [...pageContent.matchAll(regex)];

    setResults(matches);
  }, [searchTerm]);

  return (
    <div>
      <h2>Resultados da Pesquisa: "{searchTerm}"</h2>
      <ul>
        {results.length === 0 ? (
          <li>Nenhum resultado encontrado.</li>
        ) : (
          results.map((match, index) => (
            <li key={index}>
              Ocorrência {index + 1}: {match[0]}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Resultados;
