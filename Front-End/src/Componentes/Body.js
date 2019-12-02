import React from "react";
import Flecha from "./img/circled-right-2.png";
import { Link } from "react-router-dom";
import logo from "./img/Logo.png";
import Carousel from 'react-bootstrap/Carousel';
import Barcelona from "./img/Barcelona.jpg";
import BuenosAires from "./img/Buenos Aires.jpg";
import Paris from "./img/Paris.jpg"

class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="cuerpo">
        <div className="Header">
          <div className="logo">
            <img alt="logo" src={logo}></img>
          </div>
        </div>
          <p> Encuentra tu viaje perfecto, diseñado por expertos que conocen y aman sus ciudades </p>
          <h2>Empezar</h2>
          <Link to="/cities">
            <img alt="flecha" src={Flecha} className="Flecha"></img>
          </Link>
          <div className="Carrusel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Barcelona}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Barcelona</h3>
              <p>Barcelona, la capital cosmopolita de la región de Cataluña en España, es conocida por su arte y arquitectura.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={BuenosAires}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Buenos Aires</h3>
              <p>Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Paris}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Paris</h3>
              <p>París, la capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
