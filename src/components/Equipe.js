import React, { useState, useEffect } from 'react';
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
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  justify-items: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MemberCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

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

  button {
    margin-top: 1rem;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    background-color: white;
    border: 2px solid orange;
    border-radius: 8px;
    color: black;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: orange;
      color: white;
    }
  }
`;

// Skeleton card visual
const SkeletonCard = styled.div`
  background: #ddd;
  border-radius: 12px;
  width: 100%;
  max-width: 260px;
  height: 300px;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }
`;

function Equipe() {
  const [loading, setLoading] = useState(true);
  const [equipe, setEquipe] = useState([]);

  useEffect(() => {
    // Simula carregamento (pode ser substituído por um fetch real)
    setTimeout(() => {
      setEquipe([
        { nome: "Marcos André Bruxel Saes", cargo: "Advogado | OAB/SC 20.864" },
        { nome: "Gleyse Gulin", cargo: "Advogada | OAB/RJ 172.476" },
        { nome: "Manuela K Hermenegildo Andriani", cargo: "Advogada | OAB/SC 44.175" },
        { nome: "Isabella Dabrowski Pedrini Hamad", cargo: "Advogada | OAB/SC 39.232" },
        { nome: "Caio Henrique Bocchini", cargo: "Advogado | OAB/SC 38.517" },
        { nome: "Camilla Pavan Costa", cargo: "Advogada | OAB/SC 33.200" },
        { nome: "Eduardo dos Anjos Saes", cargo: "Advogado | OAB/SC 70.652" },
        { nome: "Nicole Bittencourt", cargo: "Advogada | OAB/SC 73.238" },
        { nome: "Luiza Neves Alcantara", cargo: "Estagiária" },
        { nome: "Maria Helena Lemos", cargo: "Administradora" },
        { nome: "Polliana Muller", cargo: "Auxiliar Administrativa" },
        { nome: "Ana Carolina Borduan", cargo: "Recepcionista" }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Section>
      <Title>Equipe</Title>
      <TeamGrid>
        {loading
          ? Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)
          : equipe.map((membro, index) => (
              <MemberCard key={index}>
                <img src="https://via.placeholder.com/120" alt={membro.nome} />
                <h3>{membro.nome}</h3>
                <p>{membro.cargo}</p>
                <button>Ver mais</button>
              </MemberCard>
            ))}
      </TeamGrid>
    </Section>
  );
}

export default Equipe;
