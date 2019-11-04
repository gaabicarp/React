import React from "react";
import Flecha from "./img/circled-right-2.png";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cuerpo">
        <p>
          Find your perfect trip, designed by insiders who know and love their
          cities
        </p>
        <h1>Start Browsing</h1>
        <img src={Flecha}></img>
      </div>
    );
  }
}

export default Body;
