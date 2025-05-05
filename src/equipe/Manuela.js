import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import manuela from '../images/manuela.jpg'; // Substitua pela foto correta da Manuela
import { AiOutlineMail } from 'react-icons/ai'; // Importando o ícone de e-mail

const Manuela = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página ao ser acessada
  }, []);

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.name}>Manuela Kuhnen Hermenegildo Andriani</h1>
        
        <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={manuela} alt="Manuela Kuhnen Hermenegildo Andriani" style={styles.profileImage} />
            <div style={styles.contactInfo}>
              <p style={styles.jobTitle}>Advogada | OAB/SC 20.123 | Engenheira Ambiental</p>
              <div style={styles.contactIcons}>
                <a href="mailto:manuela@saesadvogados.com.br" style={styles.iconLink}>
                  <AiOutlineMail style={styles.icon} /> 
                  manuela@saesadvogados.com.br
                </a>
              </div>
            </div>
          </div>
          
          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>Sobre</h2>
            <p style={styles.paragraph}>
              Manuela Kuhnen Hermenegildo Andriani possui dupla formação: é advogada e engenheira. Graduada em Engenharia Sanitária e Ambiental pela UFSC, em 2011, e em Direito pelo CESUSC, em 2015, destaca-se por aliar o conhecimento técnico ao jurídico.
            </p>
            <p style={styles.paragraph}>
              Entre os anos de 2012 e 2015, Manuela trabalhou no Laboratório de Transporte e Logística - LabTrans da UFSC, participando da elaboração de estudos e projetos ambientais relacionados à área de transporte, incluindo portos, terminais, transporte ferroviário, rodoviário, aéreo e de passageiros.
            </p>
            <p style={styles.paragraph}>
              Atualmente, Manuela participa da Comissão de Desenvolvimento e Infraestrutura da OAB/SC, é membro da Comissão de Direito Ambiental do Instituto Brasileiro de Direito Imobiliário - Ibradim e também da Câmara Técnica Jurídica do Conselho Municipal de Defesa do Meio Ambiente - COMDEMA/Florianópolis.
            </p>
            <p style={styles.paragraph}>
              É parte da equipe do Saes Advogados desde 2016, comprometida com a busca de soluções nas demandas do escritório, com uma atuação preventiva e especializada. Ela afirma: “O Direito me encantou quando verifiquei que é a partir da adequada aplicação da legislação que se obtém a forma mais efetiva de se encarar os problemas existentes em matéria ambiental. Tenho certeza que posso auxiliar não só para resolver os problemas a serem enfrentados, mas também para evitar que os mesmos ocorram”.
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
    marginLeft: '15%', // Margem de 15% à esquerda
    marginRight: '15%', // Margem de 15% à direita
    backgroundColor: '#fff',
  },
  name: {
    textAlign: 'center',
    fontSize: '2.8rem',
    marginBottom: '1.5rem', // Ajustando a margem inferior para espaçamento
    fontWeight: '600',
    color: '#2C3E50', // Um tom escuro e elegante
    letterSpacing: '1px', // Espaçamento nas letras para modernidade
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
    width: '395px', // Diminuindo a imagem em 10%
    height: 'auto',
    borderRadius: '12px',
    marginBottom: '1.5rem',
    boxShadow: 'none', // Removendo sombra
  },
  contactInfo: {
    marginTop: '1rem',
    textAlign: 'left',
    fontSize: '1rem',
    color: '#7F8C8D', // Cor mais suave
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
    color: '#F39C12', // Laranja para o e-mail
    fontSize: '1rem',
  },
  icon: {
    marginRight: '0.5rem',
  },
  textContainer: {
    flexBasis: '65%',
    textAlign: 'justify', // Justificando o texto à direita
    lineHeight: '1.6',
    color: '#34495E', // Cor mais suave para o texto
  },
  sectionTitle: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#F39C12', // Cor laranja para os títulos
    fontWeight: '600',
  },
  subTitle: {
    fontSize: '1.4rem',
    marginTop: '2rem',
    fontWeight: '500',
    color: '#2C3E50',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    color: '#7F8C8D', // Cor mais suave para os parágrafos
    textAlign: 'justify',
  },
};

export default Manuela;

