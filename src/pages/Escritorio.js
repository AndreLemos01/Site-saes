// src/pages/Escritorio.js

import React from 'react';
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
// ESTILOS (MANTIDOS DA ÚLTIMA VERSÃO)
// =========================================================================

const Section = styled.section`
  padding: 4rem 10%;
  background-color: #f9f9f9;
  min-height: 80vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  color: #222;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const ContentWrapper = styled.div`
  max-width: 1000px; 
  margin: 0 auto;
`;

const InfoColumn = styled.div`
  margin-bottom: 3rem; 
`;

const PdfViewerColumn = styled.div`
  width: 100%;
  height: 800px; 

  @media (max-width: 1024px) {
    height: 70vh;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #34495E;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h2`
  font-size: 1.3rem;
  color: #F39C12;
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
    color: #F39C12; 
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
    color: #34495E;
    text-decoration: none;

    &:hover {
        color: #F39C12;
    }
`;

const IframeViewer = styled.iframe`
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 8px;
`;


function Escritorio() {
  const services = [
    { name: 'Licenciamento Ambiental e Urbanístico', url: '/servicos/licenciamento' },
    { name: 'Due Diligence Ambiental e Análise de Risco', url: '/servicos/due-diligence' },
    { name: 'Compliance Ambiental', url: '/servicos/compliance' },
    { name: 'Pareceres e Opiniões Legais', url: '/servicos/pareceres' },
    { name: 'Conflitos Ambientais', url: '/servicos/conflitos' },
    { name: 'Outros serviços', url: '/servicos' },
  ];
    
  return (
    <Section>
      <Title>O Escritório</Title>

      <ContentWrapper>
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

        <PdfViewerColumn>
            <h2 style={{fontSize: '1.5rem', color: '#222', marginBottom: '1rem', fontWeight: '600'}}>Portfólio</h2>
            
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
      </ContentWrapper>
    </Section>
  );
}

export default Escritorio;