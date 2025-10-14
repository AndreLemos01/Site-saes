// src/components/Cards.js (MODIFICADO)

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importa Link para navegação
import { FaLeaf, FaSearch, FaCheckCircle, FaBalanceScale, FaGavel } from 'react-icons/fa'; 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCardLink = styled(Link)` /* Novo componente de Link */
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  width: 100%;
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: ${({ isHovered, isActive }) => (isHovered && !isActive ? 0.5 : 1)};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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


function Cards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: <FaLeaf />,
      title: "Licenciamento Ambiental e Urbanístico",
      description: "Consultoria jurídica e estratégica para prevenção de riscos e solução de conflitos em todas as etapas do licenciamento.",
      // Rota adicionada
      path: "/servicos/licenciamento-ambiental-urbanistico"
    },
    {
      icon: <FaSearch />,
      title: "Due Diligence Ambiental e Análise de Risco",
      description: "Avaliação de riscos e passivos para antecipar necessidades e evitar questionamentos.",
      path: "/servicos/due-diligence-ambiental-e-analise-de-risco"
    },
    {
      icon: <FaCheckCircle />,
      title: "Compliance Ambiental",
      description: "Programas de compliance e normatização de processos internos.",
      path: "/servicos/compliance-ambiental"
    },
    {
      icon: <FaBalanceScale />,
      title: "Pareceres e Opiniões Legais",
      description: "Análises de questões ambientais específicas para orientar a tomada de decisão e subsidiar processos.",
      path: "/servicos/pareceres-e-opinioes-legais"
    },
    {
      icon: <FaGavel />,
      title: "Consultoria Estratégica",
      description: "Planejamento estratégico ambiental e suporte jurídico para expansão de negócios e redução de riscos.",
      path: "/servicos/consultoria-estrategica"
    }
  ];

  return (
    <Wrapper>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCardLink key={index} to={service.path}>
            <ServiceCard
              isHovered={hoveredCard !== null && hoveredCard !== index}
              isActive={hoveredCard === index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          </ServiceCardLink>
        ))}
      </ServiceGrid>
    </Wrapper>
  );
}

export default Cards;