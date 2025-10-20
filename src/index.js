// src/index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyle } from './styles/GlobalStyle';

function Root() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // NOVO: Estado de autenticação

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  // NOVO: Função para login/logout
  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <App 
          toggleTheme={toggleTheme} 
          isDarkMode={isDarkMode} 
          isAuthenticated={isAuthenticated} // Passa o estado
          setIsAuthenticated={handleLogin} // Passa a função de login
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);