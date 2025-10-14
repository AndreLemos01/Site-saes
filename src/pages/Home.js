// Exemplo de código a ser adicionado em src/pages/Home.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

// ... dentro do seu componente Home ...
const { hash } = useLocation();

useEffect(() => {
    if (hash) {
        const id = hash.replace('#', '');
        scroller.scrollTo(id, {
            smooth: true,
            offset: -100, // Ajuste de offset
            duration: 500,
        });
    }
}, [hash]);
// ...