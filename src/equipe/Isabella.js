import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import isabella from '../images/isabella.jpg'; // Substitua pela imagem correta da Isabella
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Isabella = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Garante que a página comece do topo
  }, []);

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.name}>Isabella Dabrowski Pedrini Hamad</h1>
        
        <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={isabella} alt="Isabella Dabrowski Pedrini Hamad" style={styles.profileImage} />
            <div style={styles.contactInfo}>
              <p style={styles.jobTitle}>Advogada | OAB/SC 00.000 | Doutora em Administração</p>
              <div style={styles.contactIcons}>
                <a href="mailto:isabella@saesadvogados.com.br" style={styles.iconLink}>
                  <AiOutlineMail style={styles.icon} /> 
                  isabella@saesadvogados.com.br
                </a>
                <br />
                <a href="https://www.linkedin.com/in/isabella-dabrowski-pedrini/?originalSubdomain=br" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                  <FaLinkedin style={styles.icon} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>Sobre</h2>
            <p style={styles.paragraph}>
              Isabella Dabrowski Pedrini Hamad é advogada desde 2014, graduada em Direito pela Universidade do Sul de Santa Catarina (UNISUL). Possui graduação em Administração Empresarial pela Universidade do Estado de Santa Catarina (UDESC) e é Doutora em Administração pela UDESC desde 2022.
            </p>
            <p style={styles.paragraph}>
              Em sua pesquisa acadêmica, tem se dedicado ao estudo da valoração econômica de danos ambientais e das reparações de danos ao meio ambiente, especialmente aqueles atribuídos às práticas do setor privado, numa perspectiva de governança empresarial.
            </p>
            <p style={styles.paragraph}>
              Participa como pesquisadora do Grupo de Estudos das Transformações Sociais e Organizacionais junto à UDESC, onde se dedica ao estudo da gestão das organizações e sustentabilidade. Isabella é coautora de artigos científicos, com destaque para o publicado em 2021 “Environmental liability litigation could remedy biodiversity loss”, na revista Conservation Letters.
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

export default Isabella;
