import React from "react";
import Flecha from "./img/circled-right-2.png";
import { Link } from "react-router-dom";
import Avion from "./img/Avion.png";
import Comida from "./img/Comida.png";
import Musica from "./img/Musica.png";
import Transporte from "./img/Transporte.png";

class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="cuerpo">
          <p>Find your perfect trip, designed by insiders who know and love their cities</p>
          <div className="Menu">
            <img alt="avion" src={Avion}></img>
            <img alt="comida" src={Comida}></img>
            <img alt="musica" src={Musica}></img>
            <img alt="transporte" src={Transporte}></img>
          </div>
          <h1>Start Browsing</h1>
          <br></br>
          <Link to="/cities">
            <img alt="flecha" src={Flecha} className="Flecha"></img>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
