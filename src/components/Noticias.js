import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Importando o Link para navegação
import styled from 'styled-components'; // Importando styled-components para estilização

// Estilizações usando styled-components
const NoticiasSection = styled.section`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-out;

  &:hover .navegacao {
    opacity: 1;
  }
`;

const Noticia = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3rem;
  color: black;
  background-image: url(${(props) => props.$bg || 'https://via.placeholder.com/1600x900'});  // Usando a prop $bg
  transition: background-image 0.8s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
`;

const TextoContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 90%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  transform: translateY(-40%);
`;

const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #f66b0a;  // Título em laranja
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
`;

const Descricao = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: white;
  font-weight: 400;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
`;

const Botao = styled.button`
  width: 220px;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  background-color: transparent;  // Fundo transparente
  border: 2px solid #f66b0a;  // Contorno laranja
  border-radius: 8px;
  color: #f66b0a;  // Texto em laranja
  cursor: pointer;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
  font-weight: 500;

  &:hover {
    background-color: #f66b0a;  // Fundo laranja ao passar o mouse
    color: white;  // Texto branco quando o mouse estiver em cima
    box-shadow: 0px 5px 15px rgba(255, 105, 0, 0.3);
  }

  svg {
    font-size: 1.6rem;
  }
`;

const Navegacao = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;

  & > button {
    pointer-events: all;
  }
`;

const BotaoSeta = styled.button`
  background: transparent;  // Fundo transparente
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50%;
  padding: 8px;

  &:hover {
    background: rgba(0, 0, 0, 0.6);  // Leve fundo escuro ao passar o mouse
  }
`;

const BolinhasContainer = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 15px;
`;

const Bolinha = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #f66b0a;
  background-color: ${(props) => (props.preenchido ? '#f66b0a' : 'transparent')};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 105, 0, 0.7);
  }
`;

// Função para buscar as notícias do blog WordPress
const fetchNoticias = async () => {
  try {
    const response = await fetch('https://www.saesadvogados.com.br/wp-json/wp/v2/posts?categories=13');
    const data = await response.json();

    const mediaUrls = await Promise.all(data.map(async (post) => {
      const mediaResponse = await fetch(`https://www.saesadvogados.com.br/wp-json/wp/v2/media/${post.featured_media}`);
      const mediaData = await mediaResponse.json();
      return mediaData.source_url;
    }));

    return data.map((post, index) => ({
      titulo: post.title.rendered,
      descricao: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
      imagem: mediaUrls[index] || 'https://via.placeholder.com/1600x900',
      link: post.link,
      id: post.id // Adicionando o ID para passar para a ArticlePage
    }));
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const carregarNoticias = async () => {
      const noticiasDoBlog = await fetchNoticias();
      setNoticias(noticiasDoBlog);
    };

    carregarNoticias();

    const intervalo = setInterval(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % noticias.length);
    }, 10000);

    return () => clearInterval(intervalo);
  }, [noticias.length]);

  const proximaNoticia = () => {
    setIndexAtual((prevIndex) => (prevIndex + 1) % noticias.length);
  };

  const noticiaAnterior = () => {
    setIndexAtual((prevIndex) => (prevIndex - 1 + noticias.length) % noticias.length);
  };

  const trocarNoticia = (index) => {
    setIndexAtual(index);
  };

  return (
    <NoticiasSection id="inicio">
      {noticias.length > 0 && (
        <Noticia $bg={noticias[indexAtual].imagem}>
          <Overlay />
          <TextoContainer>
            <Titulo>{noticias[indexAtual].titulo}</Titulo>
            <Descricao>{noticias[indexAtual].descricao}</Descricao>
            <Botao>
              <Link to={`/article/${noticias[indexAtual].id}`} style={{ textDecoration: 'none', color: 'orange' }}> 
                <span>+</span>
                Saiba Mais
              </Link>
            </Botao>
          </TextoContainer>
        </Noticia>
      )}

      <Navegacao className="navegacao">
        <BotaoSeta onClick={noticiaAnterior}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </BotaoSeta>
        <BotaoSeta onClick={proximaNoticia}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </BotaoSeta>
      </Navegacao>

      <BolinhasContainer>
        {noticias.map((_, index) => (
          <Bolinha
            key={index}
            preenchido={index === indexAtual}
            onClick={() => trocarNoticia(index)} // Troca a notícia ao clicar na bolinha
          />
        ))}
      </BolinhasContainer>
    </NoticiasSection>
  );
}

export default Noticias;
