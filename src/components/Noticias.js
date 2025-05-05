import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 🔸 Estilos
const NoticiasSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-image 1s ease-in-out;

  @media (max-width: 768px) {
    height: auto;
    padding: 4rem 1rem;
  }

  &:hover .navegacao {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Noticia = styled.article`
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 3rem;
  border-radius: 16px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: #f66b0a;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
`;

const Descricao = styled.p`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
`;

const LinkSemSublinhado = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Botao = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  background: transparent;
  border: 2px solid #f66b0a;
  border-radius: 8px;
  color: #f66b0a;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #f66b0a;
    color: white;
  }
`;

const Navegacao = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  z-index: 3;

  & > button {
    pointer-events: all;
  }
`;

const BotaoSeta = styled.button`
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const BolinhasContainer = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 3;
`;

const Bolinha = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #f66b0a;
  background: ${(props) => (props.ativa ? '#f66b0a' : 'transparent')};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 105, 0, 0.7);
  }
`;

const SkeletonCard = styled.div`
  width: 90%;
  height: 400px;
  background: #ddd;
  border-radius: 16px;
  animation: pulse 1.5s infinite ease-in-out;
  z-index: 2;

  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }
`;

// 🔍 Fetch de notícias
const fetchNoticias = async () => {
  try {
    const response = await fetch('https://www.saesadvogados.com.br/wp-json/wp/v2/posts?categories=13');
    const data = await response.json();

    const mediaUrls = await Promise.all(data.map(async (post) => {
      if (post.featured_media) {
        const mediaRes = await fetch(`https://www.saesadvogados.com.br/wp-json/wp/v2/media/${post.featured_media}`);
        const mediaData = await mediaRes.json();
        return mediaData.source_url;
      }
      return null;
    }));

    return data.map((post, index) => ({
      id: post.id,
      titulo: post.title.rendered,
      descricao: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
      imagem: mediaUrls[index] || 'https://via.placeholder.com/1600x900',
    }));
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    return [];
  }
};

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [indexAtual, setIndexAtual] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregar = async () => {
      const lista = await fetchNoticias();
      setNoticias(lista);
      setLoading(false);
    };
    carregar();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAtual((prev) =>
        noticias.length > 0 ? (prev + 1) % noticias.length : 0
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [noticias]);

  const trocarNoticia = (i) => {
    if (noticias.length > 0) setIndexAtual(i);
  };

  const noticia = noticias[indexAtual];

  return (
    <NoticiasSection id="inicio" $bg={noticia?.imagem}>
      <Overlay />

      {loading ? (
        <SkeletonCard />
      ) : (
        noticia && (
          <Noticia aria-label={`Notícia: ${noticia.titulo}`}>
            <Titulo>{noticia.titulo}</Titulo>
            <Descricao>{noticia.descricao}</Descricao>
            <LinkSemSublinhado to={`/article/${noticia.id}`}>
              <Botao>
                <span>+</span> Saiba Mais
              </Botao>
            </LinkSemSublinhado>
          </Noticia>
        )
      )}

      {!loading && noticias.length > 0 && (
        <>
          <Navegacao className="navegacao">
            <BotaoSeta onClick={() => setIndexAtual((prev) => (prev - 1 + noticias.length) % noticias.length)}>❮</BotaoSeta>
            <BotaoSeta onClick={() => setIndexAtual((prev) => (prev + 1) % noticias.length)}>❯</BotaoSeta>
          </Navegacao>

          <BolinhasContainer>
            {noticias.map((_, i) => (
              <Bolinha
                key={i}
                ativa={i === indexAtual}
                onClick={() => trocarNoticia(i)}
              />
            ))}
          </BolinhasContainer>
        </>
      )}
    </NoticiasSection>
  );
}

export default Noticias;
