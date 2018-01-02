import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">
          <h2 name="enterWanted"> Enter Wanted </h2>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <Link to="/enter">
                  <p name="enterWanted">Enter Wanted</p>
                </Link>
              </td>
              <td>
                <Link to="/modify">
                  <p name="modifyWanted">Modify Wanted</p>
                </Link>
              </td>
              <td>
                <Link to="/cancel">
                  <p name="cancelWanted">Cancel Wanted</p>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Header;