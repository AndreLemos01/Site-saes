import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ArticlePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

const ImageBanner = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.bg || 'https://via.placeholder.com/1600x900'});
  background-size: cover;
  background-position: center;
  filter: brightness(50%);
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const ArticleContent = styled.div`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 20px;

  a {
    color: #f39200;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: #333;
    }
  }
`;

const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #f39200;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
  margin-top: 20px;
  width: 200px;
  align-self: center;

  &:hover {
    background-color: #d17a00;
  }
`;

const ArticlePage = () => {
  const { id } = useParams();  // Captura o id da URL
  const [article, setArticle] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null); // Para armazenar a URL da imagem de destaque

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página ao carregar

    // Buscar os dados do artigo
    fetch(`https://www.saesadvogados.com.br/wp-json/wp/v2/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data);
        
        // Buscar a imagem de destaque com base no ID de featured_media
        if (data.featured_media) {
          fetch(`https://www.saesadvogados.com.br/wp-json/wp/v2/media/${data.featured_media}`)
            .then((mediaResponse) => mediaResponse.json())
            .then((mediaData) => {
              setFeaturedImage(mediaData.source_url); // Armazena a URL da imagem de destaque
            })
            .catch((error) => console.error('Erro ao carregar a imagem de destaque:', error));
        }
      })
      .catch((error) => console.error('Erro ao carregar artigo:', error));
  }, [id]);

  if (!article) {
    return <div>Carregando...</div>;
  }

  return (
    <ArticlePageContainer>
      {/* Imagem de Destaque */}
      <ImageBanner bg={featuredImage} />

      <ContentContainer>
        {/* Título do Artigo */}
        <Title>{article.title.rendered}</Title>

        {/* Conteúdo do Artigo */}
        <ArticleContent dangerouslySetInnerHTML={{ __html: article.content.rendered }} />

        {/* Botão de Voltar */}
        <BackButton onClick={() => window.history.back()}>Voltar</BackButton>
      </ContentContainer>
    </ArticlePageContainer>
  );
};

export default ArticlePage;

