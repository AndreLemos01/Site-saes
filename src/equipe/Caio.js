import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import caio from '../images/caio.jpg'; // Substitua pela imagem correta do Caio
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Caio = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Garante que a página inicie do topo
  }, []);

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.name}>Caio Henrique Bocchini</h1>
        
        <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={caio} alt="Caio Henrique Bocchini" style={styles.profileImage} />
            <div style={styles.contactInfo}>
              <p style={styles.jobTitle}>Advogado | OAB/SC 00.000 | Mestrado em Direito do Estado</p>
              <div style={styles.contactIcons}>
                <a href="mailto:caio@saesadvogados.com.br" style={styles.iconLink}>
                  <AiOutlineMail style={styles.icon} /> 
                  caio@saesadvogados.com.br
                </a>
                <br />
                <a href="https://www.linkedin.com/in/caiohenriquebocchini/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                  <FaLinkedin style={styles.icon} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>Sobre</h2>
            <p style={styles.paragraph}>
              Caio Henrique Bocchini é advogado desde 2014. Graduado em Direito pela Universidade Federal de Santa Catarina (2013), também possui mestrado em Direito do Estado pela mesma instituição, concluído em 2020, além de uma Pós-Graduação em Direito Processual Civil, pela Damásio Educacional (2018), e outra em Advocacia Empresarial, pela Escola Brasileira de Direito (2021).
            </p>
            <p style={styles.paragraph}>
              Ao longo de sua carreira, participou das Comissões da OAB/SC de Licitações e Contratos (2014-2016), Moralidade Pública (2017-2018) e Direito Constitucional (2019-2021), todas voltadas para o aperfeiçoamento da atuação profissional na advocacia privada. Atualmente participa da Comissão de Direito Ambiental da OAB/SC e do Grupo de Estudos em Direito Constitucional da UFSC (GConst).
            </p>
            <p style={styles.paragraph}>
              Além da atuação consultiva e preventiva, o advogado possui extensa experiência no contencioso administrativo e judicial em todos os níveis de complexidade, atuando, inclusive, com ações constitucionais.
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

export default Caio;
