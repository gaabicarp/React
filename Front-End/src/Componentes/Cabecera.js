import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Profile from "./img/profile.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import logo from "./img/Logo.png";
import { Avatar } from '@material-ui/core';

class Cabecera extends React.Component {
  
  onClick = () =>{
    localStorage.removeItem('jwtToken')
    this.props.history.push('/');
  }


  render() {
    const {auth} = this.props
    console.log(this.props)
    return (
      <div className="Arriba">

<div className="logocabecera">
          <img alt="logo" src={logo}></img>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="Secundary" id="dropdown-basic" size="sm">
            
            <Avatar alt={auth.user.UserName} src={`http://localhost:4000${auth.user.profileImage}`} />
          
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

export default withRouter(connect(mapStateToProps, null)(Cabecera));
