import React from "react";
import Flecha from "./img/circled-right-2.png";
import { Link } from "react-router-dom";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="cuerpo">
          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities
          </p>
          <h1>Start Browsing</h1>
          <Link to ="/cities"><img src={Flecha}></img></Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
