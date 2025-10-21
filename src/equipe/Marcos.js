// src/equipe/Marcos.js

import React, { useEffect } from 'react'; 
import styled from 'styled-components'; 
import { FaLinkedinIn, FaEnvelope, FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importante para links internos

// Importa a imagem de Marcos
import MarcosImage from '../images/marcos.jpg'; 

// =========================================================================
// ESTILOS REUTILIZADOS
// =========================================================================

const PageContainer = styled.div`
  padding-top: 180px; 
  padding-bottom: 4rem;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.card}; 
`;

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 900px; 
  margin: 0 auto; 
  padding: 40px; 
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    margin-left: 5%;
    margin-right: 5%;
    padding: 30px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 30px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin: 0 auto 20px auto;
  }
`;

const Info = styled.div`
  flex-grow: 1;
`;

const Nome = styled.h2`
  color: ${({ theme }) => theme.primary};
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1.8rem;
`;

const Cargo = styled.h3`
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 15px;
  font-size: 1.1rem;
  font-weight: 400;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// O IconLink deve ser capaz de ser um <a> externo OU um <Link> interno
// Ele foi redefinido para ser styled.a
const IconLink = styled.a`
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

const Descricao = styled.p`
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
`;

const DetalheContainer = styled.div`
  margin-top: 20px;
`;

const DetalheTitle = styled.h4`
  color: ${({ theme }) => theme.primary};
  font-size: 1.3rem;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid ${({ theme }) => theme.border};
`;

const DetalheItem = styled.li`
  color: ${({ theme }) => theme.text};
  margin-bottom: 8px;
  font-size: 1rem;
  line-height: 1.5;
`;

const DetalheList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// DetalheLink é um styled-component baseado no Link do React Router
const DetalheLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

// =========================================================================
// CONTEÚDO ESPECÍFICO DE MARCOS
// =========================================================================

function Marcos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <CardWrapper>
        <Header>
          <ProfileImage src={MarcosImage} alt="Marcos Saes" />
          <Info>
            <Nome>Marcos Saes</Nome>
            <Cargo>Sócio-Fundador</Cargo>
            <Descricao>
                Membro do Comitê de Direito Ambiental da OAB/SP. Pós-graduado em Direito Ambiental e Urbanístico pela Pontifícia Universidade Católica de São Paulo – PUC/SP. Bacharel em Direito pela Universidade Presbiteriana Mackenzie.
            </Descricao>
            <IconContainer>
              <IconLink 
                href="https://www.linkedin.com/in/marcossaes/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </IconLink>
              <IconLink 
                href="mailto:marcos@saesadvogados.com.br"
                title="E-mail"
              >
                <FaEnvelope />
              </IconLink>
              {/* CORRIGIDO: O IconLink é forçado a renderizar como o componente Link do React Router. */}
              <IconLink 
                as={Link} // Força o componente a usar o React Router Link
                to="/equipe/marcos/artigos" // Rota interna
                title="Artigos e Textos"
              >
                <FaBookOpen />
              </IconLink>
            </IconContainer>
          </Info>
        </Header>

        <DetalheContainer>
          <DetalheTitle>Experiência e Atuação</DetalheTitle>
          <DetalheList>
            <DetalheItem>Experiência em Licenciamento Ambiental e Urbanístico, Due Diligence Ambiental, Consultoria e Contencioso Ambiental.</DetalheItem>
            <DetalheItem>Atua em diversos setores da economia, como Agronegócio, Imobiliário, Saneamento, Energia e Indústria.</DetalheItem>
            <DetalheItem>Atendimento a clientes nacionais e estrangeiros em questões regulatórias e de conformidade legal.</DetalheItem>
          </DetalheList>
        </DetalheContainer>

        <DetalheContainer>
          <DetalheTitle>Publicações e Eventos</DetalheTitle>
          <DetalheList>
            <DetalheItem>
                {/* CORRIGIDO: Usando DetalheLink (que já é styled(Link)) com a prop 'to' */}
                <DetalheLink to="/equipe/marcos/artigos">
                    Artigos e Textos (Ver Arquivo Completo)
                </DetalheLink>
            </DetalheItem>
            <DetalheItem>
                <ExternalLink 
                    href="https://www.saesadvogados.com.br/category/novidades-legislativas/"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Novidades Legislativas (Ver Arquivo Completo)
                </ExternalLink>
            </DetalheItem>
            <DetalheItem>Palestrante em diversos eventos sobre Direito Ambiental e Urbanístico.</DetalheItem>
          </DetalheList>
        </DetalheContainer>

        <DetalheContainer>
          <DetalheTitle>Idiomas</DetalheTitle>
          <DetalheList>
            <DetalheItem>Português</DetalheItem>
            <DetalheItem>Inglês</DetalheItem>
          </DetalheList>
        </DetalheContainer>
      </CardWrapper>
    </PageContainer>
  );
}

export default Marcos;