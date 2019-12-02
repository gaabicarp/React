import React from "react";
import Footer from "./Componentes/Footer";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import logo from "./Componentes/img/Logo.png";
import Col from 'react-bootstrap/Col';

class CreateAcount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: null,
      Lastname: null,
      Email: null,
      UserName: null,
      Password: null,

    }
  }
  
  render() {
    return (
      <div className="principal">
        <div className="logo">
          <img alt="logo" src={logo}></img>
        </div>
        <h1>SING IN</h1>
        <div className="FormCreate">
        <Form>
          <Form.Row>
            <Col>
              <Form.Label>First name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Label>Last name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Form.Row>
          <br></br>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
            <Col>
            <Form.Label>User name</Form.Label><Form.Control placeholder="User name" /></Col>
          </Form.Row>
          <form>
            <label>
              Upload file:
              <input type="file" name="image"/>
            </label>
            <br />
          </form>
          <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CreateAcount;
