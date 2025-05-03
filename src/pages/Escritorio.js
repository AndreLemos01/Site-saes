import React, { useState } from 'react';
import styled from 'styled-components';
import Cards from '../components/Cards.js'; // Importação da seção Cards
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

// Usando o arquivo PDF que está na pasta public
const pdfFile = '/portfolio_saes_advogados_2024.pdf'; // Caminho correto para o PDF na pasta public

// Importando o Worker localmente do pdfjs-dist
import { pdfjs as pdfjsDist } from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.entry'); // Corrigido para ser no início

const EscritorioPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

const ImageBanner = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.bg || 'https://via.placeholder.com/1600x900'});
  background-size: cover;
  background-position: center;
  filter: brightness(50%);
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const ArticleContent = styled.div`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #f39200;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
  margin-top: 20px;
  width: 200px;
  align-self: center;

  &:hover {
    background-color: #d17a00;
  }
`;

const PdfViewerContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 900px;
  overflow: hidden;
`;

const PdfViewer = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1.0);

  return (
    <PdfViewerContainer>
      <Worker workerUrl={pdfjs.GlobalWorkerOptions.workerSrc}>
        <Viewer
          fileUrl={pdfFile}
          pageIndex={pageNumber - 1}
          zoom={zoom}
        />
      </Worker>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}>Anterior</button>
        <span>{pageNumber}</span>
        <button onClick={() => setPageNumber((prev) => Math.min(prev + 1, 20))}>Próxima</button>
        <button onClick={() => setZoom(zoom - 0.1)}>Reduzir zoom</button>
        <button onClick={() => setZoom(zoom + 0.1)}>Aumentar zoom</button>
      </div>
    </PdfViewerContainer>
  );
};

const EscritorioPage = () => {
  return (
    <EscritorioPageContainer>
      {/* Imagem de Destaque */}
      <ImageBanner bg={require('../images/bambu.png')} />

      <ContentContainer>
        {/* Título do Escritório */}
        <Title>Escritório</Title>

        {/* Conteúdo do Escritório */}
        <ArticleContent>
          <p>
            Saes Advogados é a realização de um projeto comum de advogados especializados em direito ambiental, que partilham do
            mesmo objetivo: levar soluções personalizadas e gerar oportunidades estratégicas aos seus clientes.
          </p>
          <p>
            Com visão empresarial e experiência nos mais diversos setores da economia, nossa equipe está preparada para prestar
            assessoria e consultoria jurídica em qualquer assunto relacionado à matéria ambiental.
          </p>
          <p>
            O escritório acredita que o comprometimento de seus profissionais permite um relacionamento duradouro e construtivo
            com seus clientes, otimizando a busca por soluções com excelência técnica e dinamismo.
          </p>
          <p>
            A partir de uma atuação ética e transparente, Saes Advogados deseja contribuir para o desenvolvimento das atividades
            de nossos clientes com segurança jurídica e sustentabilidade.
          </p>
        </ArticleContent>

        {/* Botão de Voltar */}
        <BackButton onClick={() => window.history.back()}>Voltar</BackButton>
      </ContentContainer>

      {/* Seção de Cards */}
      <Cards />

      {/* Leitor de PDF */}
      <PdfViewer />
    </EscritorioPageContainer>
  );
};

export default EscritorioPage;
