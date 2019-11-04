import React from "react";
import logo from "./img/MYtineraryLogo.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="logo">
        <img src={logo}></img>
      </div>
    );
  }
}

export default Header;
