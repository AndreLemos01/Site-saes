import React, { useState } from 'react';
import styled from 'styled-components';
import { Document, Page } from 'react-pdf';

// Styled-components para a página
const Section = styled.section`
  padding: 4rem 10%;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: justify;
`;

const ListContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ListTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ListItem = styled.a`
  font-size: 1.2rem;
  color: #ffa500;  // Cor laranja
  text-decoration: none;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const PDFSection = styled.div`
  margin-top: 3rem;
  width: 100%;
  text-align: center;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid #ffa500;  // Cor laranja
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

const Botao = styled.button`
  width: 200px;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  background-color: white;
  border: 2px solid orange;
  border-radius: 8px;
  color: black;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;

  &:hover {
    background-color: orange;
    color: white;
  }

  svg {
    font-size: 1.5rem;
  }
`;

const NavigationButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #ffa500;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin: 1rem;

  &:hover {
    background-color: #e68900;
  }
`;

function Escritorio() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPreviousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function goToNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <Section id="escritorio">
      <Title>O Escritório</Title>
      <Paragraph>
        Saes Advogados é a realização de um projeto comum de advogados especializados em direito ambiental, que partilham do mesmo objetivo: levar soluções personalizadas e gerar oportunidades estratégicas aos seus clientes.
        <br /><br />
        Com visão empresarial e experiência nos mais diversos setores da economia, nossa equipe está preparada para prestar assessoria e consultoria jurídica em qualquer assunto relacionado à matéria ambiental.
        <br /><br />
        O escritório acredita que o comprometimento de seus profissionais permite um relacionamento duradouro e construtivo com seus clientes, otimizando a busca por soluções com excelência técnica e dinamismo.
        <br /><br />
        A partir de uma atuação ética e transparente, Saes Advogados deseja contribuir para o desenvolvimento das atividades de nossos clientes com segurança jurídica e sustentabilidade.
      </Paragraph>

      <ListContainer>
        <ListTitle>Conheça mais serviços</ListTitle>
        <ListItem href="#licenciamento-ambiental">Licenciamento Ambiental e Urbanístico</ListItem>
        <ListItem href="#due-diligence">Due Diligence Ambiental e Análise de Risco</ListItem>
        <ListItem href="#compliance">Compliance Ambiental</ListItem>
        <ListItem href="#pareceres">Pareceres e Opiniões Legais</ListItem>
        <ListItem href="#conflitos">Conflitos Ambientais</ListItem>
        <ListItem href="#outros-servicos">Outros serviços</ListItem>
      </ListContainer>

      <PDFSection>
        <PDFTitle>Veja nosso Portfólio</PDFTitle>
        <PDFDescription>
          Nosso portfólio inclui uma variedade de projetos e soluções em direito ambiental. Ele apresenta casos de sucesso, áreas de atuação e projetos desenvolvidos por nossa equipe. Este portfólio demonstra a nossa experiência em oferecer soluções jurídicas que atendem às necessidades ambientais de nossos clientes.
        </PDFDescription>

        <Document
          file="/path-to-portfolio.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>

        <div>
          <NavigationButton onClick={goToPreviousPage}>Anterior</NavigationButton>
          <NavigationButton onClick={goToNextPage}>Próxima</NavigationButton>
        </div>
      </PDFSection>
    </Section>
  );
}

export default Escritorio;
