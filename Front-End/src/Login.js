import React from "react";
import Footer from "./Componentes/Footer";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux'
import { AuthActions } from './actions/AuthActions'
import logo from "./Componentes/img/Logo.png";
import { withRouter } from "react-router-dom";
import GoogleButton from 'react-google-button';
import Accordion from 'react-bootstrap/Accordion'


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      UserName: '',
      Password: '',
      errors: {},
      isLoading: false
    };
  }

  onSubmit= (e) =>{
    e.preventDefault();
    console.log(this.state);
    this.setState({errors: {}, isLoading: true});
    this.props.AuthActions(this.state);
    this.props.history.push('/');
  }

  onChange =(e) =>{
    this.setState({[e.target.name] : e.target.value});
  }

  render() {
    const {errors, UserName, Password, isLoading} = this.state;
    return (
      <div className="principal">
        <br></br>
        <div className="logo">
          <img alt="logo" src={logo}></img>
        </div>
        <div className="cuerpo">
          <h3>Ingresa con tu cuenta de <b>Mytinerary</b></h3>
        </div>
        <br></br>
        <div className="FormCreate">
        <div className="Gboton">
          <a href="http://localhost:4000/auth/google">
            <GoogleButton/>
          </a>
          <p>Al ingresar con Google estas aceptando nuestros términos y condiciones.</p>
        </div>

        <hr></hr>

        <Accordion>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Button variant="primary" type="submit">
                  Ingresá con tu cuenta
                </Button>
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Form method="POST" onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Cuenta</Form.Label>
                  <Form.Control type="UserName" placeholder="La cuenta con la que te registraste" name="UserName" value={UserName} onChange={this.onChange}/>
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="Password" value={Password} onChange={this.onChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={this.isLoading}>
                  Ingresar
                </Button>
              </Form>
             </Accordion.Collapse>
         </Accordion>
        <br></br>
        <p>¿No tenés cuenta? Ingresa con Google o <a href="/create">Registrate acá</a></p>
        <Footer />
        </div>
      </div>
    );
  }
}

// Login.propTypes = {
//   login: React.propTypes.func.isRequired
// }

// Login.contextTypes = {
//   router: React.propTypes.objet.isRequired
// }
export default withRouter(connect(null, {AuthActions} )(Login));
