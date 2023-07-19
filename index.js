// Importer les dépendances React et ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Importer le composant racine de votre application

import Carouselaccueil from './carousel';

// Montez le composant racine dans le DOM
ReactDOM.render(
  <React.StrictMode>
    <Carouselaccueil />
  </React.StrictMode>,
  document.getElementById('root')
);
