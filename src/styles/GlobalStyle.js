// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
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
`;
