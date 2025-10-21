// src/pages/Escritorio.js

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa'; 

// ATENÇÃO: A URL a ser usada no visualizador do Google DEVE ser uma URL PÚBLICA e COMPLETA. 
// SUBSTITUA PELO DOMÍNIO FINAL QUANDO PUBLICAR.
const PDF_URL_HOSTED = 'https://www.saesadvogados.com.br/portfolio_saes_advogados_2024.pdf'; 

// URL para visualização local (funciona em localhost)
const PDF_URL_LOCAL = '/portfolio_saes_advogados_2024.pdf'; 

// Lógica para determinar se estamos em ambiente local
const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost';

// URL final do iframe
let iframeSrc;
let viewerNote;

if (isLocal) {
  // Se for local, usamos o visualizador nativo do browser, apontando para o arquivo local.
  iframeSrc = PDF_URL_LOCAL; 
  viewerNote = "Você está em ambiente local. O visualizador nativo do seu navegador está sendo usado.";
} else {
  // Se estiver em produção, usamos o visualizador do Google, apontando para a URL pública.
  iframeSrc = `https://docs.google.com/viewer?url=${PDF_URL_HOSTED}&embedded=true`;
  viewerNote = "Usando o visualizador do Google Docs. Se a URL não for pública, pode haver falha na visualização.";
}

// =========================================================================
// ESTILOS ADAPTADOS DE ComplianceAmbiental.js E REUTILIZADOS
// =========================================================================

// Estilo de fundo da página (vindo de ComplianceAmbiental.js)
const PageContainer = styled.div`
  /* Padding-top mantido para evitar sobreposição da Navbar, ajustado para ser como o Compliance */
  padding-top: 180px; 
  padding-bottom: 4rem;
  min-height: 90vh;
  /* Usando a cor de card/fundo do tema para compatibilidade */
  background-color: ${({ theme }) => theme.card}; 
`;

// Estilo de Card Centralizado (vindo de ComplianceAmbiental.js)
const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.background}; /* Fundo do card principal, branco no light theme */
  border-radius: 8px; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 1100px; 
  margin: 0 auto; 
  /* MODIFICADO: Aumentando o padding-bottom em mais 50px (100px -> 150px) */
  padding: 40px 40px 150px 40px; 
  border: 1px solid ${({ theme }) => theme.border};
  
  @media (max-width: 1200px) {
    margin-left: 5%;
    margin-right: 5%;
  }

  @media (max-width: 768px) {
    /* MODIFICADO: Aumentando o padding-bottom em mais 50px (90px -> 140px) */
    padding: 30px 5% 140px 5%;
    margin-left: 0;
    margin-right: 0;
    border-radius: 0; 
  }
`;

// Estilo do Título Principal (vindo de ComplianceAmbiental.js)
const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary}; 
  margin-bottom: 2rem;
  font-weight: 700;
`;

// Container principal para o conteúdo: Modificado para não forçar flexbox, 
// permitindo que os elementos se empilhem naturalmente.
const ContentBlock = styled.div`
    /* Garante que o texto ocupe toda a largura disponível antes do PDF */
    margin-bottom: 3rem;
`;

// Estilos originais reutilizados, garantindo compatibilidade com o tema
const InfoColumn = styled.div`
  /* Não precisa de flex: 1 nem margin-bottom, pois ele é um bloco único agora */
  margin-bottom: 3rem; 
`;

const PdfViewerColumn = styled.div`
  width: 100%; /* Ocupa toda a largura */
  height: 800px; /* Mantém a altura para o visualizador */
  margin-top: 40px; /* Adiciona espaçamento entre o texto e o Portfólio */

  @media (max-width: 1024px) {
    height: 70vh;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text}; 
  margin-bottom: 1.5rem;
  text-align: justify;
`;

const ServiceTitle = styled.h2`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primary}; 
  margin: 2rem 0 1rem;
  font-weight: 600;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  
  a {
    color: ${({ theme }) => theme.primary}; 
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const DownloadLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 2rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.text}; 
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.primary}; 
    }
`;

const IframeViewer = styled.iframe`
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
`;


function Escritorio() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
    { name: 'Licenciamento Ambiental e Urbanístico', url: '/servicos/licenciamento' },
    { name: 'Due Diligence Ambiental e Análise de Risco', url: '/servicos/due-diligence' },
    { name: 'Compliance Ambiental', url: '/servicos/compliance' },
    { name: 'Pareceres e Opiniões Legais', url: '/servicos/pareceres' },
    { name: 'Conflitos Ambientais', url: '/servicos/conflitos' },
    { name: 'Outros serviços', url: '/servicos' },
  ];
    
  return (
    <PageContainer>
        <CardWrapper>
            {/* 1. Título Principal */}
            <Title>O Escritório</Title>

            {/* ContentBlock para o conteúdo de texto */}
            <ContentBlock>
                {/* 2. Conteúdo da Coluna de Informação (Todo o texto) */}
                <InfoColumn>
                    <Paragraph>
                        Saes Advogados é a realização de um projeto comum de advogados especializados em direito ambiental, que partilham do mesmo objetivo: levar soluções personalizadas e gerar oportunidades estratégicas aos seus clientes.
                    </Paragraph>
                    
                    <Paragraph>
                        Com visão empresarial e experiência nos mais diversos setores da economia, nossa equipe está preparada para prestar assessoria e consultoria jurídica em qualquer assunto relacionado à matéria ambiental.
                    </Paragraph>
                    
                    <Paragraph>
                        O escritório acredita que o comprometimento de seus profissionais permite um relacionamento duradouro e construtivo com seus clientes, otimizando a busca por soluções com excelência técnica e dinamismo.
                    </Paragraph>
                    
                    <Paragraph>
                        A partir de uma atuação ética e transparente, Saes Advogados deseja contribuir para o desenvolvimento das atividades de nossos clientes com segurança jurídica e sustentabilidade.
                    </Paragraph>
                    
                    <ServiceTitle>Conheça mais serviços:</ServiceTitle>
                    
                    <ServicesList>
                        {services.map((service, index) => (
                            <ServiceItem key={index}>
                                <a href={service.url}>
                                    {service.name}
                                </a>
                            </ServiceItem>
                        ))}
                    </ServicesList>
                    
                    <DownloadLink href={PDF_URL_LOCAL} target="_blank" rel="noopener noreferrer">
                        <FaDownload /> Baixar Portfólio em PDF
                    </DownloadLink>

                </InfoColumn>
            </ContentBlock>
            
            {/* 3. Conteúdo da Coluna de Visualizador de PDF (Portfólio) - AGORA ABAIXO DO TEXTO */}
            <PdfViewerColumn>
                <h2 style={{fontSize: '1.5rem', color: 'inherit', marginBottom: '1rem', fontWeight: '600'}}>Portfólio</h2>
                
                {/* Aviso sobre o visualizador */}
                <p style={{marginBottom: '1rem', fontSize: '0.9rem', color: isLocal ? 'blue' : 'gray'}}>
                    {viewerNote}
                </p>

                {/* Iframe que usa a URL condicionada */}
                <IframeViewer 
                    src={iframeSrc}
                    title="Portfólio SAES Advogados"
                    allowFullScreen
                    frameBorder="0"
                    loading="lazy"
                />
            </PdfViewerColumn>
        </CardWrapper>
    </PageContainer>
  );
}

export default Escritorio;