// src/pages/Resultados.js

import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { ConteudoBusca } from '../data/ConteudoBusca'; // Importe a fonte de dados

// --- Styled Components (Exemplo básico) ---
const ResultsContainer = styled.div`
    padding: 150px 10%; /* Adicionado padding para compensar a navbar fixa */
    min-height: 100vh;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
`;

const SearchHeader = styled.h2`
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.primary};
`;

const ResultItem = styled.div`
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.card};
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h3 {
        margin-top: 0;
        color: ${({ theme }) => theme.text};
        font-size: 1.2rem;
    }
    p {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.text}80;
    }
    small {
        display: block;
        margin-top: 5px;
        color: ${({ theme }) => theme.primary};
        font-weight: bold;
    }
`;

function Resultados() {
    // 1. OBTER O TERMO DE BUSCA DA URL
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);
    
    // Pega o valor do parâmetro 'query' da URL.
    const searchQuery = searchParams.get('query') || '';

    // Filtra o conteúdo com base na query
    useEffect(() => {
        if (!searchQuery) {
            setResults([]);
            return;
        }

        const termo = searchQuery.toLowerCase().trim();

        // 3. FUNÇÃO DE FILTRAGEM
        const filteredResults = ConteudoBusca.filter(item => {
            // Campos para busca: título, resumo e keywords
            const searchableText = (
                item.title + 
                ' ' + 
                item.summary + 
                ' ' + 
                item.keywords
            ).toLowerCase();

            // Só traz o item se o texto de busca estiver contido em algum dos campos
            return searchableText.includes(termo);
        });

        setResults(filteredResults);
    }, [searchQuery]); // Roda sempre que a query da URL mudar

    return (
        <ResultsContainer>
            <SearchHeader>
                Resultados da Busca para: "{searchQuery}"
            </SearchHeader>

            {results.length > 0 ? (
                results.map((item) => (
                    <ResultItem key={item.id}>
                        <Link to={item.path} style={{ textDecoration: 'none' }}>
                            <h3>{item.title}</h3>
                        </Link>
                        <p>{item.summary}</p>
                        <small>Fonte: {item.source}</small>
                    </ResultItem>
                ))
            ) : (
                <p>Nenhum resultado encontrado para "{searchQuery}".</p>
            )}
        </ResultsContainer>
    );
}

export default Resultados;