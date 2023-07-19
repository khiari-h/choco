// Importer les dépendances React et ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Importer le composant racine de votre application
import App from './App'; // Remplacez "App" par le nom de votre composant racine

// Montez le composant racine dans le DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
