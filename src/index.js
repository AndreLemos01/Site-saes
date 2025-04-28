import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';  // Importação do Router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  {/* Envolvendo o App com Router */}
      <App />
    </Router>
  </React.StrictMode>
);

// Se você quiser começar a medir o desempenho no seu app, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um ponto de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
