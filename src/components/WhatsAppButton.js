// src/components/WhatsAppButton.js

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

// Número de telefone para o qual a mensagem será enviada (formato internacional)
const WHATSAPP_NUMBER = '5521981085554'; 
// Mensagem inicial opcional
const DEFAULT_MESSAGE = 'Olá, gostaria de saber mais sobre os serviços ambientais do Saes Advogados.';

// Animação de pulsação suave
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const ButtonLink = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366; /* Cor oficial do WhatsApp */
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000; /* Garante que fique acima de outros elementos */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  /* Adiciona a animação de pulsação */
  animation: ${pulse} 2s infinite;

  &:hover {
    color: #FFF;
    transform: scale(1.1);
    animation: none; /* Remove pulsação ao interagir */
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
    font-size: 24px;
  }
`;

function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <ButtonLink 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp />
    </ButtonLink>
  );
}

export default WhatsAppButton;