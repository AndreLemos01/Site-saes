import React, { useState } from 'react';
import styled from 'styled-components';

// Importa os dados e imagens centralizados
import { membros } from '../data/Membros'; 
import MembroModal from './MembroModal';

// REMOVIDO: As importações individuais de imagens que estavam causando os warnings
/*
import marcos from '../images/marcos.jpg';
import gleyse from '../images/gleyse.jpg';
import manuela from '../images/manuela.jpg';
import isabella from '../images/isabella.jpg';
import camilla from '../images/camilla.jpg';
import eduardo from '../images/eduardo.jpg';
import nicole from '../images/nicole.png';
import luiza from '../images/luiza.png';
import maria from '../images/maria.jpg';
import polliana from '../images/polliana.png';
import ana from '../images/ana.jpg';
*/

const Section = styled.section`
  padding: 4rem 10%;
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  color: #222;
  margin-bottom: 3rem;
  font-weight: 600;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MemberCard = styled.div`
  text-align: center;
  width: 100%;
  max-width: 260px;
  background: transparent;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: ${(props) => (props.isHovered ? 0.4 : 1)};

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 290px;
    object-fit: cover;
    object-position: top;
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1rem;
    color: #111;
    margin: 0.3rem 0 0.2rem;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
  }
`;

function Equipe() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMembro, setSelectedMembro] = useState(null); 

  // Usa a lista de membros importada e completa
  const equipe = membros;

  const openModal = (membro) => {
    setSelectedMembro(membro);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMembro(null);
  };
  
  return (
    <Section>
      <Title>Equipe</Title>
      <TeamGrid>
        {equipe.map((membro, index) => (
          <MemberCard
            key={index}
            isHovered={hoveredCard !== null && hoveredCard !== index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => openModal(membro)} 
          >
            {/* A imagem é acessada via membro.imagem do objeto importado de Membros.js */}
            <img src={membro.imagem} alt={membro.nome} />
            <h3>{membro.nome}</h3>
            <p>{membro.cargo}</p>
          </MemberCard>
        ))}
      </TeamGrid>

      {isModalOpen && (
          <MembroModal 
            membro={selectedMembro} 
            onClose={closeModal} 
          />
      )}
    </Section>
  );
}

export default Equipe;