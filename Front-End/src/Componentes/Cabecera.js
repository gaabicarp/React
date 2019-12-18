import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Profile from "./img/profile.png";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Cabecera extends React.Component {
  
  onClick = () =>{
    localStorage.removeItem('jwtToken')
    return <Redirect to="/"/>
  }


  render() {
    const {auth} = this.props
    console.log(this.props)
    return (
      <div className="Arriba">
        <Dropdown>
          <Dropdown.Toggle variant="Secundary" id="dropdown-basic" size="sm">
            <div className="Img-menu">
              <img alt="profile" src={ auth.isAuthenticated ? auth.user.profileImage : Profile } className="Cabecera-img"></img>
            </div>
          </Dropdown.Toggle>
            {auth.isAuthenticated ? <Dropdown.Menu><Dropdown.Item href="/cities">Cities</Dropdown.Item><Dropdown.Item onClick={this.onClick}>Logout</Dropdown.Item></Dropdown.Menu> : <Dropdown.Menu><Dropdown.Item href="/login">Login</Dropdown.Item><Dropdown.Item href="/create">Create Account</Dropdown.Item></Dropdown.Menu> }
          
        </Dropdown>

      </div>
    );
  }
}


const mapStateToProps = state => {
  return{
  auth: state.auth
  };
};

export default connect(mapStateToProps, null)(Cabecera);
