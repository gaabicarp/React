import React from "react";
import { Link } from "react-router-dom";
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
                <Link to="/login">Log In</Link>
              </td>
              <td>
                <Link to="/singin">Create Acount</Link>
              </td>
            </tr>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Log;
