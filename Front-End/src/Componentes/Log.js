import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Log extends React.Component {

  render() {
    return (
      <div className="Log">
          <p>Want to build your own Ytinary?</p>
          <Container>
            <Row>
              <Col>
                <Link to ="/create">
                  <Button variant="outline-danger" size="sm" block>
                    Create Account
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to="/login">
                  <Button variant="outline-danger" size="sm" block>
                    Log In
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default Log;
