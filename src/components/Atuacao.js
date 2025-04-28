import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLeaf, FaSearch, FaCheckCircle, FaBalanceScale, FaGavel } from 'react-icons/fa';

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

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  width: 100%;
  cursor: pointer;
  opacity: ${({ isHovered, isActive }) => (isHovered && !isActive ? 0.5 : 1)};

  &:hover {
    transform: translateY(-10px);
    box-shadow: none;
  }

  h3 {
    font-size: 1.1rem;
    color: orange;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
    color: #666;
  }

  svg {
    font-size: 2.5rem;
    color: black;
    margin-bottom: 1rem;
  }
`;

const Botao = styled.button`
  width: 150px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
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
  margin-top: 2rem;
  margin: 0 auto;

  &:hover {
    background-color: orange;
    color: white;
  }

  svg {
    font-size: 1.5rem;
  }
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
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: <FaLeaf />,
      title: "Licenciamento Ambiental e Urbanístico",
      description: "Consultoria jurídica e estratégica para prevenção de riscos e solução de conflitos em todas as etapas do licenciamento."
    },
    {
      icon: <FaSearch />,
      title: "Due Diligence Ambiental e Análise de Risco",
      description: "Avaliação de riscos e passivos para antecipar necessidades e evitar questionamentos."
    },
    {
      icon: <FaCheckCircle />,
      title: "Compliance Ambiental",
      description: "Programas de compliance e normatização de processos internos."
    },
    {
      icon: <FaBalanceScale />,
      title: "Pareceres e Opiniões Legais",
      description: "Análises de questões ambientais específicas e sensíveis, para dar segurança e orientar à tomada de decisão pela empresa, bem como para subsidiar pleitos em processos judiciais e administrativos."
    },
    {
      icon: <FaGavel />,
      title: "Conflitos Ambientais",
      description: "Atuação em ações civis públicas, criminais e outras ações judiciais, infrações administrativas, termos de ajustamento de conduta e outros acordos."
    }
  ];

  const tabs = [
    {
      title: 'Presença',
      leftContent: '[20]',
      rightContent: (
        <>
          <h3>Estados do país</h3>
          <p>Atuamos em 20 estados, nas regiões Sudeste, Sul, Centro-Oeste, Norte e Nordeste. A experiência e a base de dados decorrente dessa atuação nacional contribuem para a obtenção de soluções céleres e eficazes para questões ambientais de nossos clientes em qualquer local do Brasil.</p>
        </>
      )
    },
    {
      title: 'Licenciamento',
      leftContent: '[50]',
      rightContent: (
        <>
          <h3>Empreendimentos</h3>
          <p>Soluções personalizadas no licenciamento ambiental de mais de 50 empreendimentos, nos diversos setores da economia, como portuário, geração e transmissão de energia, imobiliário, saneamento, mineração, petróleo e gás, construção naval, distribuidoras de combustível, aterros sanitários e indústrias em geral.</p>
        </>
      )
    },
    {
      title: 'Conflitos Ambientais',
      leftContent: '[250]',
      rightContent: (
        <>
          <h3>Causas ambientais</h3>
          <p>Com atendimento personalizado, representamos clientes em mais de 250 processos judiciais e administrativos ambientais, como ações judiciais cíveis e criminais (perante o STF, STJ, tribunais regionais e locais e em primeira instância), inquéritos civis e penais, processos administrativos e na negociação de acordos e termos de ajustamento de conduta.</p>
        </>
      )
    }
  ];

  return (
    <Section>
      <Title>Atuação</Title>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            isHovered={hoveredCard !== null && hoveredCard !== index}
            isActive={hoveredCard === index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServiceGrid>

      <Botao>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14"></path>
        </svg>
        Portfólio
      </Botao>

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
