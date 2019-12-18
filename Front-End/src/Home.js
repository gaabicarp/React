import React from "react";
import Cabecera from "./Componentes/Cabecera";
import Body from "./Componentes/Body";
import Log from "./Componentes/Log";
import "./App.css";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    const { auth } = this.props
    return (
      <div className="principal">
        <Cabecera />
        <Body />
        {auth.isAuthenticated ? null : <Log />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
  auth: state.auth
  };
};

export default connect(mapStateToProps, null)(Home);
