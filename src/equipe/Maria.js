import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import maria from '../images/maria.jpg'; // Atualize com o caminho correto da imagem
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Maria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.name}>Maria Helena Lemos</h1>

        <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={maria} alt="Maria Helena Lemos" style={styles.profileImage} />
            <div style={styles.contactInfo}>
              <p style={styles.jobTitle}>Administrativo e Financeiro</p>
              <div style={styles.contactIcons}>
                <a href="mailto:maria@saesadvogados.com.br" style={styles.iconLink}>
                  <AiOutlineMail style={styles.icon} />
                  maria@saesadvogados.com.br
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/maria-helena-lemos-64516b115/"
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
              Maria Helena Lemos é a responsável pelo administrativo e financeiro do Saes Advogados. Graduada em Administração e pós-graduada em Gestão Financeira, tem contato com rotinas administrativas desde 2012, quando iniciou sua faculdade e começou a trabalhar em um escritório contábil.
            </p>
            <p style={styles.paragraph}>
              Em agosto de 2015, passou a fazer parte da equipe do Saes Advogados, agregando novos valores e adquirindo experiências, não somente em sua área de atuação, mas também na área do direito ambiental.
            </p>
            <p style={styles.paragraph}>
              Helena faz a gestão administrativa de todas as sedes do escritório, atuando na gestão dos contratos e nas atividades financeiras e organizacionais.
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

export default Maria;
