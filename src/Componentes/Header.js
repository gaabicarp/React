import React from "react";
import logo from "./img/Logo.png";
import Avion from "./img/Avion.png";
import Comida from "./img/Comida.png";
import Musica from "./img/Musica.png";
import Transporte from "./img/Transporte.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="Menu">
          <img src={Avion}></img>
          <img src={Comida}></img>
          <img src={Musica}></img>
          <img src={Transporte}></img>
        </div>
      </div>
    );
  }
}

export default Header;
