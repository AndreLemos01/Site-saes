import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Noticias from './components/Noticias';
import QuemSomos from './components/QuemSomos';
import Atuacao from './components/Atuacao';
import Equipe from './components/Equipe';
import Newsletter from './components/Newsletter';
import Frase from './components/Frase';
import Selos from './components/Selos';

import ArticlePage from './pages/ArticlePage';
import AdminPage from './pages/AdminPage';
import Escritorio from './pages/Escritorio';

import './App.css';
import './index.css';

function App({ toggleTheme, isDarkMode }) {
  return (
    <>
      {/* Botão para alternar entre temas */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'transparent',
          border: '2px solid orange',
          borderRadius: '8px',
          padding: '0.5rem 1rem',
          color: 'orange',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>

      <Routes>
        {/* Página inicial com Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <section id="noticias"><Noticias /></section>
              <section id="quem-somos"><QuemSomos /></section>
              <section id="atuacao"><Atuacao /></section>
              <section id="equipe"><Equipe /></section>
              <section id="newsletter"><Newsletter /></section>
              <section id="informativos"><Frase /></section>
              <Selos />
            </Layout>
          }
        />

        {/* Demais rotas também com Layout */}
        <Route
          path="/article/:id"
          element={
            <Layout>
              <ArticlePage />
            </Layout>
          }
        />

        <Route
          path="/escritorio"
          element={
            <Layout>
              <Escritorio />
            </Layout>
          }
        />

        {/* Admin sem layout compartilhado (opcional) */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      {/* Botão WhatsApp flutuante */}
      <a
        href="https://wa.me/5548996356392?text=Oi%20gostaria%20de%20tirar%20algumas%20dúvidas."
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsappLink}
      >
        <button style={styles.whatsappButton}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            style={styles.whatsappIcon}
          />
        </button>
      </a>
    </>
  );
}

const styles = {
  whatsappLink: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '15px',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  whatsappIcon: {
    width: '40px',
    height: '40px',
  },
};

export default App;

