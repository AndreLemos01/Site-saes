// src/components/Footer.js (MODIFICADO para corrigir o erro 'spyCallbacks')

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaFacebookF, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'; 
// REMOVIDO: A importação de 'animateScroll as scroll' de 'react-scroll' para eliminar o erro de spyCallbacks.

// Importa a imagem do logo negativo
import SaesLogo from '../images/saes_marca_principal_negativa2.png'; 

// FUNÇÃO NATIVA DE SCROLL SUAVE PARA SUBSTITUIR scroll.scrollTo
const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
        // Rola até o elemento de forma suave
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Adiciona um pequeno atraso para aplicar um offset, contornando o navbar fixo.
        setTimeout(() => {
             const offset = 100;
             window.scrollBy(0, -offset);
        }, 100);
    }
};


// --- Cores e Constantes (Baseado no seu código original) ---
const PRIMARY_COLOR = 'rgb(243, 146, 0)'; // Laranja de destaque
const BACKGROUND_COLOR = 'rgb(65, 64, 66)'; // Cinza escuro do Footer

const FooterWrapper = styled.footer.attrs(() => ({ id: "contato" }))`
  background-color: ${BACKGROUND_COLOR};
  color: white;
  padding: 4rem 8%; 
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.5fr; 
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); 

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 2rem;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr; 
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  min-width: 250px;
  
  @media (max-width: 550px) {
    align-items: center;
    text-align: center;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${PRIMARY_COLOR};
  font-weight: 600;
  text-transform: uppercase;
  
  @media (max-width: 550px) {
    margin-top: 1rem;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  
  @media (max-width: 550px) {
    text-align: center; 
  }
`;

const FooterListItem = styled.li`
  margin: 0.5rem 0;
`;

// Estilo unificado e moderno para links (usado para internos e externos)
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
  padding-bottom: 2px;
  position: relative;
  
  &:hover {
    color: ${PRIMARY_COLOR};
    border-bottom: 1px solid ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
  padding-bottom: 2px;
  position: relative;
  
  &:hover {
    color: ${PRIMARY_COLOR};
    border-bottom: 1px solid ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

const LinkWithIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  
  svg {
      color: ${PRIMARY_COLOR};
      margin-right: 10px;
      font-size: 1.1rem;
      flex-shrink: 0;
  }
  
  a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
      
      &:hover {
          color: ${PRIMARY_COLOR};
      }
  }
  
  p {
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      font-size: 0.95rem;
  }
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 550px) {
    justify-content: center;
    width: 100%;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${PRIMARY_COLOR};
    transform: translateY(-2px); 
  }
`;

// Componente para o bloco de endereços
const AddressBlock = styled.div`
  margin-bottom: 1rem;
  
  p {
    margin: 0;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.4;
  }
  
  strong {
    color: white;
    font-weight: 500;
  }
`;

// Styled Component para o bloco inferior
const FooterText = styled.p`
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

const FooterLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto 1.5rem auto;
  cursor: pointer;
  
  img {
    max-width: 180px;
    height: auto;
    opacity: 0.9;
    transition: opacity 0.3s;
    
    &:hover {
        opacity: 1;
    }
  }
`;


function Footer() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryID, setCategoryID] = useState(null);
  const navigate = useNavigate();

  // FUNÇÃO PARA ROLAR PARA O TOPO (SUBSTITUI scroll.scrollToTop)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // FUNÇÃO PARA TRATAR O LINK ÂNCORA (SUBSTITUI scroll.scrollTo)
  const handleAnchorLink = (id) => {
    if (window.location.pathname !== '/') {
      // Se não estiver na home, navega para a home e adiciona o hash
      navigate(`/#${id}`);
    } else {
      // Se estiver na home, rola suavemente para o elemento usando a função nativa
      scrollToElement(id);
    }
  };

  // MANTÉM A LÓGICA DE FETCH DA API DO WORDPRESS (Sem Alterações)
  useEffect(() => {
    fetch('https://www.saesadvogados.com.br/wp-json/wp/v2/categories')
      .then(res => res.json())
      .then(data => {
        const artigos = data.find(c => c.name === 'Artigos');
        if (artigos) setCategoryID(artigos.id);
        else setError('Categoria "Artigos" não encontrada.');
      })
      .catch(() => setError('Erro ao buscar categorias'));
  }, []);

  useEffect(() => {
    if (categoryID) {
      fetch(`https://www.saesadvogados.com.br/wp-json/wp/v2/posts?per_page=6&categories=${categoryID}&_embed`) 
        .then(res => res.json())
        .then(data => {
          const unique = data.filter(a => a.title.rendered !== "Newsletter Saes Advogados &#8211; 225");
          setArticles(unique);
          setLoading(false);
        })
        .catch(() => {
          setError('Erro ao carregar artigos');
          setLoading(false);
        });
    }
  }, [categoryID]);
  


  return (
    <FooterWrapper>
      <FooterContent>
        
        {/* SEÇÃO 1: LINKS DE NAVEGAÇÃO E INSTITUCIONAL */}
        <FooterSection>
          <FooterTitle>Navegação</FooterTitle>
          <FooterList>
            {/* Links de Scroll Suave para a Home */}
            <FooterListItem><ExternalLink onClick={() => handleAnchorLink('noticias')}>Início</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink onClick={() => handleAnchorLink('quem-somos')}>Quem Somos</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink onClick={() => handleAnchorLink('atuacao')}>Atuação</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink onClick={() => handleAnchorLink('equipe')}>Equipe</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink onClick={() => handleAnchorLink('newsletter')}>Newsletter</ExternalLink></FooterListItem>
            {/* Links de Rotas Normais */}
            <FooterListItem><StyledLink to="/escritorio">O Escritório</StyledLink></FooterListItem>
            <FooterListItem><StyledLink to="/contato">Contato</StyledLink></FooterListItem>
          </FooterList>
        </FooterSection>

        {/* SEÇÃO 2: BLOG - ARTIGOS RECENTES */}
        <FooterSection>
          <FooterTitle>Artigos Recentes</FooterTitle>
          <FooterList>
            {loading && <FooterListItem><em>Carregando artigos...</em></FooterListItem>}
            {error && <FooterListItem style={{color: PRIMARY_COLOR}}>{error}</FooterListItem>}
            {articles.slice(0, 5).map(article => (
              <FooterListItem key={article.id}>
                <StyledLink to={`/article/${article.id}`}>
                  {article.title.rendered.slice(0, 45)}{article.title.rendered.length > 45 ? '...' : ''}
                </StyledLink>
              </FooterListItem>
            ))}
          </FooterList>
          {/* Link para a página de artigos completos */}
          <StyledLink to="/artigos" style={{marginTop: '1rem', display: 'block'}}>
              Ver todos os Artigos
          </StyledLink>
        </FooterSection>

        {/* SEÇÃO 3: CONTATO E ENDEREÇO */}
        <FooterSection style={{ minWidth: 'auto' }}>
          <FooterTitle>Fale Conosco</FooterTitle>
          
          {/* Contatos por email */}
          <LinkWithIcon>
            <FaEnvelope /> 
            <a href="mailto:contato@saesadvogados.com.br">contato@saesadvogados.com.br</a>
          </LinkWithIcon>
          
          {/* Telefones */}
          <LinkWithIcon>
            <FaPhone />
            <ExternalLink href="tel:+554830245590">(48) 3024-5590 (SC)</ExternalLink>
          </LinkWithIcon>

          <LinkWithIcon>
            <FaPhone />
            <ExternalLink href="tel:+551135399036">(11) 3539-9036 (SP)</ExternalLink>
          </LinkWithIcon>
          
          <FooterTitle style={{marginTop: '2rem'}}>Nossas Sedes</FooterTitle>
          
          {/* Blocos de Endereço */}
          <LinkWithIcon>
            <FaMapMarkerAlt />
            <AddressBlock>
              <p><strong>Florianópolis:</strong> Av. Trompowsky, 291, Torre II, Cj 1104, Centro</p>
            </AddressBlock>
          </LinkWithIcon>

          <LinkWithIcon>
            <FaMapMarkerAlt />
            <AddressBlock>
              <p><strong>Rio de Janeiro:</strong> Av. Rio Branco, 4, Cj 1104, Centro</p>
            </AddressBlock>
          </LinkWithIcon>
          
          <LinkWithIcon>
            <FaMapMarkerAlt />
            <AddressBlock>
              <p><strong>São Paulo:</strong> Av. Eng. Luiz Carlos Berrini, 105, Cj 1902, Cidade Monções</p>
            </AddressBlock>
          </LinkWithIcon>
          
          {/* Redes Sociais */}
          <SocialLinks>
            <SocialIcon href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIcon>
            <SocialIcon href="https://www.instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIcon>
            <SocialIcon href="https://www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebookF /></SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterLogoContainer onClick={scrollToTop}>
        <img src={SaesLogo} alt="Logo SAES Advogados" />
      </FooterLogoContainer>
      
      <FooterText>© {new Date().getFullYear()} SAES ADVOGADOS. Todos os direitos reservados.</FooterText>
    </FooterWrapper>
  );
}

export default Footer;