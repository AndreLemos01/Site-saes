// src/pages/PublicacoesPage.js (COMPLETO E FINALIZADO)

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SaesLogo from '../images/logo-saes.png'; // 1. Importa o logo

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

const PostCard = styled(Link)` /* Transforma o PostCard em Link para toda a área ser clicável */
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
    overflow: hidden; 
    text-decoration: none; /* Remove sublinhado do link */
    color: inherit; /* Mantém a cor do texto */
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
`;

// Modifica PostImage para aceitar props e lidar com o logo
const PostImage = styled.img`
    width: 100%;
    height: 200px; 
    object-fit: cover; 
    display: block;

    /* Estilo para quando a imagem for o logo (isLogo=true) */
    ${props => props.isLogo && `
        object-fit: contain; 
        padding: 20px; 
        background-color: #f8f8f8; 
    `}
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

const LoadingMessage = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: #34495E;
    margin-top: 50px;
`;


const PublicacoesPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Refatorado para IIFE para resolver o aviso 'fetchPublicacoes is never used'
        (async () => {
            try {
                // 1. Encontrar o ID da categoria "Publicações" (slug=publicacoes)
                const categoryRes = await fetch(`${API_BASE_URL}/categories?slug=publicacoes`);
                const categories = await categoryRes.json();
                
                if (categories.length === 0) {
                     // Tenta encontrar "Publicações" com 'P' maiúsculo ou outra variação se o slug não funcionar
                    const fallbackCategories = await fetch(`${API_BASE_URL}/categories`);
                    const allCategories = await fallbackCategories.json();
                    const publicacoesCategory = allCategories.find(c => c.name.toLowerCase() === 'publicações');
                    
                    if (!publicacoesCategory) {
                        throw new Error('Categoria "Publicações" não encontrada na API.');
                    }
                    var categoryID = publicacoesCategory.id;
                } else {
                    categoryID = categories[0].id;
                }

                // 2. Buscar os posts dessa categoria, incluindo o embed para featured media
                const postsRes = await fetch(`${API_BASE_URL}/posts?per_page=20&categories=${categoryID}&_embed`);
                const postsData = await postsRes.json();
                
                const formattedPosts = postsData.map(post => {
                    // Lógica para extrair a URL da imagem de destaque
                    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
                    const imageUrl = featuredMedia?.media_details?.sizes?.medium_large?.source_url || 
                                     featuredMedia?.media_details?.sizes?.medium?.source_url ||
                                     featuredMedia?.source_url; 

                    // Verifica se a URL da imagem existe
                    const useLogoFallback = !imageUrl;
                    
                    return {
                        id: post.id,
                        title: post.title.rendered,
                        excerpt: post.excerpt.rendered,
                        link: `/article/${post.id}`, 
                        // Usa o logo importado como fallback
                        imageUrl: useLogoFallback ? SaesLogo : imageUrl, 
                        isLogo: useLogoFallback, // Adiciona flag para controle de estilo no PostImage
                    };
                });

                setPosts(formattedPosts);
            } catch (err) {
                console.error("Erro ao buscar publicações:", err);
                setError('Não foi possível carregar as publicações. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <PageContainer>
            <ContentHeader>
                <Title>Publicações</Title>
                <p style={{ color: '#666' }}>Publicações institucionais e notícias relevantes do escritório.</p>
            </ContentHeader>

            {loading && <LoadingMessage>Carregando publicações...</LoadingMessage>}
            {error && <LoadingMessage style={{color: 'red'}}>{error}</LoadingMessage>}
            
            {!loading && !error && posts.length === 0 && (
                <LoadingMessage>Nenhuma publicação encontrada no momento.</LoadingMessage>
            )}

            {!loading && !error && posts.length > 0 && (
                <PostGrid>
                    {posts.map(post => (
                        <PostCard key={post.id} to={post.link}>
                            {/* Passa a flag isLogo para o componente PostImage */}
                            <PostImage src={post.imageUrl} alt={post.title} isLogo={post.isLogo} />
                            <PostContent>
                                <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
                                <PostExcerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                            </PostContent>
                        </PostCard>
                    ))}
                </PostGrid>
            )}
        </PageContainer>
    );
};

export default PublicacoesPage;