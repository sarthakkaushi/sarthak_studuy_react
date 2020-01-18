import React, { Component } from "react";
import { connect } from "react-redux";
import { newLogout } from "../../actions/authAction";

export class Logout extends Component {
  render() {
    const handleLogout = e => {
      newLogout();
      window.location.reload();
    };
    return (
      <div
        onClick={() => handleLogout()}
        style={{ cursor: "pointer", margin: "2px" }}
      ></div>
    );
  }
}

export default connect(null, { newLogout })(Logout);
