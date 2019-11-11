import React from "react";
import logo from "./img/Logo.png";
import Avion from "./img/Avion.png";
import Comida from "./img/Comida.png";
import Musica from "./img/Musica.png";
import Transporte from "./img/Transporte.png";
import Cabezera from "./Cabezera";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Cabezera></Cabezera>
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
      </div>
    );
  }
}

export default Header;
