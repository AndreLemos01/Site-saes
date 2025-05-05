import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import ana from '../images/ana.jpg'; // Atualize com o caminho correto da imagem
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Ana = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.name}>Ana Carolina Borduan</h1>

        <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={ana} alt="Ana Carolina Borduan" style={styles.profileImage} />
            <div style={styles.contactInfo}>
              <p style={styles.jobTitle}>Recepcionista</p>
              <div style={styles.contactIcons}>
                <a href="mailto:ana@saesadvogados.com.br" style={styles.iconLink}>
                  <AiOutlineMail style={styles.icon} />
                  ana@saesadvogados.com.br
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/ana-carolina-borduan-garcias-lacerda-b09a0ba4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.iconLink}
                >
                  <FaLinkedin style={styles.icon} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>Sobre</h2>
            <p style={styles.paragraph}>
              Ana Carolina Borduan é bacharel em Ciências Biológicas pela Universidade do Grande Rio (Unigranrio/2018).
            </p>
            <p style={styles.paragraph}>
              Exerce a função de Recepcionista no Saes Advogados, auxiliando também nas rotinas administrativas na sede do Rio de Janeiro.
            </p>
            <p style={styles.paragraph}>
              Possui mais de 10 anos de experiência no setor Administrativo, desempenhando funções na área organizacional e de gestão de qualidade.
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

export default Ana;
