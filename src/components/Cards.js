// src/components/Cards.js
import React, { useState } from 'react';
import styled from 'styled-components';
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
  margin-top: 3rem;
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

  &:hover {
    background-color: orange;
    color: white;
  }

  svg {
    font-size: 1.5rem;
  }
`;

function Cards() {
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
      description: "Análises de questões ambientais específicas para orientar a tomada de decisão e subsidiar processos."
    },
    {
      icon: <FaGavel />,
      title: "Consultoria Estratégica",
      description: "Planejamento estratégico ambiental e suporte jurídico para expansão de negócios e redução de riscos."
    }
  ];

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Cards;


