// src/pages/NewslettersPage.js (CORRIGIDO: Estrutura simplificada sem PostContent)

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://www.saesadvogados.com.br/wp-json/wp/v2';

const PageContainer = styled.div`
  /* Padding-top mantido para evitar sobreposição da Navbar */
  padding-top: 180px; 
  padding-bottom: 4rem;
  padding-left: 10%;
  padding-right: 10%;
  min-height: 90vh;
  background-color: #f4f4f4;
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
    padding: 20px; /* Padding interno uniforme em todos os lados */
    overflow: hidden; 
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
`;

// REMOVIDO: PostImage styled component
// REMOVIDO: PostContent styled component

const PostTitle = styled.h2`
    font-size: 1.2rem;
    color: #2C3E50;
    /* Garante que o título se alinhe com o topo do padding do PostCard */
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


const NewslettersPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const fetchPosts = async () => {
            try {
                // 1. Encontrar o ID da categoria "Newsletter" (slug=newsletter)
                const categoryRes = await fetch(`${API_BASE_URL}/categories?slug=newsletter`);
                const categories = await categoryRes.json();
                
                if (categories.length === 0) {
                    throw new Error('Categoria "Newsletter" não encontrada na API.');
                }
                
                const categoryID = categories[0].id;

                // 2. Buscar os posts dessa categoria (SEM O &\_EMBED)
                const postsRes = await fetch(`${API_BASE_URL}/posts?per_page=20&categories=${categoryID}`);
                const postsData = await postsRes.json();
                
                const formattedPosts = postsData.map(post => {
                    return {
                        id: post.id,
                        title: post.title.rendered,
                        excerpt: post.excerpt.rendered,
                        link: `/article/${post.id}`, 
                    };
                });

                setPosts(formattedPosts);
            } catch (err) {
                console.error("Erro ao buscar newsletters:", err);
                setError('Não foi possível carregar as newsletters. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <PageContainer>
            <ContentHeader>
                <Title>Newsletters</Title>
                <p style={{ color: '#666' }}>Arquivo de newsletters anteriores.</p>
            </ContentHeader>

            {loading && <LoadingMessage>Carregando newsletters...</LoadingMessage>}
            {error && <LoadingMessage style={{color: 'red'}}>{error}</LoadingMessage>}
            
            {!loading && !error && posts.length === 0 && (
                <LoadingMessage>Nenhuma newsletter encontrada no momento.</LoadingMessage>
            )}

            {!loading && !error && posts.length > 0 && (
                <PostGrid>
                    {posts.map(post => (
                        <PostCard key={post.id}>
                            {/* Conteúdo direto, usando o padding de PostCard */}
                            <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
                            <PostExcerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                            <ReadMoreLink to={post.link}>
                                Leia a edição »
                            </ReadMoreLink>
                        </PostCard>
                    ))}
                </PostGrid>
            )}
        </PageContainer>
    );
};

export default NewslettersPage;