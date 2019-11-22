import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Log extends React.Component {

  render() {
    return (
      <React.Fragment>
          <p>Want to build your own Ytinary?</p>
          <Container>
            <Row>
              <Col>
                <Link to ="/login">
                  <Button variant="outline-success" size="sm" block>
                    Create Account
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to="/create">
                  <Button variant="outline-success" size="sm" block>
                    Log In
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
      </React.Fragment>
    );
  }
}

export default Log;
