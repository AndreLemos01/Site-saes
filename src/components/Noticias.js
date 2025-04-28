import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Definições de styled-components
const NoticiasSection = styled.section`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover .navegacao {
    opacity: 1;
  }
`;

const Noticia = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3rem;
  color: black;
  background-image: url(${props => props.bg || 'https://via.placeholder.com/1600x900'});
  transition: background-image 0.8s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.6);
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
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: orange;  // Título laranja
`;

const Descricao = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const Botao = styled.button`
  width: 200px;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  background-color: white;
  border: 2px solid orange;
  border-radius: 8px;
  color: black;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;

  &:hover {
    background-color: orange;
    color: white;
  }

  svg {
    font-size: 1.5rem;
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
  background: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;
  color: white;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: black;
  }
`;

const BolinhasContainer = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const Bolinha = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid orange;
  background-color: ${(props) => (props.preenchido ? 'orange' : 'transparent')};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 165, 0, 0.7);
  }
`;

// Função para buscar notícias do blog WordPress
const fetchNoticias = async () => {
  try {
    const response = await fetch('https://www.saesadvogados.com.br/wp-json/wp/v2/posts?categories=13');
    const data = await response.json();

    console.log("Dados recebidos:", data);

    const mediaUrls = await Promise.all(data.map(async (post) => {
      const mediaResponse = await fetch(`https://www.saesadvogados.com.br/wp-json/wp/v2/media/${post.featured_media}`);
      const mediaData = await mediaResponse.json();
      return mediaData.source_url;
    }));

    return data.map((post, index) => ({
      titulo: post.title.rendered,
      descricao: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
      imagem: mediaUrls[index] || 'https://via.placeholder.com/1600x900',
      link: post.link
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
        <Noticia bg={noticias[indexAtual].imagem}>
          <Overlay />
          <TextoContainer>
            <Titulo>{noticias[indexAtual].titulo}</Titulo>
            <Descricao>{noticias[indexAtual].descricao}</Descricao>
            <Botao onClick={() => window.open(noticias[indexAtual].link, '_blank')}>
              <span>+</span>
              Saiba Mais
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

