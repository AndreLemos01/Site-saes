// src/pages/Atuacao.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Cards from '../components/Cards';

const Section = styled.section`
  padding: 4rem 10%;
  background-color: white;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const TabSection = styled.div`
  margin-top: 4rem;
`;

const TabHeaders = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
  justify-content: center;
`;

const TabHeader = styled.div`
  width: 150px;
  padding: 0.6rem 0.8rem;
  text-align: center;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? 'orange' : 'white')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  font-weight: bold;
  border: 2px solid orange;
  border-radius: 8px;
  transition: 0.3s;
  font-size: 0.9rem;

  &:hover {
    background-color: orange;
    color: white;
  }
`;

const TabContent = styled.div`
  padding: 2rem;
  display: flex;
  gap: 2rem;
`;

const LeftSide = styled.div`
  flex: 1;
  background-color: white;
  color: orange;
  padding: 2rem;
  text-align: center;
  font-size: 10rem;
`;

const RightSide = styled.div`
  flex: 1;
  padding: 2rem;
  text-align: left;

  h3 {
    font-size: 2rem;
    color: orange;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    text-align: justify;
    color: #666;
  }
`;

function Atuacao() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Presença',
      leftContent: '[20]',
      rightContent: (
        <>
          <h3>Estados do país</h3>
          <p>Atuamos em 20 estados nas regiões Sudeste, Sul, Centro-Oeste, Norte e Nordeste, obtendo soluções rápidas e eficazes para nossos clientes.</p>
        </>
      )
    },
    {
      title: 'Licenciamento',
      leftContent: '[50]',
      rightContent: (
        <>
          <h3>Empreendimentos</h3>
          <p>Soluções personalizadas no licenciamento ambiental de mais de 50 empreendimentos de diversos setores econômicos.</p>
        </>
      )
    },
    {
      title: 'Conflitos Ambientais',
      leftContent: '[250]',
      rightContent: (
        <>
          <h3>Causas ambientais</h3>
          <p>Atuação em mais de 250 processos judiciais e administrativos ambientais em todo o Brasil.</p>
        </>
      )
    }
  ];

  return (
    <Section>
      <Title>Atuação</Title>
      <Cards />

      <TabSection>
        <TabHeaders>
          {tabs.map((tab, index) => (
            <TabHeader key={index} isActive={activeTab === index} onClick={() => setActiveTab(index)}>
              {tab.title}
            </TabHeader>
          ))}
        </TabHeaders>

        <TabContent>
          <LeftSide>{tabs[activeTab].leftContent}</LeftSide>
          <RightSide>{tabs[activeTab].rightContent}</RightSide>
        </TabContent>
      </TabSection>
    </Section>
  );
}

export default Atuacao;
