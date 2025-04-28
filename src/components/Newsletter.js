import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 10%;
  background: linear-gradient(45deg, rgb(243, 146, 0), rgb(150, 150, 150), rgb(243, 146, 0)); 
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Left = styled.div`
  flex: 1;
  min-width: 300px;

  h2 {
    font-size: 1.8rem;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: white;
    line-height: 1.8;
    max-width: 500px;
  }
`;

const Right = styled.form`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 0.5rem 0;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid white;
  background: transparent;
  color: white;
  outline: none;
  transition: border-color 0.3s;

  &::placeholder {
    color: #f0f0f0;
  }

  &:focus {
    border-bottom: 2px solid white;
  }
`;

const Button = styled.button`
  width: 200px;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;

  &:hover {
    background-color: white;
    color: rgb(243, 146, 0);
  }
`;

function Newsletter() {
  return (
    <Section>
      <Left>
        <h2>Newsletter</h2>
        <p>
          Cadastre-se para receber nossa newsletter
          <br />
          e ficar a par das principais novidades
          <br />
          sobre a legislação ambiental aplicada
          <br />
          aos diversos setores econômicos.
        </p>
      </Left>

      <Right>
        <Input type="text" placeholder="Nome completo" required />
        <Input type="email" placeholder="E-mail" required />
        <Input type="text" placeholder="Endereço" required />
        <Input type="tel" placeholder="Celular" required />
        <Button type="submit">Cadastrar</Button>
      </Right>
    </Section>
  );
}

export default Newsletter;




