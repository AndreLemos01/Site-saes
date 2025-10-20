// src/pages/OutrosServicos.js

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


function OutrosServicos() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    // Lista de serviços, excluindo a página atual (Outros serviços)
    const services = [
        { name: 'Licenciamento Ambiental e Urbanístico', path: '/servicos/licenciamento-ambiental-urbanistico' },
        { name: 'Due Diligence Ambiental e Análise de Risco', path: '/servicos/due-diligence-ambiental-e-analise-de-risco' },
        { name: 'Compliance Ambiental', path: '/servicos/compliance-ambiental' },
        { name: 'Pareceres e Opiniões Legais', path: '/servicos/pareceres-e-opinioes-legais' },
        { name: 'Conflitos Ambientais', path: '/servicos/conflitos-ambientais' },
    ];

    return (
        <PageContainer>
            <CardWrapper>
                <Title>Outros serviços</Title>

                <ContentBlock>
                    
                    <SectionTitle>Assessoria na elaboração de projetos de leis</SectionTitle>
                    <Paragraph>
                        Devido à constante busca por parâmetros mais modernos e adequados às necessidades das comunidades e à busca pelo desenvolvimento sustentável, a área ambiental é marcada pela edição, cada vez mais frequente, de novos atos normativos − dentre leis, decretos, resoluções, portarias e instruções normativas –, a demandar profundo entendimento de suas implicações práticas e atualização perene e criteriosa por parte daqueles influenciados por seus ditames, os quais fazem a diferença na análise da viabilidade de um empreendimento e das possibilidades de uso de um imóvel, por exemplo. Como se vê, a elaboração de um projeto de lei no tema é processo de especial importância.
                    </Paragraph>
                    <Paragraph>
                        Nesse sentido, a ampla experiência acumulada pela equipe do Saes Advogados, diariamente dedicada ao exame detalhado da legislação ambiental e de suas implicações aos seus clientes, permite-nos oferecer assessoria especializada na elaboração de projetos de lei, promovendo singular análise das consequências práticas e riscos envolvidos em cada dispositivo e o acompanhamento direto de seu trâmite junto aos órgãos legislativos, bem como assegurando a ausência de vícios no trâmite e a legalidade e constitucionalidade dos diplomas.
                    </Paragraph>

                    <SectionTitle>Auditoria ambiental</SectionTitle>
                    <Paragraph>
                        A auditoria ambiental é um instrumento de gestão e controle ambiental que tem sido utilizado com cada vez mais frequência. É obrigatória, a cada dois anos, para portos organizados e instalações portuárias, plataformas e suas instalações de apoio e refinarias. A legislação de alguns Estados, como Rio de Janeiro, Espírito Santo, Minas Gerais e Mato Grosso, também exige a auditoria ambiental compulsória para fins de acompanhamento, fiscalização e/ou renovação de licença ambiental. Diante disso, os profissionais do Saes Advogados estão capacitado tanto para compor equipes multidisciplinares encarregadas da realização de auditorias ambientais, quanto para realizar um procedimento de preparação e de adequação às exigências normativas previamente à auditoria.
                    </Paragraph>

                    <SectionTitle>Biodiversidade e Unidades de Conservação</SectionTitle>
                    <Paragraph>
                        O Saes Advogados presta assessoria jurídica nos procedimentos para obtenção de autorização para acesso ao patrimônio genético da biodiversidade junto a CGEN, IBAMA, CNPq ou IPHAN, bem como nos procedimentos de anuência junto a comunidades tradicionais, contratos de repartição de benefícios e regularização.
                    </Paragraph>
                    <Paragraph>
                        Além disso, sua equipe presta assessoria na elaboração de projetos para criação de Unidades de Conservação em todos os âmbitos federativos, realiza revisões de estudos técnicos utilizados para embasar a sua criação, faz a interface com os órgãos ambientais, bem como elabora decretos e exposições de motivos.
                    </Paragraph>

                    <SectionTitle>Cadastros técnicos e taxas ambientais</SectionTitle>
                    <Paragraph>
                        A equipe da Saes advogados está preparada para auxiliar seus clientes que exercem atividades potencialmente poluidoras ou utilizadoras de recursos naturais a regularizar-se ou isentar-se do Cadastro Técnico Federal do IBAMA (CTF/IBAMA), com a realização de um diagnóstico da situação de seus clientes, prestando auxilio no preenchimento do cadastro, elaborando defesas administrativas para os casos de autuações, justificativas para o não cadastramento, e adotando as medidas judiciais cabíveis quando for necessário.
                    </Paragraph>
                    <Paragraph>
                        Com relação ao Cadastro Ambiental Rural (CAR), instrumento este instituído pelo Novo Código Florestal (Lei nº 12.651/12) e regulamentado pelo Decreto nº 8.234/2014 e Instrução Normativa MMA nº 2/2014), exigido para todas as propriedades rurais no país. Prestamos assessoria no cadastramento das propriedades rurais, buscando assim, auxiliar nossos clientes nas tratativas com os órgãos ambientais, caso haja a necessidade da assinatura de um termo de compromisso, analisamos a situação fática da propriedade de nossos clientes, propondo a melhor forma de realizar a regularização de sua propriedade, e para os casos de áreas com vegetação excedente de reserva legal, apresentamos a melhor forma existente de incentivo econômico para cada área, a fim de oportunizar um retorno financeiro ao interessado.
                    </Paragraph>
                    
                    <SectionTitle>Florestal</SectionTitle>
                    <Paragraph>
                        Consultoria jurídica ao atendimento do Código Florestal, inscrição de propriedades e posses rurais no Cadastro Ambiental Rural, (CAR), regularização (Programa de Regularização Ambiental), habilitação de propriedades localizadas em Unidades de Conservação para fins de compensação de reserva legal e sua respectiva venda.
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

export default OutrosServicos;