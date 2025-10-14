// src/components/MembroModal.js (FINAL)

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai'; 
import { FaFileAlt, FaChalkboardTeacher, FaLinkedinIn } from 'react-icons/fa'; 
import seloAdmirado from '../images/selo-escritorio-admirado-2025.png'; 

// Keyframes para a animação do modal
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
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 12px;
  width: 90%;
  max-width: 1000px; 
  max-height: 90vh;
  overflow-y: auto;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: ${slideDown} 0.3s ease-out;
  margin: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 1.5rem;
  color: #333;

  &:hover {
    color: #F39C12;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 3rem;
  
  @media (max-width: 900px) { 
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const LeftColumn = styled.div`
    flex: 0 0 300px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 10px; 
    
    @media (max-width: 900px) {
        flex: 1; 
        width: 100%;
    }
`;

const RightColumn = styled.div`
    flex: 1; 
    text-align: justify;

    @media (max-width: 900px) {
        padding-top: 1rem;
        border-top: 1px solid #eee;
    }
`;

const ImageAndSealRow = styled.div`
    display: flex;
    gap: 0.5rem; 
    align-items: flex-start;
    flex-shrink: 0; 
    
    @media (max-width: 900px) {
        justify-content: center;
    }
`;

const ProfileImage = styled.img`
  width: 250px; 
  height: 250px; 
  object-fit: cover;
  object-position: top;
  border-radius: 12px;
`;

const SealImage = styled.img`
    width: 100px; 
    height: auto;
    margin-top: 15px; 
`;

const HeaderText = styled.div`
  text-align: center; 
  margin-top: 1rem;
`;

const Name = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  color: #2C3E50;
  font-weight: 600;
`;

const JobTitle = styled.p`
  font-size: 1rem;
  color: #F39C12;
  font-weight: 600;
  margin: 0.5rem 0 0;
`;

const CurriculoContainer = styled.div`
  white-space: pre-wrap;
  text-align: justify;
  line-height: 1.8;
  color: #34495E;
  font-size: 1rem;

  p {
    margin-bottom: 1.5rem;
    &:first-child { margin-top: 0; }
    &:last-child { margin-bottom: 0; }
  }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    justify-content: flex-start; 

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const ActionButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    background-color: transparent;
    border: 2px solid #F39C12;
    color: #333;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
    width: 100%;
    max-width: 250px;

    &:hover {
        background-color: #F39C12;
        color: white;
        border-color: #F39C12;
    }

    svg {
        margin-right: 0.5rem;
        font-size: 1.1rem;
    }
`;

const ContactButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #eee;
    
    @media (min-width: 900px) {
        align-items: flex-start;
    }
`;

const ContactLink = styled.a`
    display: flex;
    align-items: center;
    color: #34495E; 
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
        color: #F39C12;
    }

    svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
        color: #F39C12;
    }
`;


// Função utilitária para formatar o currículo com parágrafos E links
const formatCurriculo = (text, membro) => {
  if (!text) return <p>Currículo não disponível no momento.</p>;

  // 1. Quebra a string por linhas duplas para formar parágrafos
  const paragraphs = text.trim().split('\n').filter(p => p.trim() !== '');
  
  if (paragraphs.length === 0) return <p>Currículo não disponível no momento.</p>;

  // 2. Cria uma expressão regular para o email e linkedin
  const emailRegex = membro.email ? new RegExp(membro.email.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi') : null;
  const linkedinRegex = /o seu linkedin|seu linkedin|seu Linkedin|Linkedin/gi;

  const replaceTextWithLinks = (paragraph) => {
    let content = paragraph;
    
    // 2.1 Substitui o email por um link mailto
    if (emailRegex) {
        content = content.replace(emailRegex, (match) => 
            `<a href="mailto:${membro.email}" style="color: #F39C12; text-decoration: none;">${match}</a>`
        );
    }

    // 2.2 Substitui a palavra "linkedin" por um link
    if (membro.linkedin_url) {
        content = content.replace(linkedinRegex, (match) => 
            `<a href="${membro.linkedin_url}" target="_blank" rel="noopener noreferrer" style="color: #F39C12; text-decoration: none;">${match}</a>`
        );
    }
    
    return content;
  };

  // 3. Mapeia os parágrafos em elementos <p> com o conteúdo formatado
  return paragraphs.map((p, index) => {
    const htmlContent = replaceTextWithLinks(p);
    // Usa dangerouslySetInnerHTML porque estamos injetando HTML seguro (apenas links)
    return <p key={index} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  });
};


const MembroModal = ({ membro, onClose }) => {
  if (!membro) return null;

  const { imagem, nome, cargo, curriculo, email, linkedin_url, artigos_url, cursos_url } = membro;

  // Lógica de verificação para botões e selo
  const isMarcos = nome.includes('Marcos André Bruxel Saes');
  const showArtigos = artigos_url && (isMarcos || nome.includes('Gleyse Gulin') || nome.includes('Manuela K Hermenegildo Andriani'));
  const showCursos = cursos_url && isMarcos;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}> 
        <CloseButton onClick={onClose}>
          <AiOutlineClose />
        </CloseButton>
        
        <ContentWrapper>
            
            <LeftColumn>
                <ImageAndSealRow>
                    <ProfileImage src={imagem} alt={nome} />
                    {isMarcos && (
                        <SealImage 
                            src={seloAdmirado} 
                            alt="Advogado Admirado" 
                        />
                    )}
                </ImageAndSealRow>
            
                <HeaderText>
                    <Name>{nome}</Name>
                    <JobTitle>{cargo}</JobTitle>
                </HeaderText>

                {/* Contatos na coluna da esquerda, embaixo da foto */}
                {(email || linkedin_url) && (
                    <ContactButtonContainer>
                        {linkedin_url && (
                             <ContactLink href={linkedin_url} target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn /> LinkedIn
                            </ContactLink>
                        )}
                        {email && (
                            <ContactLink href={`mailto:${email}`}>
                                <AiOutlineMail /> {email}
                            </ContactLink>
                        )}
                    </ContactButtonContainer>
                )}
            </LeftColumn>

            <RightColumn>
                <CurriculoContainer>
                    {formatCurriculo(curriculo, membro)} 
                </CurriculoContainer>

                {/* Botões de Ação Dinâmicos */}
                {(showArtigos || showCursos) && (
                    <ButtonContainer>
                        {showArtigos && (
                            <ActionButton 
                                href={artigos_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaFileAlt /> Artigos e Textos
                            </ActionButton>
                        )}
                        
                        {showCursos && (
                            <ActionButton 
                                href={cursos_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaChalkboardTeacher /> Cursos e Palestras
                            </ActionButton>
                        )}
                    </ButtonContainer>
                )}
            </RightColumn>

        </ContentWrapper>

      </ModalContent>
    </ModalOverlay>
  );
};

export default MembroModal;