import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Profile from "./img/profile.png";
import MenuHamb from "./img/menuhamb.png";
import logo from "./img/Logo.png";

class Cabecera extends React.Component {
  render() {
    return (
      <div className="Arriba">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
            <img src={Profile} className="Cabecera-img"></img>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="/create">Create Account</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="Header">
          <div className="logo">
            <img src={logo}></img>
          </div>
        </div>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
            <img src={MenuHamb} className="Cabecera-img"></img>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="/create">Create Account</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Cabecera;