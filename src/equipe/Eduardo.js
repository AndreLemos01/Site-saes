import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import eduardo from '../images/eduardo.jpg'; // Substitua pelo caminho correto da imagem
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Eduardo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.name}>Eduardo dos Anjos Saes</h1>

        <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={eduardo} alt="Eduardo dos Anjos Saes" style={styles.profileImage} />
            <div style={styles.contactInfo}>
              <p style={styles.jobTitle}>Advogado | Direito Ambiental e Gestão Territorial</p>
              <div style={styles.contactIcons}>
                <a href="mailto:eduardo@saesadvogados.com.br" style={styles.iconLink}>
                  <AiOutlineMail style={styles.icon} /> 
                  eduardo@saesadvogados.com.br
                </a>
                <br />
                <a href="https://www.linkedin.com/in/eduardo-saes-b3b6401a7/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                  <FaLinkedin style={styles.icon} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>Sobre</h2>
            <p style={styles.paragraph}>
              Eduardo dos Anjos Saes é advogado, formado pela Universidade do Sul de Santa Catarina (UNISUL), pós-graduando em Direito Ambiental e Gestão Estratégica da Sustentabilidade pela Pontifícia Universidade Católica de São Paulo (PUC-SP) e mestrando em Gestão Territorial (PPGTG) pela Universidade Federal de Santa Catarina (UFSC).
            </p>
            <p style={styles.paragraph}>
              Com atuação institucional junto à OAB/SC, é Secretário Adjunto da Comissão de Infraestrutura, PPPs e Concessões, além de membro das Comissões de Direito Ambiental e de Direito Processual Civil.
            </p>
            <p style={styles.paragraph}>
              Também é membro da União Brasileira de Advocacia Ambiental (UBAA) e do Instituto Brasileiro de Direito Imobiliário (IBRADIM).
            </p>
            <p style={styles.paragraph}>
              Iniciou sua trajetória no Saes Advogados em 2021, ainda como estagiário, e possui experiência nas áreas de Direito Ambiental, Direito Civil e Processual Civil, bem como Direito Probatório.
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

export default Eduardo;
