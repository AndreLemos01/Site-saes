// src/data/SearchIndex.js

// Importe as listas de conteúdo que cada página exporta.
// ATENÇÃO: As importações abaixo dependem da estrutura de exportação do Passo 1.
import { NewslettersList } from '../pages/NewslettersPage';
import { PublicacoesList } from '../pages/PublicacoesPage';
import { ArtigosList } from '../pages/ArtigosPage';
import { NovidadesList } from '../pages/NovidadesLegislativas';
import { InformativosList } from '../pages/InformativosPage';

// Função para padronizar e combinar o conteúdo de todas as fontes.
const formatContent = (list, sourceName) => {
    if (!Array.isArray(list)) return [];
    
    return list.map(item => {
        // Tenta inferir campos de resumo, título e link com base em nomes comuns
        const title = item.title || item.nome || 'Sem título'; 
        const summary = item.summary || item.resumo || item.descricao || 'Sem resumo disponível.';
        const path = item.path || item.link || '';
        
        // Cria um campo único de texto para busca, combinando todos os campos relevantes.
        const searchableText = (title + ' ' + summary + ' ' + (item.keywords || '') + ' ' + sourceName).toLowerCase();

        return {
            id: item.id || Math.random(), 
            source: sourceName,
            title: title, 
            summary: summary,
            path: path,
            searchableText: searchableText,
        };
    });
};

// COMBINAÇÃO INTELIGENTE: Concatena todos os arrays exportados e formata.
// O operador '|| []' previne erros se alguma página ainda não exportar a lista.
export const SearchIndex = [
    ...formatContent(NewslettersList || [], 'Newsletter'),
    ...formatContent(PublicacoesList || [], 'Publicações'),
    ...formatContent(ArtigosList || [], 'Artigos'),
    ...formatContent(NovidadesList || [], 'Novidades Legislativas'),
    ...formatContent(InformativosList || [], 'Informativos'),
];