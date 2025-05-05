import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import camilla from '../images/camilla.jpg'; // Substitua pelo caminho correto da imagem
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Camilla = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Garante rolagem ao topo ao acessar a página
  }, []);

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.name}>Camilla Pavan Costa</h1>

        <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={camilla} alt="Camilla Pavan Costa" style={styles.profileImage} />
            <div style={styles.contactInfo}>
              <p style={styles.jobTitle}>Advogada Ambiental | Especialista em Direito Ambiental e Penal</p>
              <div style={styles.contactIcons}>
                <a href="mailto:camilla@saesadvogados.com.br" style={styles.iconLink}>
                  <AiOutlineMail style={styles.icon} /> 
                  camilla@saesadvogados.com.br
                </a>
                <br />
                <a href="https://www.linkedin.com/in/camilla-pavan-costa/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                  <FaLinkedin style={styles.icon} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>Sobre</h2>
            <p style={styles.paragraph}>
              Camilla Pavan Costa é Advogada Ambiental, formada em 2004 pela Universidade do Vale do Itajaí (Univali). Especialista em Direito Penal e Processual Penal pela Univali e em Direito Ambiental pela Pontifícia Universidade Católica do Paraná (PUC/PR).
            </p>
            <p style={styles.paragraph}>
              Em 2021 concluiu os cursos de Compliance e Negociação Estratégica e Negociação e Resolução de Conflitos pelo Insper, e o curso de ESG pela FIA Business School, todos na cidade de São Paulo. Atuou como Assessora Jurídica na Procuradoria-Geral do Município de São José/SC de 2005 a 2008.
            </p>
            <p style={styles.paragraph}>
              De 2013 a 2021 foi Assistente Jurídica de Promotoria de Justiça na 28ª Promotoria de Justiça da Comarca de Florianópolis, com atribuição na tutela do Meio Ambiente. Camilla tem experiência em projetos de alta complexidade nas questões jurídicas afetas ao Meio Ambiente.
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

export default Camilla;
