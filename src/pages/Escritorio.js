import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import worker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = worker;

const Section = styled.section`
  padding: 4rem 10%;
  background-color: ${({ theme }) => theme.background || '#f4f4f4'};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text || '#222'};
  margin-bottom: 2rem;
  text-align: center;
`;

const PdfContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: ${({ theme }) => theme.card || 'white'};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
`;

const CanvasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: transparent;
  border: 2px solid orange;
  color: ${({ theme }) => theme.text || '#222'};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    background-color: orange;
    color: white;
  }
`;

const Escritorio = () => {
  const pdfUrl = process.env.PUBLIC_URL + '/portfolio_saes_advogados_2024.pdf';
  const canvasRefs = useRef([]);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const renderPDF = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      setNumPages(pdf.numPages);

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });

        const canvas = canvasRefs.current[pageNum - 1];
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;
      }
    };

    renderPDF();
  }, [pdfUrl]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'portfolio_saes_advogados_2024.pdf';
    link.click();
  };

  const handlePrint = () => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = pdfUrl;
    document.body.appendChild(iframe);
    iframe.onload = () => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    };
  };

  return (
    <Section>
      <Title>Escritório</Title>
      <PdfContainer>
        <ButtonGroup>
          <ActionButton onClick={handleDownload}>⬇ Baixar PDF</ActionButton>
          <ActionButton onClick={handlePrint}>🖨️ Imprimir</ActionButton>
        </ButtonGroup>
        <CanvasWrapper>
          {Array.from({ length: numPages }, (_, i) => (
            <canvas key={i} ref={(el) => (canvasRefs.current[i] = el)} />
          ))}
        </CanvasWrapper>
      </PdfContainer>
    </Section>
  );
};

export default Escritorio;
