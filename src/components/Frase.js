import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #fafafa;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Quote = styled.p`
  font-size: 1.8rem;
  color: #333;
  max-width: 800px;
  margin-bottom: 1rem;
  font-style: italic;
`;

const Author = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

function Frase() {
  return (
    <Section>
      <Quote>
        "Você não ganha para trabalhar, você ganha para resolver problemas, criar soluções e encantar clientes. O trabalho é o meio, não o fim."
      </Quote>
      <Author>- Ricardo Amorim -</Author>
    </Section>
  );
}

export default Frase;

