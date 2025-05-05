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

const SkeletonBox = styled.div`
  background-color: #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.7;
    }
  }
`;

const SkeletonImage = styled(SkeletonBox)`
  width: 100%;
  height: 300px;
`;

const SkeletonTitle = styled(SkeletonBox)`
  width: 70%;
  height: 40px;
`;

const SkeletonText = styled(SkeletonBox)`
  width: 100%;
  height: 20px;

  &:nth-child(2) {
    width: 90%;
  }

  &:nth-child(3) {
    width: 95%;
  }

  &:nth-child(4) {
    width: 85%;
  }
`;

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`https://www.saesadvogados.com.br/wp-json/wp/v2/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data);

        // Verifique se featured_media existe antes de fazer o fetch da imagem
        if (data.featured_media) {
          fetch(`https://www.saesadvogados.com.br/wp-json/wp/v2/media/${data.featured_media}`)
            .then((res) => res.json())
            .then((img) => {
              setFeaturedImage(img.source_url);
              setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Erro ao carregar artigo:', error);
        setIsLoading(false);
      });
  }, [id]);

  // Verifique se o artigo está disponível antes de renderizar
  if (!article) {
    return <div>Artigo não encontrado.</div>;
  }

  return (
    <ArticlePageContainer>
      {isLoading ? (
        <>
          <SkeletonImage />
          <ContentContainer>
            <SkeletonTitle />
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
          </ContentContainer>
        </>
      ) : (
        <>
          <ImageBanner bg={featuredImage} />
          <ContentContainer>
            <Title>{article.title?.rendered || 'Título não disponível'}</Title>
            <ArticleContent dangerouslySetInnerHTML={{ __html: article.content?.rendered || 'Conteúdo não disponível' }} />
            <BackButton onClick={() => window.history.back()}>Voltar</BackButton>
          </ContentContainer>
        </>
      )}
    </ArticlePageContainer>
  );
};

export default ArticlePage;
