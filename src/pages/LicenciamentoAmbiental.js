// src/pages/LicenciamentoAmbiental.js

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const PageContainer = styled.div`
  /* Padding-top mantido para evitar sobreposição da Navbar */
  padding-top: 180px; 
  padding-bottom: 4rem;
  padding-left: 10%;
  padding-right: 10%;
  min-height: 90vh;
  background-color: #f4f4f4;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const ContentBlock = styled.div`
  max-width: 900px;
  margin: 0 auto 3rem;
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

function LicenciamentoAmbiental() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const services = [
        // Rotas de serviços (usando placeholders baseados na URL do projeto)
        { name: 'Licenciamento Ambiental e Urbanístico', path: '/servicos/licenciamento-ambiental-urbanistico' },
        { name: 'Due Diligence Ambiental e Análise de Risco', path: '/servicos/due-diligence-ambiental-e-analise-de-risco' },
        { name: 'Compliance Ambiental', path: '/servicos/compliance-ambiental' },
        { name: 'Pareceres e Opiniões Legais', path: '/servicos/pareceres-e-opinioes-legais' },
        { name: 'Conflitos Ambientais', path: '/servicos/conflitos-ambientais' },
        { name: 'Outros serviços', path: '/servicos/outros-servicos' },
    ];

    return (
        <PageContainer>
            <Title>Licenciamento Ambiental e Urbanístico</Title>

            <ContentBlock>
                <Paragraph>
                    O Saes Advogados possui anos de consultoria jurídica no desenvolvimento de empreendimentos de grande porte, desde a concepção do projeto até sua entrada em funcionamento, o que nos garante uma visão estratégica e global do licenciamento ambiental.
                </Paragraph>
                <Paragraph>
                    Essa expertise nos permite realizar a gestão de todo o processo de licenciamento ambiental, incluindo a interface com órgãos públicos e demais atores envolvidos, bem como a integração de equipes de consultoria técnica. Também nos autoriza a prestar assessoria jurídica nos pontos chaves do licenciamento, como o enquadramento legal do empreendimento, a revisão de estudos ambientais, o suporte jurídico em audiências públicas, a realização de reuniões e contato direto com os órgãos envolvidos e o acompanhamento de inquéritos civis e penais.
                </Paragraph>
                <Paragraph>
                    No pós-licenciamento, fazemos a gestão de condicionantes de licenças ambientais, acompanhamos e revisamos planos e programas ambientais de Planos Básicos Ambientais (PBA) a serem realizados pelos empreendedores na vigência de suas licenças, além de realizar toda interface com o órgão ambiental.
                </Paragraph>
                <Paragraph>
                    Além da parte ambiental, também atuamos no licenciamento urbanístico de empreendimentos, com a análise da legislação aplicável e a verificação da adequação do projeto às normas urbanísticas, bem como, em casos de irregularidades, na avaliação das medidas cabíveis para a devida regularização do empreendimento.
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
        </PageContainer>
    );
}

export default LicenciamentoAmbiental;