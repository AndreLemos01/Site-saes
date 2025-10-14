// src/components/Navbar.js
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Link para rotas de página
import { Link as ScrollLink } from 'react-scroll'; // Link para âncoras internas com scroll suave
import styled from 'styled-components';
import image from '../images/logo-saes.png';

const TopBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

const LogoContainer = styled.div`
  // Usando theme.card com opacidade para fundo "frosted"
  background: ${({ theme }) => theme.card}cc; 
  backdrop-filter: blur(10px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const Logo = styled.img`
  max-width: 90px;
  height: auto;
  cursor: pointer;
`;

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavbarWrapper = styled.nav`
  // Usando theme.card com opacidade para o navbar
  background-color: ${({ theme }) => theme.card}a0;
  backdrop-filter: blur(10px);
  width: 80%;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  font-size: 0.9rem;
  margin: 0 5px;
`;

// Estilo base para links (usado tanto por RouterLink quanto por ScrollLink)
const LinkStyle = styled.span`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  display: block;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.primary}; 
    transform: translateY(-1px);
  }
`;

// Componente para links de roteamento (páginas)
const NavbarRouterLink = ({ to, children }) => (
  <RouterLink to={to} style={{ textDecoration: 'none' }}>
    <LinkStyle>{children}</LinkStyle>
  </RouterLink>
);

// Componente para links de scroll (âncoras)
const NavbarScrollLink = ({ to, children }) => (
  <ScrollLink 
    to={to} 
    spy={true} 
    smooth={true} 
    offset={-100} // Ajuste para o offset fixo da barra de navegação
    duration={500}
  >
    <LinkStyle>{children}</LinkStyle>
  </ScrollLink>
);


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 200px;
  border-radius: 8px;
  // Usando cor de borda/card mais escura do tema
  background-color: ${({ theme }) => theme.border}; 
  padding: 0.5rem;
`;

const SearchInput = styled.input`
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: none;
  font-size: 0.9rem;
  outline: none;
  height: 15px;
  width: 85%;
  background-color: transparent;
  color: ${({ theme }) => theme.text}; 

  &::placeholder {
    color: ${({ theme }) => theme.text}80; // Placeholder com opacidade
  }
`;

const SearchIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.text}; 
  position: absolute;
  right: 10px;
  cursor: pointer;
  
  &:hover {
      fill: ${({ theme }) => theme.primary};
  }
`;

const SearchBarUnderline = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.primary}; 
`;

function NavbarComponent() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Uso de encodeURIComponent para URL segura
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <TopBar>
      <LogoContainer>
        {/* Uso de RouterLink para a home */}
        <RouterLink to="/"> 
          <Logo src={image} alt="Logo SAES Advogados, Voltar para a página inicial" />
        </RouterLink>
      </LogoContainer>

      <NavbarContainer>
        <NavbarWrapper>
          <NavbarList>
            {/* Links de Seção (Scroll Suave) - Usar NavbarScrollLink e 'to' com ID da seção */}
            <NavbarItem><NavbarScrollLink to="noticias">Início</NavbarScrollLink></NavbarItem>
            <NavbarItem><NavbarScrollLink to="quem-somos">Quem Somos</NavbarScrollLink></NavbarItem>
            <NavbarItem><NavbarScrollLink to="atuacao">Atuação</NavbarScrollLink></NavbarItem>
            <NavbarItem><NavbarScrollLink to="equipe">Equipe</NavbarScrollLink></NavbarItem>
            <NavbarItem><NavbarScrollLink to="newsletter">Contato</NavbarScrollLink></NavbarItem>
            
            {/* Links de Páginas (Router) - Usar NavbarRouterLink e 'to' com a ROTA */}
            <NavbarItem><NavbarRouterLink to="/escritorio">Escritório</NavbarRouterLink></NavbarItem> 
            <NavbarItem><NavbarRouterLink to="/publicacoes">Publicações</NavbarRouterLink></NavbarItem>
            <NavbarItem><NavbarRouterLink to="/artigos">Artigos</NavbarRouterLink></NavbarItem>
            <NavbarItem><NavbarRouterLink to="/novidades-legislativas">Novidades Legislativas</NavbarRouterLink></NavbarItem>
            <NavbarItem><NavbarRouterLink to="/informativos">Informativos</NavbarRouterLink></NavbarItem>
          </NavbarList>

          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Pesquisar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              aria-label="Campo de pesquisa do site"
            />
            <SearchIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={handleSearch}
              role="button"
              aria-label="Buscar"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </SearchIcon>
            <SearchBarUnderline />
          </SearchContainer>
        </NavbarWrapper>
      </NavbarContainer>
    </TopBar>
  );
}

export default NavbarComponent;