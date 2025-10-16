// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    /* Usando uma pilha de fontes mais robusta e consistente (retirada de index.css) */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s ease-in-out;
  }

  button {
    font-family: inherit;
  }

  a {
    color: ${({ theme }) => theme.primary};
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