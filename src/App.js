// src/App.js (COMPLETO E ATUALIZADO)
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
import ThemeToggle from './components/ThemeToggle'; 

import ArticlePage from './pages/ArticlePage';
import AdminPage from './pages/AdminPage';
import Escritorio from './pages/Escritorio';
import Resultados from './pages/Resultados'; 
import NovidadesLegislativas from './pages/NovidadesLegislativas'; 
import ArtigosPage from './pages/ArtigosPage'; 
import PublicacoesPage from './pages/PublicacoesPage'; 
import NewslettersPage from './pages/NewslettersPage'; 
import InformativosPage from './pages/InformativosPage'; 

// Importa os componentes de serviço
import LicenciamentoAmbiental from './pages/LicenciamentoAmbiental'; 
import DueDiligenceAmbiental from './pages/DueDiligenceAmbiental';
import ComplianceAmbiental from './pages/ComplianceAmbiental';
import PareceresEOpinioesLegais from './pages/PareceresEOpinioesLegais';
import ConflitosAmbientais from './pages/ConflitosAmbientais';      
import OutrosServicos from './pages/OutrosServicos';             
import Contato from './pages/Contato';

// NOVO: Importa a página de artigos específicos do Marcos
import MarcosArticlesPage from './pages/MarcosArticlesPage'; 


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
        <Route path="/admin" element={<AdminPage />} />

        {/* ROTAS DE SERVIÇOS */}
        <Route 
          path="/servicos/licenciamento-ambiental-urbanistico" 
          element={
            <Layout>
              <LicenciamentoAmbiental />
            </Layout>
          } 
        />
        <Route 
          path="/servicos/due-diligence-ambiental-e-analise-de-risco" 
          element={
            <Layout>
              <DueDiligenceAmbiental />
            </Layout>
          } 
        />
        <Route 
          path="/servicos/compliance-ambiental" 
          element={
            <Layout>
              <ComplianceAmbiental /> 
            </Layout>
          } 
        />
        <Route 
          path="/servicos/pareceres-e-opinioes-legais" 
          element={
            <Layout>
              <PareceresEOpinioesLegais /> 
            </Layout>
          } 
        />
        <Route 
          path="/servicos/conflitos-ambientais" 
          element={
            <Layout>
              <ConflitosAmbientais />
            </Layout>
          } 
        />
        <Route path="/servicos/consultoria-estrategica" element={<Layout><h2>Consultoria Estratégica</h2></Layout>} />
        <Route 
          path="/servicos/outros-servicos" 
          element={
            <Layout>
              <OutrosServicos />
            </Layout>
          } 
        />

        {/* OUTRAS ROTAS */}
        <Route 
          path="/search" 
          element={
            <Layout>
              <Resultados />
            </Layout>
          } 
        />
        <Route 
          path="/newsletter" 
          element={
            <Layout>
              <NewslettersPage />
            </Layout>
          } 
        />
        <Route 
          path="/publicacoes" 
          element={
            <Layout>
              <PublicacoesPage />
            </Layout>
          } 
        />
        <Route 
          path="/artigos" 
          element={
            <Layout>
              <ArtigosPage />
            </Layout>
          } 
        />
        <Route 
          path="/novidades-legislativas" 
          element={
            <Layout>
              <NovidadesLegislativas />
            </Layout>
          } 
        />
        <Route 
          path="/informativos" 
          element={
            <Layout>
              <InformativosPage />
            </Layout>
          } 
        />
        
        {/* Rota Específica de Artigos do Marcos (ADICIONADA) */}
        <Route 
          path="/equipe/marcos/artigos" 
          element={
            <Layout>
              <MarcosArticlesPage />
            </Layout>
          } 
        />

        {/* Rota do Escritório e Contato */}
        <Route
          path="/escritorio"
          element={
            <Layout>
              <Escritorio />
            </Layout>
          }
        />
        <Route
          path="/contato"
          element={
            <Layout>
              <Contato />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;