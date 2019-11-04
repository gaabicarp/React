import React from "react";
import Footer from "./Componentes/Footer";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="principal">
        <h1>LOGIN</h1>
        <Footer />
      </div>
    );
  }
}

export default Login;
