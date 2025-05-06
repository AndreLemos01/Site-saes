import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import SaesLogo from '../images/saes_marca_principal_negativa2.png'; // Importa a imagem

const FooterWrapper = styled.footer.attrs(() => ({ id: "contato" }))`
  background-color: rgb(65, 64, 66);
  color: white;
  padding: 4rem 1.5rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 280px;
  line-height: 1.6;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: rgb(243, 146, 0);
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const FooterListItem = styled.li`
  margin: 0.5rem 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.2rem 0;
  position: relative;
  font-size: 0.95rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color: #999;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    background-color: rgb(243, 146, 0);
  }

  &:hover {
    color: rgb(243, 146, 0);
    cursor: pointer;
  }
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #999;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    background-color: rgb(243, 146, 0);
  }

  &:hover {
    color: rgb(243, 146, 0);
    cursor: pointer;
  }
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;

  &:hover {
    color: rgb(243, 146, 0);
  }
`;

const AddressBlock = styled.address`
  font-style: normal;
  margin-top: 1rem;

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: rgb(243, 146, 0);
  }
`;

const FooterText = styled.p`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

const FooterLogo = styled.img`
  display: block;
  margin: 3rem auto 1rem auto;
  max-width: 200px;
  height: auto;
  opacity: 0.85;
  cursor: pointer;
`;

function Footer() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryID, setCategoryID] = useState(null);

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
      fetch(`https://www.saesadvogados.com.br/wp-json/wp/v2/posts?per_page=6&categories=${categoryID}`)
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

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: true });
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Saes</FooterTitle>
          <FooterList>
            <FooterListItem><ExternalLink href="#inicio">Início</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink href="#quem-somos">Quem Somos</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink href="#atuacao">Atuação</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink href="#equipe">Equipe</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink href="#newsletter">Newsletter</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink href="/publicacoes">Publicações</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink href="/artigos">Artigos</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink href="/novidades-legislativas">Novidades Legislativas</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink href="/informativos">Informativos</ExternalLink></FooterListItem>
            <FooterListItem><ExternalLink href="#contato">Contato</ExternalLink></FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Blog</FooterTitle>
          <FooterList>
            {loading && <FooterListItem><em>Carregando artigos...</em></FooterListItem>}
            {error && <FooterListItem>{error}</FooterListItem>}
            {articles.map(article => (
              <FooterListItem key={article.id}>
                <StyledLink to={`/article/${article.id}`}>
                  {article.title.rendered}
                </StyledLink>
              </FooterListItem>
            ))}
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Entre em contato</FooterTitle>
          <p><strong>Email:</strong> <ExternalLink href="mailto:contato@saesadvogados.com.br">contato@saesadvogados.com.br</ExternalLink></p>
          <FooterTitle>Onde estamos:</FooterTitle>
          <AddressBlock>
            <p><strong>Rio de Janeiro:</strong><br />Av. Rio Branco, 4, Cj 1104/1106, Centro<br />Tel: (21) 3559.2005</p>
            <p><strong>Florianópolis:</strong><br />Av. Trompowsky, 291, Torre II, Cj 1104/1105, Centro<br />Tel: (48) 3024.5590</p>
            <p><strong>São Paulo:</strong><br />Av. Eng. Luiz Carlos Berrini, 105, Thera Office Berrini, Cj 1902, Cidade Monções<br />Tel: (11) 3539-9036</p>
          </AddressBlock>
          <SocialLinks>
            <SocialIcon href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIcon>
            <SocialIcon href="https://facebook.com" target="_blank" aria-label="Facebook"><FaFacebookF /></SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <div onClick={scrollToTop}>
        <FooterLogo src={SaesLogo} alt="Logo SAES Advogados" />
      </div>
      <FooterText>© 2025 SAES ADVOGADOS. Todos os direitos reservados.</FooterText>
    </FooterWrapper>
  );
}

export default Footer;
