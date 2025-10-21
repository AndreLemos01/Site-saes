// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Adicionando um reset leve para garantir consistência */
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    /* Usando uma pilha de fontes mais robusta e consistente (retirada de index.css) */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    /* Otimizando a transição para apenas cores de fundo e texto */
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
    font-size: 16px; /* Base rem */
    line-height: 1.6;
  }

  /* Hierarquia Tipográfica (Usando REM) */
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 0.67em;
    margin-bottom: 0.5em;
    color: ${({ theme }) => theme.primary}; /* Dando destaque ao H1 com a cor primária */
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }


  button {
    font-family: inherit;
    /* Adicionando transição em botões para hover/tema */
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out, border-color 0.25s ease-in-out;
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    /* Adicionando transição em links para hover/tema */
    transition: color 0.25s ease-in-out, opacity 0.25s ease-in-out;
    
    &:hover {
      opacity: 0.8; /* Efeito de hover sutil */
    }
  }

  /* Estilização para containers que usam a cor do card */
  .card-container {
      background-color: ${({ theme }) => theme.card};
      border: 1px solid ${({ theme }) => theme.border};
      border-radius: 8px; /* Borda arredondada para estética */
      padding: 20px;
      transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out;
  }

  /* Movido de App.css para usar as variáveis do tema e garantir a consistência */
  .App-header {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
`;