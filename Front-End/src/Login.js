import React from "react";
import Footer from "./Componentes/Footer";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux'
import { AuthActions } from './actions/AuthActions'

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

  onSubmit=(e) =>{
    e.preventDefault();
    console.log(this.state);
    this.setState({errors: {}, isLoading: true});
    this.props.AuthActions(this.state)
  }

  onChange =(e) =>{
    this.setState({[e.target.name] : e.target.value});
    const { name, value } = e.target;
  }

  render() {
    const {errors, UserName, Password, isLoading} = this.state;
    return (
      <div className="principal">
        <h1>LOGIN</h1>
        <Form method="POST" onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="UserName" placeholder="Enter UserName" name="UserName" value={UserName} onChange={this.onChange}/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="Password" value={Password} onChange={this.onChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={this.isLoading}>
            Submit
          </Button>
        </Form>
        <Footer />
        
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
export default connect(null, {AuthActions} )(Login);
