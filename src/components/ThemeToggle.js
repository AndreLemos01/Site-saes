// src/components/ThemeToggle.js
import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  // Usando a cor primária do tema para borda e texto
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  z-index: 1000;
  transition: all 0.25s ease-in-out;
  font-weight: bold;

  &:hover {
    // Fundo levemente colorido no hover para feedback visual
    background-color: ${({ theme }) => theme.primary}1A; 
  }
`;

function ThemeToggle({ toggleTheme, isDarkMode }) {
  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
    >
      {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </ToggleButton>
  );
}

export default ThemeToggle;