// src/components/Layout.js (MODIFICADO)

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const NavbarHeightCompensation = '160px'; // Altura aproximada da Navbar fixa (ajustada para segurança)

const Layout = ({ children }) => {
  return (
    <div style={styles.pageWrapper}>
      <Navbar />
      <main style={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

const styles = {
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  // NOVO: Estilo para o conteúdo principal para compensar a Navbar fixa
  mainContent: {
    flex: 1,
    paddingTop: NavbarHeightCompensation, // Empurra o conteúdo para baixo
  }
};

export default Layout;