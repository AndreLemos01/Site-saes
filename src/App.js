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

// Páginas dos membros da equipe
import Marcos from './equipe/Marcos';
import Gleyse from './equipe/Gleyse';
import Manuela from './equipe/Manuela';
import Isabella from './equipe/Isabella';
import Caio from './equipe/Caio';
import Camilla from './equipe/Camilla';
import Eduardo from './equipe/Eduardo';
import Nicole from './equipe/Nicole';
import Luiza from './equipe/Luiza';
import Maria from './equipe/Maria';
import Polliana from './equipe/Polliana';
import Ana from './equipe/Ana';

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
        {/* Página inicial com layout e seções */}
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

        {/* Página de artigo */}
        <Route
          path="/article/:id"
          element={
            <Layout>
              <ArticlePage />
            </Layout>
          }
        />

        {/* Página do escritório */}
        <Route
          path="/escritorio"
          element={
            <Layout>
              <Escritorio />
            </Layout>
          }
        />

        {/* Páginas de perfil individual */}
        <Route path="/marcos" element={<Layout><Marcos /></Layout>} />
        <Route path="/gleyse" element={<Layout><Gleyse /></Layout>} />
        <Route path="/manuela" element={<Layout><Manuela /></Layout>} />
        <Route path="/isabella" element={<Layout><Isabella /></Layout>} />
        <Route path="/caio" element={<Layout><Caio /></Layout>} />
        <Route path="/camilla" element={<Layout><Camilla /></Layout>} />
        <Route path="/eduardo" element={<Layout><Eduardo /></Layout>} />
        <Route path="/nicole" element={<Layout><Nicole /></Layout>} />
        <Route path="/luiza" element={<Layout><Luiza /></Layout>} />
        <Route path="/maria" element={<Layout><Maria /></Layout>} />
        <Route path="/polliana" element={<Layout><Polliana /></Layout>} />
        <Route path="/ana" element={<Layout><Ana /></Layout>} />

        {/* Página administrativa */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5548996356392?text=Oi%20gostaria%20de%20tirar%20algumas%20dúvidas."
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsappLink}
        aria-label="Iniciar conversa no WhatsApp"
      >
        <button style={styles.whatsappButton}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="Ícone do WhatsApp"
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
