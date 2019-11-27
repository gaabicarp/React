import React from "react";
import Homeimg from "./img/homeIcon.png";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="btn-home">
          <Link to="/">
            <img alt="Home" src={Homeimg}></img>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
