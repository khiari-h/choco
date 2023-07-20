import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import accueil1 from './images/accueil1.jpg';
import accueil2 from './images/accueil2.jpg';
import accueil3 from './images/accueil3.jpg';

function Carouselaccueil() {
  return (
    <div className="App">
      <Carousel autoPlay={true} interval={3000} stopOnHover={false}>
        <div>
          <img src={accueil1} alt="Accueil 1" />
          <p className="legend">Légende de l'image 1</p>
        </div>
        <div>
          <img src={accueil2} alt="Accueil 2" />
          <p className="legend">Légende de l'image 2</p>
        </div>
        <div>
          <img src={accueil3} alt="Accueil 3" />
          <p className="legend">Légende de l'image 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Carouselaccueil;
