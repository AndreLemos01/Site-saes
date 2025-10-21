// src/pages/MarcosArticlesPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// URL base da API do WordPress
const API_BASE_URL = 'https://www.saesadvogados.com.br/wp-json/wp/v2';

const PageContainer = styled.div`
  /* Padding-top mantido para evitar sobreposição da Navbar */
  padding-top: 180px; 
  padding-bottom: 4rem;
  padding-left: 10%;
  padding-right: 10%;
  min-height: 90vh;
  background-color: #f4f4f4; /* Fundo padrão (pode ser ajustado com theme.card se necessário) */
`;

const ContentHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`;

const Title = styled.h1`
  margin: 0; 
  color: #2C3E50;
  font-size: 2.5rem;
  font-weight: 700;
`;

const PostGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
`;

const PostCard = styled.div`
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
    padding: 20px;
    overflow: hidden; 
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
`;

const PostTitle = styled.h2`
    font-size: 1.2rem;
    color: #2C3E50;
    margin-top: 0; 
    margin-bottom: 10px;
`;

const PostExcerpt = styled.div`
    font-size: 0.95rem;
    color: #666;
    line-height: 1.4;
    margin-bottom: 15px;

    p { margin: 0; }
`;

const ReadMoreLink = styled(Link)`
    color: #F39C12;
    text-decoration: none;
    font-weight: 600;
    display: inline-block;

    &:hover {
        text-decoration: underline;
    }
`;

const LoadingMessage = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: #34495E;
    margin-top: 50px;
`;


const MarcosArticlesPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const fetchPosts = async () => {
            try {
                // 1. Encontrar o ID do Autor "Marcos" (slug=marcos)
                const authorRes = await fetch(`${API_BASE_URL}/users?slug=marcos`);
                const authors = await authorRes.json();
                
                if (authors.length === 0) {
                    throw new Error('Autor "Marcos" não encontrado na API.');
                }
                
                const authorID = authors[0].id;

                // 2. Buscar os posts deste autor
                // Usando o filtro '&author='
                const postsRes = await fetch(`${API_BASE_URL}/posts?per_page=20&author=${authorID}`);
                const postsData = await postsRes.json();
                
                const formattedPosts = postsData.map(post => {
                    return {
                        id: post.id,
                        title: post.title.rendered,
                        excerpt: post.excerpt.rendered,
                        // Mantido o link para o ArticlePage interno
                        link: `/article/${post.id}`, 
                    };
                });

                setPosts(formattedPosts);
            } catch (err) {
                console.error("Erro ao buscar artigos do autor Marcos:", err);
                setError('Não foi possível carregar os artigos. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <PageContainer>
            <ContentHeader>
                <Title>Artigos e Textos de Marcos</Title>
                <p style={{ color: '#666' }}>Publicações disponíveis de Marcos no site.</p>
            </ContentHeader>

            {loading && <LoadingMessage>Carregando artigos...</LoadingMessage>}
            {error && <LoadingMessage style={{color: 'red'}}>{error}</LoadingMessage>}
            
            {!loading && !error && posts.length === 0 && (
                <LoadingMessage>Nenhum artigo encontrado para Marcos no momento.</LoadingMessage>
            )}

            {!loading && !error && posts.length > 0 && (
                <PostGrid>
                    {posts.map(post => (
                        <PostCard key={post.id}>
                            <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
                            <PostExcerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                            <ReadMoreLink to={post.link}>
                                Ler artigo »
                            </ReadMoreLink>
                        </PostCard>
                    ))}
                </PostGrid>
            )}
        </PageContainer>
    );
};

export default MarcosArticlesPage;