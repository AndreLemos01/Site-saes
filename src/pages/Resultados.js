// src/pages/Resultados.js
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px 20px 20px;
  min-height: 80vh;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const Resultados = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  return (
    <Container>
      <h1>Resultados da Busca</h1>
      {query ? (
        <>
          <p>Exibindo resultados para: <strong>{query}</strong></p>
          <p>A lógica de pesquisa real deve ser implementada aqui, buscando dados de notícias, artigos, etc.</p>
          <p>Nenhum resultado de conteúdo real encontrado. (Exemplo)</p>
        </>
      ) : (
        <p>Por favor, digite um termo de busca na barra de navegação.</p>
      )}
    </Container>
  );
};

export default Resultados;