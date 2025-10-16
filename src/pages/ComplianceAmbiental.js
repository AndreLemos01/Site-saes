// src/pages/ComplianceAmbiental.js

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const PageContainer = styled.div`
  /* Padding-top mantido para evitar sobreposição da Navbar */
  padding-top: 180px; 
  padding-bottom: 4rem;
  min-height: 90vh;
  background-color: #f4f4f4; /* Fundo cinza da página */
`;

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 8px; /* Borda levemente arredondada para o card */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Sombra sutil para destacar o card */
  max-width: 960px; /* Largura máxima do card */
  margin: 0 auto; /* Centraliza o card na página */
  padding: 40px 10%; /* Espaçamento interno (padding) do card */
  
  /* Ajuste para telas menores */
  @media (max-width: 1200px) {
    /* Adiciona margem lateral para telas que não atingem o max-width */
    margin-left: 5%;
    margin-right: 5%;
  }

  @media (max-width: 768px) {
    padding: 30px 5%;
    margin-left: 0;
    margin-right: 0;
    border-radius: 0; /* Remove border-radius em telas muito pequenas */
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const ContentBlock = styled.div`
  max-width: 900px; /* Mantém a largura máxima do texto para legibilidade */
  margin: 0 auto 3rem; /* Centraliza o bloco de conteúdo dentro do CardWrapper */
  text-align: justify;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #34495E;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h2`
  font-size: 1.3rem;
  color: #F39C12;
  margin: 2rem 0 1rem;
  font-weight: 600;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  
  a {
    color: #F39C12; /* Cor principal */
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;


function ComplianceAmbiental() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    // Lista de serviços, excluindo a página atual (Compliance Ambiental)
    const services = [
        { name: 'Licenciamento Ambiental e Urbanístico', path: '/servicos/licenciamento-ambiental-urbanistico' },
        { name: 'Due Diligence Ambiental e Análise de Risco', path: '/servicos/due-diligence-ambiental-e-analise-de-risco' },
        { name: 'Pareceres e Opiniões Legais', path: '/servicos/pareceres-e-opinioes-legais' },
        { name: 'Conflitos Ambientais', path: '/servicos/conflitos-ambientais' },
        { name: 'Outros serviços', path: '/servicos/outros-servicos' },
    ];

    return (
        <PageContainer>
            <CardWrapper>
                <Title>Compliance Ambiental</Title>

                <ContentBlock>
                    <Paragraph>
                        A equipe do Saes Advogados tem experiência na elaboração de programas de compliance e normatização de processos internos para orientar e garantir o cumprimento a normas nacionais e internacionais, bem como à política interna de empresas. Além disso, seus advogados fornecerem treinamento interno para as equipes das empresas, com vistas a sua melhor implementação. O objetivo principal desses produtos é esclarecer e padronizar todas as condutas a serem adotadas pelas empresas e terceirizados, com vistas a orientá-los de forma clara e objetiva quanto as suas responsabilidades perante a sociedade, dar conhecimento sobre os aspectos ambientais de suas atividades e auxiliá-los na implantação das melhores práticas ambientais.
                    </Paragraph>
                    <Paragraph>
                        Os manuais e normativos são moldados conforme a necessidade de cada cliente e visam, também, tornar as empresas aptas para aos processos de certificação ambiental da ISO 14.001.
                    </Paragraph>
                    
                    <ServiceTitle>Conheça mais serviços:</ServiceTitle>
                    
                    <ServicesList>
                        {services.map((service, index) => (
                            <ServiceItem key={index}>
                                <RouterLink to={service.path}>
                                    {service.name}
                                </RouterLink>
                            </ServiceItem>
                        ))}
                    </ServicesList>

                </ContentBlock>
            </CardWrapper>
        </PageContainer>
    );
}

export default ComplianceAmbiental;