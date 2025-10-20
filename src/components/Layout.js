// src/components/Layout.js (ATUALIZADO)

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importa useLocation
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton'; 

// Função auxiliar para formatar o título da aba
const formatTitle = (pathname) => {
  const baseTitle = "Saes Advogados";
  // Mapeia caminhos para nomes de páginas mais legíveis
  const pathMap = {
    '/': 'Home',
    '/escritorio': 'O Escritório',
    '/publicacoes': 'Publicações',
    '/artigos': 'Artigos',
    '/novidades-legislativas': 'Novidades Legislativas',
    '/informativos': 'Informativos',
    '/newsletter': 'Newsletter',
    '/search': 'Resultados da Busca',
    '/contato': 'Contato',
    
    // Serviços
    '/servicos/licenciamento-ambiental-urbanistico': 'Licenciamento Ambiental e Urbanístico',
    '/servicos/due-diligence-ambiental-e-analise-de-risco': 'Due Diligence Ambiental e Análise de Risco',
    '/servicos/compliance-ambiental': 'Compliance Ambiental',
    '/servicos/pareceres-e-opinioes-legais': 'Pareceres e Opiniões Legais',
    '/servicos/conflitos-ambientais': 'Conflitos Ambientais',
    '/servicos/outros-servicos': 'Outros Serviços',
    // Rotas com variáveis (como /article/:id), trataremos no final
  };

  if (pathname.startsWith('/article/')) {
      return `Artigo | ${baseTitle}`;
  }
  
  const pageName = pathMap[pathname] || 'Página Não Encontrada';
  
  // Se for a Home, retorna apenas o nome base (melhor para SEO)
  if (pathname === '/') {
    return baseTitle;
  }
  
  return `${pageName} | ${baseTitle}`;
};


function Layout({ children }) {
  const location = useLocation(); // Hook para obter informações da rota

  useEffect(() => {
    // Define o título da página baseado no caminho atual
    document.title = formatTitle(location.pathname);
    // Rola para o topo da página ao trocar de rota
    window.scrollTo(0, 0); 
  }, [location.pathname]); // Executa toda vez que o caminho muda

  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Layout;