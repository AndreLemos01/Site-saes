// src/pages/DueDiligenceAmbiental.js

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const PageContainer = styled.div`
  /* Padding-top mantido para evitar sobreposição da Navbar */
  padding-top: 180px; 
  padding-bottom: 4rem;
  /* Removido o padding lateral e max-width para que o card ocupe o espaço corretamente */
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

const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: #2C3E50;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
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

function DueDiligenceAmbiental() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    // Lista de serviços, excluindo a página atual
    const services = [
        { name: 'Licenciamento Ambiental e Urbanístico', path: '/servicos/licenciamento-ambiental-urbanistico' },
        { name: 'Compliance Ambiental', path: '/servicos/compliance-ambiental' },
        { name: 'Pareceres e Opiniões Legais', path: '/servicos/pareceres-e-opinioes-legais' },
        { name: 'Conflitos Ambientais', path: '/servicos/conflitos-ambientais' },
        { name: 'Outros serviços', path: '/servicos/outros-servicos' },
    ];

    return (
        <PageContainer>
            <CardWrapper>
                <Title>Due Diligence Ambiental e Análise de Risco</Title>

                <ContentBlock>
                    <Paragraph>
                        Norteada pela busca de soluções práticas e diferenciadas em matéria ambiental, a equipe do Saes Advogados possui ampla experiência em due diligence ambiental, com a análise de riscos e de passivos ambientais envolvidos na concepção, implantação e operação de projetos nos mais diversificados setores da economia, incluindo a análise da legislação vigente e restrições legais aplicáveis a cada caso.
                    </Paragraph>
                    <Paragraph>
                        Com esse intuito, nossa equipe, através do levantamento e análise de todas as informações pertinentes, dedica-se à análise aprofundada dos mais variados aspectos como adequação ao plano diretor e zoneamento, necessidade de supressão da cobertura vegetal, proximidade de unidades de conservação, presença de áreas de preservação permanente, parâmetros de emissões atmosféricas e de ruídos, entre outros.
                    </Paragraph>
                    <Paragraph>
                        Assim, a análise prévia de cunho ambiental dos projetos fornece os elementos necessários à tomada de decisão por parte do cliente e minimiza riscos, contando com a expertise de especialistas com visão executiva, voltada à criação de valor e planejamento de longo prazo, pelo que se mostra essencial uma avaliação completa e interdisciplinar, a fim de possibilitar o bom desenvolvimento de empreendimentos e facilitar as etapas de elaboração de estudos ambientais, obtenção de licenças e posterior implantação e operação.
                    </Paragraph>
                    <Paragraph>
                        Além disso, para empreendimentos já implantados ou em operação, analisa-se a adequação aos aspectos ambientais, cumprimento de condicionantes, entre outros, desenvolvendo conjuntamente com o cliente e respectivas consultorias técnicas, estratégias para o melhor atendimento de eventuais irregularidades e non compliances, avaliando-se os ricos envolvidos e propondo os devidos encaminhamentos e soluções para cada situação.
                    </Paragraph>

                    <SubTitle>Assessoria para obtenção de financiamentos</SubTitle>

                    <Paragraph>
                        As instituições financeiras vêm estabelecendo suas Políticas de Responsabilidade Socioambiental, com vistas a nortear as ações de natureza socioambiental nos seus negócios e na relação com as partes interessadas. Essas estratégias de avaliação e gerenciamento do risco socioambiental, bastante comuns nas operações financeiras estruturadas sob a forma de Project Finance, acarretam efeitos diretos aos tomadores de financiamento, que são submetidos a uma série de exigências e obrigações de ordem socioambiental para obter o financiamento e para continuar recebendo os repasses de recursos.
                    </Paragraph>
                    <Paragraph>
                        Nesse contexto, a equipe do Saes Advogados adquiriu experiência na orientação dos tomadores de financiamento para que se adequem às diretrizes socioambientais e no evidenciamento do atendimento das exigências das instituições financeiras, notadamente em casos de auditorias ambientais para verificar o cumprimento dos Princípios do Equador, garantindo assim a obtenção e a manutenção dos financiamentos bancários.
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

export default DueDiligenceAmbiental;