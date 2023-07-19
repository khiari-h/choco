import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

function Carouselaccueil() {
  return (
    <div className="App">
      <Carousel>
        <div>
          <img src="images/accueil1.jpg" alt="Accueil 1" />
          <p className="legend">Légende de l'image 1</p>
        </div>
        <div>
          <img src="images/accueil2.jpg" alt="Accueil 2" />
          <p className="legend">Légende de l'image 2</p>
        </div>
        <div>
          <img src="images/accueil3.jpg" alt="Accueil 3" />
          <p className="legend">Légende de l'image 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Carouselaccueil;
