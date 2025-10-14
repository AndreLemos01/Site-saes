// src/App.js
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
import ThemeToggle from './components/ThemeToggle'; // NOVO: Import do ThemeToggle

import ArticlePage from './pages/ArticlePage';
import AdminPage from './pages/AdminPage';
import Escritorio from './pages/Escritorio';
import Resultados from './pages/Resultados'; // NOVO: Import para a página de busca

import './App.css';
import './index.css';

// Componentes Mock para rotas de navegação que não foram fornecidas (a ser substituído por conteúdo real)
const PublicacoesPage = () => <Layout><h2>Publicações</h2><p>Conteúdo em desenvolvimento.</p></Layout>;
const ArtigosPage = () => <Layout><h2>Artigos</h2><p>Conteúdo em desenvolvimento.</p></Layout>;
const NovidadesPage = () => <Layout><h2>Novidades Legislativas</h2><p>Conteúdo em desenvolvimento.</p></Layout>;
const InformativosPage = () => <Layout><h2>Informativos</h2><p>Conteúdo em desenvolvimento.</p></Layout>;
const NewsletterPage = () => <Layout><Newsletter /></Layout>; // Envolve o componente Newsletter na rota

function App({ toggleTheme, isDarkMode }) {
  return (
    <>
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> 

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

        {/* ROTAS ADICIONADAS PARA O FUNCIONAMENTO DA NAVBAR */}
        <Route 
          path="/search" 
          element={
            <Layout>
              <Resultados />
            </Layout>
          } 
        />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/publicacoes" element={<PublicacoesPage />} />
        <Route path="/artigos" element={<ArtigosPage />} />
        <Route path="/novidades-legislativas" element={<NovidadesPage />} />
        <Route path="/informativos" element={<InformativosPage />} />
      </Routes>
    </>
  );
}

export default App;