import React from 'react';
import styled from 'styled-components';

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

function QuemSomos() {
  return (
    <Section id="quem-somos">
      <Title>Soluções Jurídicas e Estratégicas para Questões Ambientais</Title>
      <Paragraph>
        O Saes Advogados alia excelência jurídica a sólido conhecimento técnico e de negócio, 
        com o objetivo de evitar problemas, antecipar oportunidades e encontrar soluções para questões ambientais.
      </Paragraph>
      <Botao onClick={() => window.location.href = '#contato'}>
        <span>+</span>
        Leia Mais
      </Botao>
    </Section>
  );
}

export default QuemSomos;






