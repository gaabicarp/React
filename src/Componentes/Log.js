import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
class Log extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="Tabla">
          <p>Want to build your own Ytinary?</p>
          <table>
            <tr>
              <td>
                <Link to="/login">
                  <Button variant="outline-success">Log In</Button>
                </Link>
              </td>
              <td>
                <Link to="/create">
                  <Button variant="outline-success">Create Account</Button>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Log;
