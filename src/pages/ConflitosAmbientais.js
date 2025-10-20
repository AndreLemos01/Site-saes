// src/pages/ConflitosAmbientais.js

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

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #2C3E50;
  margin: 2.5rem 0 1rem;
  font-weight: 700;
  text-align: left;
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


function ConflitosAmbientais() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    // Lista de serviços, excluindo a página atual (Conflitos Ambientais)
    const services = [
        { name: 'Licenciamento Ambiental e Urbanístico', path: '/servicos/licenciamento-ambiental-urbanistico' },
        { name: 'Due Diligence Ambiental e Análise de Risco', path: '/servicos/due-diligence-ambiental-e-analise-de-risco' },
        { name: 'Compliance Ambiental', path: '/servicos/compliance-ambiental' },
        { name: 'Pareceres e Opiniões Legais', path: '/servicos/pareceres-e-opinioes-legais' },
        { name: 'Outros serviços', path: '/servicos/outros-servicos' },
    ];

    return (
        <PageContainer>
            <CardWrapper>
                <Title>Conflitos Ambientais</Title>

                <ContentBlock>
                    
                    <SectionTitle>Contencioso cível, criminal e administrativo</SectionTitle>
                    <Paragraph>
                        Atuamos na defesa no âmbito de ações civis públicas, ações populares e ações penais, bem como na propositura de ações judiciais, como mandado de segurança e ações ordinárias, especialmente voltadas ao questionamento de autos de infração, tanto em primeira instância, quanto em grau de recurso junto aos Tribunais Estaduais e Regionais Federais, bem como junto aos Tribunais Superiores (STJ e STF).
                    </Paragraph>
                    <Paragraph>
                        Também trabalhamos na defesa e desconstituição de infrações administrativas, nos casos de aplicação de multa, embargo ou outras penalidades, assim como em negociações de acordos com órgãos ambientais e o Ministério Público, incluindo a assessoria na assinatura de Termo de Ajustamento de Conduta.
                    </Paragraph>

                    <SectionTitle>Inquéritos civis e penais</SectionTitle>
                    <Paragraph>
                        Considerando os riscos e prejuízos decorrentes da efetiva proposição de ações civis públicas e ações penais, o escritório oferece os serviços de acompanhamento e defesa em inquéritos civis e criminais, no âmbito do Ministério Público e de delegacia de polícia, com vistas a evitar, sempre que possível, a judicialização dos procedimentos.
                    </Paragraph>

                    <SectionTitle>Negociação de termos de ajustamento de conduta</SectionTitle>
                    <Paragraph>
                        Os termos de ajustamento de conduta ou termos de compromissos, também conhecidos como TACs ou TCs são realizados com os órgãos públicos legitimados (p. ex, órgãos ambientais, Ministério Público) quando uma pessoa física ou jurídica não está cumprindo integralmente com a legislação ambiental, quando se é exigido. Dessa forma, a equipe do Saes Advogados acompanha e representa seus clientes nas negociações desses termos, objetivando a efetiva satisfação de seus interesses, bem como assessora no monitoramento do fiel cumprimento das medidas negociadas.
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

export default ConflitosAmbientais;