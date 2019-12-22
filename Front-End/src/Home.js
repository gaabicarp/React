import React from "react";
import Cabecera from "./Componentes/Cabecera";
import Body from "./Componentes/Body";
import Log from "./Componentes/Log";
import "./App.css";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div className="principal">
        <br></br>
        <Body />
        <Log />
      </div>
    );
  }
}

export default Home;
