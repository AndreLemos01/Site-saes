import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
// CORRIGIDO: Importação nomeada de GlobalStyle, pois a exportação não era default.
import { GlobalStyle } from './styles/GlobalStyle'; 

// Componentes Principais
import Layout from './components/Layout';
import WhatsAppButton from './components/WhatsAppButton';

// Páginas Principais e de Publicações
// import Home from './pages/Home'; // COMENTADO: Módulo não encontrado (Crie src/pages/Home.js e descomente)
import Escritorio from './pages/Escritorio';
import Contato from './pages/Contato';
import Resultados from './pages/Resultados';
import ArtigosPage from './pages/ArtigosPage';
import ArticlePage from './pages/ArticlePage';
import PublicacoesPage from './pages/PublicacoesPage';
import InformativosPage from './pages/InformativosPage';
import NewslettersPage from './pages/NewslettersPage';
import NovidadesLegislativas from './pages/NovidadesLegislativas';

// Páginas de Serviços
import LicenciamentoAmbiental from './pages/LicenciamentoAmbiental';
import ConflitosAmbientais from './pages/ConflitosAmbientais';
import ComplianceAmbiental from './pages/ComplianceAmbiental';
import DueDiligenceAmbiental from './pages/DueDiligenceAmbiental';
import PareceresEOpinioesLegais from './pages/PareceresEOpinioesLegais';
import OutrosServicos from './pages/OutrosServicos';

// Detalhes da Equipe (Exemplos - você deve ter um import para cada membro)
import Marcos from './equipe/Marcos';
import Ana from './equipe/Ana';
import Caio from './equipe/Caio';
import Camilla from './equipe/Camilla';
import Eduardo from './equipe/Eduardo';
import Gleyse from './equipe/Gleyse';
import Isabella from './equipe/Isabella';
import Luiza from './equipe/Luiza';
import Manuela from './equipe/Manuela';
import Maria from './equipe/Maria';
import Nicole from './equipe/Nicole';
import Polliana from './equipe/Polliana';

// NOVO: Importar a página de Artigos de Marcos
import MarcosArticlesPage from './pages/MarcosArticlesPage'; 

function App() {
  // Estado para controle do tema (light/dark)
  const [theme, setTheme] = useState('light');

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Layout toggleTheme={toggleTheme} theme={theme}>
          <Routes>
            {/* Rotas Principais */}
            {/* <Route path="/" element={<Home />} /> */} {/* COMENTADO: Módulo não encontrado */}
            <Route path="/escritorio" element={<Escritorio />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/resultados" element={<Resultados />} />

            {/* Rotas de Publicações */}
            <Route path="/artigos" element={<ArtigosPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/publicacoes" element={<PublicacoesPage />} />
            <Route path="/informativos" element={<InformativosPage />} />
            <Route path="/newsletters" element={<NewslettersPage />} />
            <Route path="/novidades-legislativas" element={<NovidadesLegislativas />} />
            
            {/* Rota para Artigos Específicos do Marcos */}
            <Route path="/equipe/marcos/artigos" element={<MarcosArticlesPage />} />

            {/* Rotas de Serviços */}
            <Route path="/servicos/licenciamento-ambiental" element={<LicenciamentoAmbiental />} />
            <Route path="/servicos/conflitos-ambientais" element={<ConflitosAmbientais />} />
            <Route path="/servicos/compliance-ambiental" element={<ComplianceAmbiental />} />
            <Route path="/servicos/due-diligence-ambiental" element={<DueDiligenceAmbiental />} />
            <Route path="/servicos/pareceres-e-opinioes-legais" element={<PareceresEOpinioesLegais />} />
            <Route path="/servicos/outros-servicos" element={<OutrosServicos />} />

            {/* Rotas de Detalhe da Equipe */}
            <Route path="/equipe/marcos" element={<Marcos />} />
            <Route path="/equipe/ana" element={<Ana />} />
            <Route path="/equipe/caio" element={<Caio />} />
            <Route path="/equipe/camilla" element={<Camilla />} />
            <Route path="/equipe/eduardo" element={<Eduardo />} />
            <Route path="/equipe/gleyse" element={<Gleyse />} />
            <Route path="/equipe/isabella" element={<Isabella />} />
            <Route path="/equipe/luiza" element={<Luiza />} />
            <Route path="/equipe/manuela" element={<Manuela />} />
            <Route path="/equipe/maria" element={<Maria />} />
            <Route path="/equipe/nicole" element={<Nicole />} />
            <Route path="/equipe/polliana" element={<Polliana />} />
            
            {/* Rota de fallback ou 404 (opcional) */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Layout>
      </Router>
      <WhatsAppButton />
    </ThemeProvider>
  );
}

export default App;