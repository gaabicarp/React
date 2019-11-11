import React from "react";
import Header from "./Componentes/Header";
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
        <Header />
        <Body />
        <Log />
        <Footer />
      </div>
    );
  }
}

export default Home;
