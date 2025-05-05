import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 8%;
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
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @media (max-width: 768px) {
    padding: 3rem 5%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  min-width: 280px;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    max-width: 500px;
  }
`;

const Right = styled.form`
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  position: absolute;
  left: -9999px;
`;

const Input = styled.input`
  padding: 0.8rem 0.5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid white;
  background: transparent;
  color: white;
  border-radius: 4px 4px 0 0;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &::placeholder {
    color: #eee;
    opacity: 0.9;
  }

  &:focus {
    border-color: white;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
  }
`;

const Button = styled.button`
  width: fit-content;
  padding: 0.9rem 2rem;
  font-size: 1.05rem;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: rgb(243, 146, 0);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
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
        <Label htmlFor="name">Nome completo</Label>
        <Input id="name" type="text" placeholder="Nome completo" autoComplete="name" required />

        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" placeholder="E-mail" autoComplete="email" required />

        <Label htmlFor="address">Endereço</Label>
        <Input id="address" type="text" placeholder="Endereço" autoComplete="street-address" required />

        <Label htmlFor="phone">Celular</Label>
        <Input id="phone" type="tel" placeholder="Celular" autoComplete="tel" required />

        <Button type="submit">Cadastrar</Button>
      </Right>
    </Section>
  );
}

export default Newsletter;
