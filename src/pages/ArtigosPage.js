// src/pages/ArtigosPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://www.saesadvogados.com.br/wp-json/wp/v2';

const PageContainer = styled.div`
  /* Padding-top mantido para evitar sobreposição */
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
    overflow: hidden; /* Garante que a imagem siga o raio de borda */
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
`;

const PostImage = styled.img`
    width: 100%;
    height: 200px; /* Altura fixa para uniformidade visual */
    object-fit: cover;
    display: block;
`;

const PostContent = styled.div`
    padding: 20px;
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


const ArtigosPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const fetchPosts = async () => {
            try {
                // 1. Encontrar o ID da categoria "Artigos" (slug=artigos)
                const categoryRes = await fetch(`${API_BASE_URL}/categories?slug=artigos`);
                const categories = await categoryRes.json();
                
                if (categories.length === 0) {
                    throw new Error('Categoria "Artigos" não encontrada na API.');
                }
                
                const categoryID = categories[0].id;

                // 2. Buscar os posts dessa categoria, incluindo o embed para featured media
                const postsRes = await fetch(`${API_BASE_URL}/posts?per_page=20&categories=${categoryID}&_embed`);
                const postsData = await postsRes.json();
                
                const formattedPosts = postsData.map(post => {
                    // Lógica para extrair a URL da imagem de destaque
                    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
                    const imageUrl = featuredMedia?.media_details?.sizes?.medium_large?.source_url || 
                                     featuredMedia?.media_details?.sizes?.medium?.source_url ||
                                     featuredMedia?.source_url; // Fallback para URL original

                    return {
                        id: post.id,
                        title: post.title.rendered,
                        excerpt: post.excerpt.rendered,
                        link: `/article/${post.id}`, 
                        imageUrl: imageUrl || 'https://via.placeholder.com/600x400?text=Saes+Advogados' // Fallback se não houver imagem
                    };
                });

                setPosts(formattedPosts);
            } catch (err) {
                console.error("Erro ao buscar artigos:", err);
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
                <Title>Artigos</Title>
                <p style={{ color: '#666' }}>Artigos e análises aprofundadas de nossos especialistas em Direito Ambiental.</p>
            </ContentHeader>

            {loading && <LoadingMessage>Carregando artigos...</LoadingMessage>}
            {error && <LoadingMessage style={{color: 'red'}}>{error}</LoadingMessage>}
            
            {!loading && !error && posts.length === 0 && (
                <LoadingMessage>Nenhum artigo encontrado no momento.</LoadingMessage>
            )}

            {!loading && !error && posts.length > 0 && (
                <PostGrid>
                    {posts.map(post => (
                        <PostCard key={post.id}>
                            <PostImage src={post.imageUrl} alt={post.title} />
                            <PostContent>
                                <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
                                <PostExcerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                                <ReadMoreLink to={post.link}>
                                    Leia mais »
                                </ReadMoreLink>
                            </PostContent>
                        </PostCard>
                    ))}
                </PostGrid>
            )}
        </PageContainer>
    );
};

export default ArtigosPage;