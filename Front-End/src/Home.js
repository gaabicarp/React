import React from "react";
import Cabecera from "./Componentes/Cabecera";
import Body from "./Componentes/Body";
import Log from "./Componentes/Log";
import Footer from "./Componentes/Footer";
import "./App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="principal">
        <Cabecera />
        <Body />
        <Log />
        <Footer />
      </div>
    );
  }
}

export default Home;
