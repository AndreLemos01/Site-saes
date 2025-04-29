import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as pdfjsLib from 'pdfjs-dist';
import { FaDownload, FaPrint } from 'react-icons/fa';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Cards from '../components/Cards.js'; // ⬅️ Importação da seção Cards
import backgroundImage from '../images/bambu.png';  // Importando a imagem

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const portifolio = process.env.PUBLIC_URL + '/portfolio_saes_advogados_2024.pdf';

const Section = styled.section`
  padding: 4rem 10%;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100px;  /* Ajuste a altura conforme necessário */
  margin-top:-70px;
  background-image: url(${backgroundImage});  /* Usando a imagem importada */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;  /* Para o título começar um pouco abaixo */
  padding-bottom: 20px;  /* Ajuste conforme necessário */
`;


const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;  /* Cor do texto do título */
  margin-bottom: 0;  /* Remove a margem inferior */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);  /* Adiciona sombra ao texto para melhorar a legibilidade */
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 2rem;
  margin-top: 20px;
  text-align: justify;
`;

const ListContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* centraliza os filhos */
  text-align: center;  /* centraliza o texto */
`;

const ListTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const PDFSection = styled.div`
  margin-top: 3rem;
  width: 100%;
  text-align: center;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid #ffa500;
`;

const PDFTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const PDFDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: justify;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const PDFCanvas = styled.canvas`
  max-width: 100%;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: block;
`;

const ArrowIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const ArrowIcon = styled.div`
  color: #ffa500;
  cursor: pointer;
  font-size: 2rem;
  margin: 0 1rem;

  &:hover {
    color: orange;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Icon = styled.div`
  color: #ffa500;
  cursor: pointer;
  font-size: 1.8rem;
  margin: 0 1rem;

  &:hover {
    color: orange;
  }
`;

function Escritorio() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(portifolio);
        const pdf = await loadingTask.promise;
        setPdfDoc(pdf);
        setNumPages(pdf.numPages);
      } catch (error) {
        console.error("Erro ao carregar o PDF:", error);
      }
    };

    loadPDF();
  }, []);

  useEffect(() => {
    if (pdfDoc) {
      renderPage(pageNumber, pdfDoc);
    }
  }, [pageNumber, pdfDoc]);

  const renderPage = async (pageNumber, pdf) => {
    try {
      const page = await pdf.getPage(pageNumber);
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const containerWidth = canvas.parentElement.offsetWidth;
      const viewport = page.getViewport({ scale: containerWidth / page.view[2] });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      await page.render({ canvasContext: context, viewport }).promise;
    } catch (error) {
      console.error("Erro ao renderizar a página:", error);
    }
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = portifolio;
    link.download = 'portfolio_saes_advogados_2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printWindow = window.open(portifolio, '_blank');
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        printWindow.focus();
        printWindow.print();
      });
    }
  };

  return (
    <Section id="escritorio">
      <TitleContainer>
        <Title>O Escritório</Title>
      </TitleContainer>

      <Paragraph>
        Saes Advogados é a realização de um projeto comum de advogados especializados em direito ambiental,
        que partilham do mesmo objetivo: levar soluções personalizadas e gerar oportunidades estratégicas
        aos seus clientes.
        <br /><br />
        Com visão empresarial e experiência nos mais diversos setores da economia, nossa equipe está preparada
        para prestar assessoria e consultoria jurídica em qualquer assunto relacionado à matéria ambiental.
        <br /><br />
        O escritório acredita que o comprometimento de seus profissionais permite um relacionamento duradouro
        e construtivo com seus clientes, otimizando a busca por soluções com excelência técnica e dinamismo.
        <br /><br />
        A partir de uma atuação ética e transparente, Saes Advogados deseja contribuir para o desenvolvimento
        das atividades de nossos clientes com segurança jurídica e sustentabilidade.
      </Paragraph>

      <ListContainer>
        <ListTitle>Conheça mais serviços</ListTitle>
      </ListContainer>

      <Cards /> {/* ⬅️ Aqui está a inclusão da seção Cards */}

      <PDFSection>
        <PDFTitle>Veja nosso Portfólio</PDFTitle>
        <PDFDescription>
          Nosso portfólio inclui uma variedade de projetos e soluções em direito ambiental. Ele apresenta casos de sucesso, áreas de atuação e projetos desenvolvidos por nossa equipe. Este portfólio demonstra a nossa experiência em oferecer soluções jurídicas que atendem às necessidades ambientais de nossos clientes.
        </PDFDescription>

        <PDFCanvas ref={canvasRef} />

        <ArrowIconContainer>
          <ArrowIcon onClick={goToPreviousPage} disabled={pageNumber <= 1}>
            <MdArrowBackIosNew />
          </ArrowIcon>
          <ArrowIcon onClick={goToNextPage} disabled={pageNumber >= numPages}>
            <MdArrowForwardIos />
          </ArrowIcon>
        </ArrowIconContainer>

        <p>Página {pageNumber} de {numPages}</p>

        <IconContainer>
          <Icon onClick={handleDownload}>
            <FaDownload />
          </Icon>
          <Icon onClick={handlePrint}>
            <FaPrint />
          </Icon>
        </IconContainer>
      </PDFSection>
    </Section>
  );
}

export default Escritorio;









