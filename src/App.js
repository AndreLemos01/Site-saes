import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // Remova o Router aqui
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuemSomos from './components/QuemSomos';
import Atuacao from './components/Atuacao';
import Equipe from './components/Equipe';
import Newsletter from './components/Newsletter';
import Frase from './components/Frase';
import Noticias from './components/Noticias';

// Importando a página de Administração de ./page
import AdminPage from './pages/AdminPage'; // Verifique o caminho correto do arquivo

// Importando as imagens da pasta "images"
import imagem1 from './images/SELO_ESC_vertical_2020.png';
import imagem2 from './images/selo-vertical-.png';
import imagem3 from './images/selo-analise-2022.png';
import imagem4 from './images/selo-escritorio-admirado-2023.png';
import imagem5 from './images/selo-escritorio-admirado-2025.png';

function App() {
  const images = [imagem1, imagem2, imagem3, imagem4, imagem5];
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>
      <Navbar />


      <Routes>
        {/* Rota para a página principal */}
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

            {/* Cards fixos no canto inferior esquerdo da tela */}
            <div style={styles.cardsContainer}>
              {images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.card,
                    opacity: hoveredCard !== null && hoveredCard !== index ? 0.3 : 1,
                    transform: hoveredCard === index ? 'scale(1.2)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img src={image} alt={`Card ${index + 1}`} style={styles.cardImage} />
                </div>
              ))}
            </div>

            <Footer />
          </>
        } />

        {/* Rota para a página de administração */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      {/* Botão do WhatsApp fixo */}
      <a 
        href="https://wa.me/5548996356392?text=Oi%20gostaria%20de%20tirar%20algumas%20dúvidas."
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button style={styles.whatsappButton}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            style={styles.whatsappIcon} 
          />
        </button>
      </a>
    </div>
  );
}

const styles = {
  whatsappButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '15px',
    fontSize: '24px',
    zIndex: '1000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', // Sombra verde
    transition: 'all 0.3s ease',
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
    zIndex: '1000',
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
    transition: 'all 0.3s ease',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
};

export default App;
