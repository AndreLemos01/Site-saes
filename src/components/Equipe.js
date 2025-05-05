import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import marcos from '../images/marcos.jpg';
import gleyse from '../images/gleyse.jpg';
import manuela from '../images/manuela.jpg';
import isabella from '../images/isabella.jpg';
import caio from '../images/caio.jpg';
import camilla from '../images/camilla.jpg';
import eduardo from '../images/eduardo.jpg';
import nicole from '../images/nicole.png';
import luiza from '../images/luiza.png';
import maria from '../images/maria.jpg';
import polliana from '../images/polliana.png';
import ana from '../images/ana.jpg';

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
  opacity: ${(props) => (props.isHovered ? 0.4 : 1)}; /* Os outros cards ficam opacos */

  &:hover {
    opacity: 1; /* Remove a opacidade do card que está sendo hoverado */
    transform: scale(1.05); /* Efeito de zoom */
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

  a {
    text-decoration: none; /* Remove sublinhado do link */
    color: inherit; /* Garante que a cor do texto será herdada */
  }
`;

function Equipe() {
  const [hoveredCard, setHoveredCard] = useState(null); // Estado para controlar o card hoverado

  const equipe = [
    { nome: 'Marcos André Bruxel Saes', cargo: 'Advogado | OAB/SC 20.864', foto: marcos, link: '/marcos' },
    { nome: 'Gleyse Gulin', cargo: 'Advogada | OAB/RJ 172.476', foto: gleyse, link: '/gleyse' },
    { nome: 'Manuela K Hermenegildo Andriani', cargo: 'Advogada | OAB/SC 44.175', foto: manuela, link: '/manuela' },
    { nome: 'Isabella Dabrowski Pedrini Hamad', cargo: 'Advogada | OAB/SC 39.232', foto: isabella, link: '/isabella' },
    { nome: 'Caio Henrique Bocchini', cargo: 'Advogado | OAB/SC 38.517', foto: caio, link: '/caio' },
    { nome: 'Camilla Pavan Costa', cargo: 'Advogada | OAB/SC 33.200', foto: camilla, link: '/camilla' },
    { nome: 'Eduardo dos Anjos Saes', cargo: 'Advogado | OAB/SC 70.652', foto: eduardo, link: '/eduardo' },
    { nome: 'Nicole Bittencourt', cargo: 'Advogada | OAB/SC 73.238', foto: nicole, link: '/nicole' },
    { nome: 'Luiza Neves Alcantara', cargo: 'Estagiária', foto: luiza, link: '/luiza' },
    { nome: 'Maria Helena Lemos', cargo: 'Administradora', foto: maria, link: '/maria' },
    { nome: 'Polliana Muller', cargo: 'Auxiliar Administrativa', foto: polliana, link: '/polliana' },
    { nome: 'Ana Carolina Borduan', cargo: 'Recepcionista', foto: ana, link: '/ana' },
  ];

  return (
    <Section>
      <Title>Equipe</Title>
      <TeamGrid>
        {equipe.map((membro, index) => (
          <MemberCard
            key={index}
            isHovered={hoveredCard !== null && hoveredCard !== index} // Verifica se o card não está sendo hoverado
            onMouseEnter={() => setHoveredCard(index)} // Quando o mouse entra, seta o card como hoverado
            onMouseLeave={() => setHoveredCard(null)} // Quando o mouse sai, limpa o hover
          >
            <Link to={membro.link}>
              <img src={membro.foto} alt={membro.nome} />
              <h3>{membro.nome}</h3>
              <p>{membro.cargo}</p>
            </Link>
          </MemberCard>
        ))}
      </TeamGrid>
    </Section>
  );
}

export default Equipe;
