import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout'; // Certifique-se de que a importação está correta
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
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
