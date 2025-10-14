// src/pages/NovidadesLegislativas.js (CORRIGIDO NOVAMENTE)

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://www.saesadvogados.com.br/wp-json/wp/v2';

const PageContainer = styled.div`
  /* AUMENTADO o padding-top para 160px para garantir folga e evitar sobreposição com a Navbar fixa */
  padding-top: 160px; 
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
  /* Margem zero para garantir que o padding do container controle o espaço */
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
    padding: 20px;
    transition: transform 0.3s ease;
    
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


const NovidadesLegislativas = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const fetchPosts = async () => {
            try {
                // 1. Encontrar o ID da categoria "Novidades Legislativas"
                const categoryRes = await fetch(`${API_BASE_URL}/categories?slug=novidades-legislativas`);
                const categories = await categoryRes.json();
                
                if (categories.length === 0) {
                    throw new Error('Categoria não encontrada na API.');
                }
                
                const categoryID = categories[0].id;

                // 2. Buscar os posts dessa categoria
                const postsRes = await fetch(`${API_BASE_URL}/posts?per_page=20&categories=${categoryID}`);
                const postsData = await postsRes.json();
                
                // Adapta os dados e garante que o link seja para a página de artigo
                const formattedPosts = postsData.map(post => ({
                    id: post.id,
                    title: post.title.rendered,
                    excerpt: post.excerpt.rendered,
                    // O link deve apontar para a sua rota interna de artigo
                    link: `/article/${post.id}` 
                }));

                setPosts(formattedPosts);
            } catch (err) {
                console.error("Erro ao buscar novidades legislativas:", err);
                setError('Não foi possível carregar as novidades legislativas. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <PageContainer>
            <ContentHeader>
                <Title>Novidades Legislativas</Title>
                <p style={{ color: '#666' }}>Mantenha-se atualizado com as últimas mudanças na legislação ambiental.</p>
            </ContentHeader>

            {loading && <LoadingMessage>Carregando novidades...</LoadingMessage>}
            {error && <LoadingMessage style={{color: 'red'}}>{error}</LoadingMessage>}
            
            {!loading && !error && posts.length === 0 && (
                <LoadingMessage>Nenhuma novidade legislativa encontrada no momento.</LoadingMessage>
            )}

            {!loading && !error && posts.length > 0 && (
                <PostGrid>
                    {posts.map(post => (
                        <PostCard key={post.id}>
                            <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
                            <PostExcerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                            <ReadMoreLink to={post.link}>
                                Leia mais »
                            </ReadMoreLink>
                        </PostCard>
                    ))}
                </PostGrid>
            )}
        </PageContainer>
    );
};

export default NovidadesLegislativas;