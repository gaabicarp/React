import React from "react";
import Footer from "./Componentes/Footer";

class Cities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="principal">
        <h1>CITIES</h1>
        <Footer />
      </div>
    );
  }
}

export default Cities;