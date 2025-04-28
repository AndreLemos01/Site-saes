import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 10%;
  background-color: white;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const MemberLink = styled.a`
  text-decoration: none;
  width: 100%;
  max-width: 280px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  opacity: ${({ isHovered, isActive }) => (isHovered && !isActive ? 0.3 : 1)};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberCard = styled.div`
  background: transparent;
  border: none;
  text-align: center;
  width: 100%;

  img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    color: #111;
    margin-top: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #777;
    margin-top: 0.3rem;
  }
`;

function Equipe() {
  const equipe = [
    { nome: "Marcos André Bruxel Saes", cargo: "Advogado | OAB/SC 20.864", link: "#" },
    { nome: "Gleyse Gulin", cargo: "Advogada | OAB/RJ 172.476", link: "#" },
    { nome: "Manuela K Hermenegildo Andriani", cargo: "Advogada | OAB/SC 44.175", link: "#" },
    { nome: "Isabella Dabrowski Pedrini Hamad", cargo: "Advogada | OAB/SC 39.232", link: "#" },
    { nome: "Caio Henrique Bocchini", cargo: "Advogado | OAB/SC 38.517", link: "#" },
    { nome: "Camilla Pavan Costa", cargo: "Advogada | OAB/SC 33.200", link: "#" },
    { nome: "Eduardo dos Anjos Saes", cargo: "Advogado | OAB/SC 70.652", link: "#" },
    { nome: "Nicole Bittencourt", cargo: "Advogada | OAB/SC 73.238", link: "#" },
    { nome: "Luiza Neves Alcantara", cargo: "Estagiária", link: "#" },
    { nome: "Maria Helena Lemos", cargo: "Administradora", link: "#" },
    { nome: "Polliana Muller", cargo: "Auxiliar Administrativa", link: "#" },
    { nome: "Ana Carolina Borduan", cargo: "Recepcionista", link: "#" }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Section>
      <Title>Equipe</Title>
      <TeamGrid>
        {equipe.map((membro, index) => (
          <MemberLink
            key={index}
            href={membro.link}
            isHovered={hoveredIndex !== null}
            isActive={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <MemberCard>
              <img src="https://via.placeholder.com/120" alt={membro.nome} />
              <h3>{membro.nome}</h3>
              <p>{membro.cargo}</p>
            </MemberCard>
          </MemberLink>
        ))}
      </TeamGrid>
    </Section>
  );
}

export default Equipe;
