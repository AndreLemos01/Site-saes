import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const FooterWrapper = styled.footer.attrs(() => ({ id: "contato" }))`
  background-color: rgb(65, 64, 66);
  color: white;
  padding: 3rem 0;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
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

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  position: relative;
  padding-right: 20px;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #555;
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
  }
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  text-align: left;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: white;
  display: inline-block;
  text-align: center;

  &:hover {
    color: rgb(243, 146, 0);
  }
`;

const FooterText = styled.p`
  margin-top: 3rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        {/* First Section */}
        <FooterSection>
          <FooterTitle>Saes</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink href="#inicio">Início</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#quem-somos">Quem Somos</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#atuacao">Atuação</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#equipe">Equipe</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#newsletter">Newsletter</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/publicacoes">Publicações</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/artigos">Artigos</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/novidades-legislativas">Novidades Legislativas</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/informativos">Informativos</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#contato">Contato</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>

        {/* Second Section */}
        <FooterSection>
          <FooterTitle>Blog</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink href="#">Última Atualização 1</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Última Atualização 2</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Última Atualização 3</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Última Atualização 4</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Última Atualização 5</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="#">Última Atualização 6</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>

        {/* Third Section */}
        <FooterSection>
          <FooterTitle>Entre em contato</FooterTitle>
          <p>contato@saesadvogados.com.br</p>
          <p><FooterTitle>Onde estamos:</FooterTitle></p>
          <p>Rio de Janeiro: Av. Rio Branco, 4, Cj 1104/1106, Centro - (21) 3559.2005</p>
          <p>Florianópolis: Av. Trompowsky, 291, Torre II, Cj 1104/1105, Centro - (48) 3024.5590</p>
          <p>São Paulo: Av. Engenheiro Luiz Carlos Berrini, 105, Thera Office Berrini, Cj 1902, Cidade Monções - (11) 3539-9036</p>
          <SocialLinks>
            <SocialIcon href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterText>© 2025 SAES ADVOGADOS. Todos os direitos reservados.</FooterText>
    </FooterWrapper>
  );
}

export default Footer;

