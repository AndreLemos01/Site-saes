// src/pages/FuncionarioDetalhe.js (Conteúdo MODIFICADO/CRIADO)
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IoClose } from 'react-icons/io5';

// Animação de entrada do modal
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  animation: ${slideDown} 0.4s ease-out;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 25px;
  border: 4px solid ${({ theme }) => theme.primary};
  flex-shrink: 0;
`;

const Info = styled.div`
  h2 {
    color: ${({ theme }) => theme.primary};
    margin: 0;
    font-size: 1.8rem;
  }
  p {
    margin: 5px 0 0;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text}B3;
  }
`;

const Curriculum = styled.div`
  white-space: pre-wrap;
  line-height: 1.6;
  text-align: justify;

  p {
    margin-top: 15px;
  }

  strong {
      color: ${({ theme }) => theme.primary};
  }
`;

function FuncionarioDetalhe({ membro, onClose }) {
  if (!membro) return null;

  // Função para formatar o currículo com parágrafos
  const formatCurriculo = (text) => {
    // Substitui quebras de linha múltiplas por um parágrafo.
    // Preserva a quebra de linha interna se for só uma para manter a formatação original.
    const paragraphs = text.split('\n').filter(p => p.trim() !== '');
    return paragraphs.map((p, index) => <p key={index}>{p.trim()}</p>);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Fechar">
          <IoClose />
        </CloseButton>
        
        <Header>
          <ProfileImage src={membro.imagem} alt={`Foto de ${membro.nome}`} />
          <Info>
            <h2>{membro.nome}</h2>
            <p>{membro.cargo}</p>
          </Info>
        </Header>

        <Curriculum>
          {formatCurriculo(membro.curriculo)}
        </Curriculum>
      </ModalContent>
    </ModalOverlay>
  );
}

export default FuncionarioDetalhe;