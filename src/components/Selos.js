// src/components/Selos.js
import React, { useState } from 'react';
import styled from 'styled-components';
import selo1 from '../images/SELO_ESC_vertical_2020.png';
import selo2 from '../images/selo-vertical-.png';
import selo3 from '../images/selo-analise-2022.png';
import selo4 from '../images/selo-escritorio-admirado-2023.png';
import selo5 from '../images/selo-escritorio-admirado-2025.png';

const Section = styled.section`
  padding: 2rem 0;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const SeloCard = styled.div`
  width: 65px;
  height: 85px;
  border-radius: 12px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0.4)};
  transform: ${({ isHovered }) => (isHovered ? 'scale(1.1)' : 'scale(1)')};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Selos = () => {
  const [hovered, setHovered] = useState(null);
  const imagens = [selo1, selo2, selo3, selo4, selo5];

  return (
    <Section>
      {imagens.map((img, index) => (
        <SeloCard
          key={index}
          isHovered={hovered === index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={img} alt={`Selo ${index + 1}`} />
        </SeloCard>
      ))}
    </Section>
  );
};

export default Selos;
