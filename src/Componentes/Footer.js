import React from "react";
import Homeimg from "./img/homeIcon.png";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="btn-home">
          <Link to="/">
            <img src={Homeimg}></img>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
