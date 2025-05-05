import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import marcos from '../images/marcos.jpg'; // Substitua pela foto correta de Marcos
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'; // Importando os ícones

const Marcos = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página ao ser acessada
  }, []);

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.name}>Marcos André Bruxel Saes</h1>
        
        <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={marcos} alt="Marcos André Bruxel Saes" style={styles.profileImage} />
            <div style={styles.contactInfo}>
              <p style={styles.jobTitle}>Advogado | OAB/SC 20.864</p>
              <div style={styles.contactIcons}>
                <a href="mailto:marcos@saesadvogados.com.br" style={styles.iconLink}>
                  <AiOutlineMail style={styles.icon} /> 
                  marcos@saesadvogados.com.br
                </a>
                <a href="https://www.linkedin.com/in/marcos-andr%C3%A9-bruxel-saes-37239348/?originalSubdomain=br" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                  <AiOutlineLinkedin style={styles.icon} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>Sobre</h2>
            <p style={styles.paragraph}>
              Marcos André Bruxel Saes é advogado, com experiência desde 2004. Desde a época em que cursava a faculdade já trabalhava com direito ambiental. Estagiou na Fundação de Meio Ambiente de Florianópolis e posteriormente em escritório especializado, tornando-se sócio do mesmo logo após sua formatura.
            </p>
            <p style={styles.paragraph}>
              No ano de 2010 abriu filial do seu então escritório no Rio de Janeiro, passando a ter uma atuação destacada no assessoramento jurídico e estratégico de licenciamentos ambientais. Com uma visão multidisciplinar das questões ambientais, Saes tornou-se profundo conhecedor das questões ligadas ao meio ambiente. Com uma atuação de vanguarda e aliando conhecimento jurídico, técnico e estratégico, participou de licenciamentos de portos, estaleiros, hidrelétricas, térmicas, parcelamentos de solo, complexos logísticos e obras públicas, dentre outros.
            </p>
            <p style={styles.paragraph}>
              “O bom advogado na área ambiental não é somente aquele que resolve os problemas, mas especialmente aquele que se antecipa às questões e evita que os problemas surjam”. Com essa visão, participa da revisão de estudos, elaboração de capítulos jurídicos, compõe mesas de Audiências Públicas e “antecipa os problemas para que eles não ocorram”.
            </p>

            <h3 style={styles.subTitle}>Consultoria e Contencioso</h3>
            <p style={styles.paragraph}>
              Além da atuação consultiva e preventiva, o advogado Marcos Saes possui ampla experiência no contencioso, seja administrativo (apresentando defesas em autos de infração), seja no acompanhamento de Inquéritos Civis e Criminais. Atua ainda como parecerista na solução de variadas questões. Já no contencioso judicial atua em diversas ações civis públicas ambientais, ações populares, anulatórias e criminais em diversos Tribunais de Justiça, nos Tribunais Regionais Federais e Tribunais Superiores.
            </p>

            <h3 style={styles.subTitle}>Atuação Institucional e Acadêmica</h3>
            <p style={styles.paragraph}>
              A atuação institucional e acadêmica de Marcos Saes também possui relevância. Preside a Comissões de Direito Ambiental do IBRADIM. É Superintendente Regional do Instituto Brasileiro do Direito da Construção-IBDiC e associado à União Brasileira de Advocacia Ambiental-UBAA. Também é Conselheiro do Conselho Superior de Meio Ambiente da FIESP. Consultor da CBIC e do Secovi-SP. Já lecionou na Escola Superior da Advocacia da OAB/SC e da OAB/RJ, e em diversos cursos de pós-graduação em instituições como FGV/Rio, UFSC, UNIVALI e CESUSC. Merecem destaque, também, os 6 anos que lecionou na Escola Superior do Ministério Público de Santa Catarina, as disciplinas de processo civil e direito ambiental. Também já ministrou cursos para servidores de órgãos ambientais e de saneamento básico, tendo sempre um enfoque prático e comprometido com boas soluções para as relevantes questões enfrentadas pelos integrantes desses órgãos.
            </p>

            <h3 style={styles.subTitle}>Visão do Advogado</h3>
            <p style={styles.paragraph}>
              A atuação do advogado Marcos Saes é pautada não só no seu profundo conhecimento das questões ambientais e processuais, mas também na condução dos processos para que haja soluções positivas para todos os envolvidos. “Um licenciamento que se transforma em ação judicial ou que não é concluído gera prejuízos a todos os envolvidos, já um processo bem concebido, em que o desenvolvimento sustentável é alcançado traz dividendos para o país e para as futuras gerações”.
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '1rem',
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.8rem',
    fontSize: '1rem',
    color: '#F39C12',
    textDecoration: 'none',
  },
  icon: {
    marginRight: '0.5rem',
    fontSize: '1.3rem',
    color: '#F39C12',
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
    color: '#7F8C8D',
    textAlign: 'justify',
  },
};

export default Marcos;
