import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import nicole from '../images/nicole.png'; // Substitua pelo caminho correto da imagem
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Nicole = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.name}>Nicole Bittencourt de Freitas Lima</h1>

        <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={nicole} alt="Nicole Bittencourt de Freitas Lima" style={styles.profileImage} />
            <div style={styles.contactInfo}>
              <p style={styles.jobTitle}>Advogada | Direito Ambiental e Penal</p>
              <div style={styles.contactIcons}>
                <a href="mailto:nicole@saesadvogados.com.br" style={styles.iconLink}>
                  <AiOutlineMail style={styles.icon} /> 
                  nicole@saesadvogados.com.br
                </a>
                <br />
                <a href="https://www.linkedin.com/in/nicole-bittencourt-de-freitas-lima-256151296/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                  <FaLinkedin style={styles.icon} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>Sobre</h2>
            <p style={styles.paragraph}>
              Nicole Bittencourt de Freitas Lima é advogada, formada em 2023 pela Universidade Federal de Santa Catarina (UFSC). Também é membro das Comissões de Direito Ambiental e de Desenvolvimento e Infraestrutura da OAB/SC.
            </p>
            <p style={styles.paragraph}>
              Iniciou sua trajetória no Saes Advogados em 2024, e possui experiência nas áreas de Direito Ambiental, Direito Penal e Direito Processual Penal.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    padding: '2rem',
    marginLeft: '15%',
    marginRight: '15%',
    backgroundColor: '#fff',
  },
  name: {
    textAlign: 'center',
    fontSize: '2.8rem',
    marginBottom: '1.5rem',
    fontWeight: '600',
    color: '#2C3E50',
    letterSpacing: '1px',
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  imageContainer: {
    flexBasis: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  profileImage: {
    width: '395px',
    height: 'auto',
    borderRadius: '12px',
    marginBottom: '1.5rem',
    boxShadow: 'none',
  },
  contactInfo: {
    marginTop: '1rem',
    textAlign: 'left',
    fontSize: '1rem',
    color: '#7F8C8D',
  },
  jobTitle: {
    fontWeight: 'bold',
    marginBottom: '.5rem',
  },
  contactIcons: {
    marginTop: '1rem',
  },
  iconLink: {
    textDecoration: 'none',
    color: '#F39C12',
    fontSize: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  icon: {
    marginRight: '0.5rem',
  },
  textContainer: {
    flexBasis: '65%',
    textAlign: 'justify',
    lineHeight: '1.6',
    color: '#34495E',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#F39C12',
    fontWeight: '600',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    color: '#7F8C8D',
    textAlign: 'justify',
  },
};

export default Nicole;
