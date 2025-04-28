import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuemSomos from './components/QuemSomos';
import Atuacao from './components/Atuacao';
import Equipe from './components/Equipe';
import Newsletter from './components/Newsletter';
import Frase from './components/Frase';
import Noticias from './components/Noticias';

// Importando a página de Administração
import AdminPage from './pages/AdminPage';
// Importando a página Escritório
import Escritorio from './pages/Escritorio';

// Importando as imagens da pasta "images"
import imagem1 from './images/SELO_ESC_vertical_2020.png';
import imagem2 from './images/selo-vertical-.png';
import imagem3 from './images/selo-analise-2022.png';
import imagem4 from './images/selo-escritorio-admirado-2023.png';
import imagem5 from './images/selo-escritorio-admirado-2025.png';

// Importando o Axios para consumir a API do Strapi
import axios from 'axios';

function App() {
  const images = [imagem1, imagem2, imagem3, imagem4, imagem5];
  const [hoveredCard, setHoveredCard] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const location = useLocation(); // Obter a localização atual

  // Função para buscar produtos do Strapi
  useEffect(() => {
    axios.get('http://localhost:1337/api/produtos?populate=*')
      .then((response) => {
        setProdutos(response.data.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  // UseEffect para rolar para o topo quando a rota mudar
  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página para o topo
  }, [location]); // Esse efeito roda sempre que a localização mudar

  return (
    <div style={styles.pageWrapper}>
      <Navbar />

      {/* Conteúdo principal que ocupa o espaço da tela */}
      <div style={{ flex: 1 }}>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={
            <>
              <section id="noticias">
                <Noticias />
              </section>

              <section id="quem-somos">
                <QuemSomos />
              </section>

              <section id="atuacao">
                <Atuacao />
              </section>

              <section id="equipe">
                <Equipe />
              </section>

              <section id="newsletter">
                <Newsletter />
              </section>

              <section id="informativos">
                <Frase />
              </section>

              {/* Cards fixos no canto inferior esquerdo */}
              <div style={styles.cardsContainer}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.card,
                      opacity: hoveredCard === index ? 1 : 0.3,
                      transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <img src={image} alt={`Card ${index + 1}`} style={styles.cardImage} />
                  </div>
                ))}
              </div>
            </>
          } />

          {/* Página de Administração */}
          <Route path="/admin" element={<AdminPage />} />

          {/* Página de Escritório */}
          <Route path="/escritorio" element={<Escritorio />} />
        </Routes>
      </div>

      {/* Botão do WhatsApp fixo */}
      <a
        href="https://wa.me/5548996356392?text=Oi%20gostaria%20de%20tirar%20algumas%20dúvidas."
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsappLink}
      >
        <button style={styles.whatsappButton}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            style={styles.whatsappIcon}
          />
        </button>
      </a>

      {/* Footer colado no final */}
      <Footer />
    </div>
  );
}

// Estilos em objeto JS
const styles = {
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  whatsappLink: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '15px',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  whatsappIcon: {
    width: '40px',
    height: '40px',
  },
  cardsContainer: {
    position: 'fixed',
    bottom: '20px',
    left: '10px',
    display: 'flex',
    gap: '10px',
    zIndex: 1000,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '63.5px',
    height: '79.6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    opacity: 0.3,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
};

export default App;
