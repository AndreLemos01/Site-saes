import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import polliana from '../images/polliana.png'; // Atualize com o caminho correto da imagem
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Polliana = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.name}>Polliana Muller</h1>

        <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={polliana} alt="Polliana Muller" style={styles.profileImage} />
            <div style={styles.contactInfo}>
              <p style={styles.jobTitle}>Auxiliar Administrativo</p>
              <div style={styles.contactIcons}>
                <a href="mailto:polliana@saesadvogados.com.br" style={styles.iconLink}>
                  <AiOutlineMail style={styles.icon} />
                  polliana@saesadvogados.com.br
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/polliana-muller-028bb568/"
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
              Polliana Muller é formada em Administração pela UniBrasil Centro Universitário e ocupa o cargo de auxiliar administrativo no escritório Saes Advogados, sede de Florianópolis. É também pós-graduanda em Gestão e Planejamento de Eventos pela Universidade do Sul de Santa Catarina.
            </p>
            <p style={styles.paragraph}>
              Anteriormente, trabalhou no CREA-SC como coordenadora de dívida ativa, prestando suporte à gerência nas atividades administrativas e atuando no planejamento e organização de eventos internos. Além disso, tem experiência de oito anos no setor imobiliário e de seguros.
            </p>
            <p style={styles.paragraph}>
              Com dinamismo e eficiência, auxilia nas atividades financeiras, de marketing e organizacionais, além de assessorar os sócios e advogados na gestão de suas agendas e compromissos de trabalho.
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

export default Polliana;
