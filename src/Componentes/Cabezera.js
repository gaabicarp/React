import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Profile from "./img/profile.png";
import MenuHamb from "./img/menuhamb.png";

class Cabezera extends React.Component {
  render() {
    return (
      <div className="Arriba">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
            <img src={Profile} className="Cabezera-img"></img>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="/create">Create Account</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
            <img src={MenuHamb} className="Cabezera-img"></img>
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

export default Cabezera;
// import React from "react";
// import MenuHamb from "./img/menuhamb.png";
// import Profile from "./img/profile.png";

// class Cabezera extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="Cabezera">
//
//         <img src={MenuHamb}></img>
//       </div>
//     );
//   }
// }

// export default Cabezera;
