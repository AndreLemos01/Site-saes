import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import gleyse from '../images/gleyse.jpg'; // Substitua pela foto correta de Gleyse
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'; // Importando os ícones

const Gleyse = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página ao ser acessada
  }, []);

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.name}>Gleyse Gulin</h1>
        
        <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={gleyse} alt="Gleyse Gulin" style={styles.profileImage} />
            <div style={styles.contactInfo}>
              <p style={styles.jobTitle}>Advogada | OAB/SC 20.865</p>
              <div style={styles.contactIcons}>
                <a href="mailto:gleyse@saesadvogados.com.br" style={styles.iconLink}>
                  <AiOutlineMail style={styles.icon} /> 
                  gleyse@saesadvogados.com.br
                </a>
                <a href="https://www.linkedin.com/in/gleyse-gulin" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                  <AiOutlineLinkedin style={styles.icon} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>Sobre</h2>
            <p style={styles.paragraph}>
              Gleyse Gulin é advogada, desde 2004, formada pela Pontifícia Universidade Católica do Paraná – PUC/PR. Iniciou sua atuação na área do direito ambiental no mesmo ano, enquanto realizava sua pós-graduação na matéria com ênfase na Responsabilidade Ambiental Empresarial, na Universidade de Milão (Itália).
            </p>
            <p style={styles.paragraph}>
              Durante os anos de 2005 a 2008, atuou em escritórios de advocacia e consultoria ambiental na Itália e na Bélgica, em questões relacionadas à regulamentação, implantação, análise de viabilidade jurídico ambiental de projetos de lei e parcerias entre os países da União Europeia e Brasil, compliance dos Estados Membros com Diretivas Ambientais da Comunidade Europeia, tais como: Esquema de Comércio de Emissões, Resíduos Sólidos, Biodiversidade e Comércio Ilegal de Madeira. Além disso, atuou dentro do Diretório Geral de Meio Ambiente da Comissão Europeia, no Departamento de Legal Affairs, no processo de elaboração e implementação da Diretiva de Acesso a Justiça às questões ambientais, terceiro pilar da Convenção de Aarhus, complementar ao Acesso a Informação e Participação Pública no Processo de Decisões.
            </p>
            <p style={styles.paragraph}>
              Após esse período, passou um tempo nos Estados Unidos, onde concluiu seu L.L.M em Direito Americano com ênfase no Direito Internacional e Ambiental, na Washington University em Saint Louis, Missouri.
            </p>
            <p style={styles.paragraph}>
              Desde 2011, tem atuado com o Dr. Marcos André Bruxel Saes em demandas ambientais nos mais diversos setores da economia. Seu enfoque é no direito ambiental consultivo e preventivo, com destacada atuação no assessoramento jurídico e estratégico de licenciamentos ambientais de empreendimentos do setor elétrico, UHEs, PCHs, UTEs, parcelamento do solo, portos, complexos logísticos.
            </p>
            <p style={styles.paragraph}>
              A advogada está envolvida na coordenação e elaboração de capítulos jurídicos de estudos ambientais, revisões de planos e programas ambientais, na gestão de condicionantes de licenças ambientais, interface com os órgãos envolvidos, elaboração de normativos e manuais de meio ambiente para a melhor integração de sistema de gestão ambiental de empresas, diagnóstico jurídico ambiental de empreendimentos, realização de due diligence e análise de risco. Para Gleyse, “a multidisciplinariedade da área ambiental faz com que o advogado tenha cabeça de advogado com a praticidade e objetividade de um engenheiro. A soma disso faz com que muitos problemas sejam evitados, antes mesmo de que haja necessidade de serem resolvidos. Com essa atuação, a probabilidade de eventuais casualidades ambientais ocorrer é reduzida consideravelmente, dando mais conforto ao cliente”.
            </p>
            <p style={styles.paragraph}>
              Além da atuação consultiva e preventiva, a advogada possui experiência no contencioso administrativo (apresentando defesas em autos de infração), seja no acompanhamento de Inquéritos Civis e Criminais.
            </p>
            <h3 style={styles.subTitle}>Atuação Institucional</h3>
            <p style={styles.paragraph}>
              A advogada é Diretora de Assuntos Ambientais e Conselheira da Associação Brasileira de Pequenas Centrais Hidrelétricas e Centrais Geradoras Hidrelétricas (ABRAPCH) e representante da associação no Fórum de Meio Ambiente do Setor Elétrico (FMASE). Além disso, é membro das comissões de Infraestrutura e Imóveis Rurais do Instituto Brasileiro de Direito Imobiliário (IBRADIM) e membro da Infra Women Brazil (IWB).
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

export default Gleyse;

