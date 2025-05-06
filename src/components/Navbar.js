import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  background: rgba(255, 255, 255, 0.8);
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

const Navbar = styled.nav`
  background-color: rgba(0, 0, 0, 0.6);
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
  color: white;
  font-size: 0.9rem;
  margin: 0 5px;
`;

const NavbarLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #f90;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 200px;
  border-radius: 8px;
  background-color: #444;
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
  color: white;

  &::placeholder {
    color: white;
  }
`;

const SearchIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: white;
  position: absolute;
  right: 10px;
  cursor: pointer; /* Lupa é clicável */
`;

const SearchBarUnderline = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #f90;
`;

function NavbarComponent() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Função de navegação para pesquisa
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`); // Navega para a página de resultados de pesquisa
    }
  };

  return (
    <TopBar>
      <LogoContainer>
        <a href="/">
          <Logo src={image} alt="Logo" />
        </a>
      </LogoContainer>

      <NavbarContainer>
        <Navbar>
          <NavbarList>
            {/* Seus itens de navegação */}
            <NavbarItem><NavbarLink href="#noticias">Início</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink href="#quem-somos">Quem Somos</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink href="#atuacao">Atuação</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink href="#equipe">Equipe</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink href="#newsletter">Contato</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink href="/newsletter">Newsletter</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink href="/publicacoes">Publicações</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink href="/artigos">Artigos</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink href="/novidades-legislativas">Novidades Legislativas</NavbarLink></NavbarItem>
            <NavbarItem><NavbarLink href="/informativos">Informativos</NavbarLink></NavbarItem>
          </NavbarList>

          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Pesquisar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // Pesquisa ao pressionar Enter
            />
            <SearchIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={handleSearch} // Pesquisa ao clicar na lupa
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="16" y1="16" x2="22" y2="22" />
            </SearchIcon>
            <SearchBarUnderline />
          </SearchContainer>
        </Navbar>
      </NavbarContainer>
    </TopBar>
  );
}

export default NavbarComponent;
