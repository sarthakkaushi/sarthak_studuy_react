import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Notlogin extends Component {
  render() {
    return (
      <div style={{ margin: "0 auto" }}>
        <center>
          <h5 style={{ fontSize: "40px" }}>
            You are Not Logged In Please <Link to="/login">Login</Link>
          </h5>
        </center>
      </div>
    );
  }
}
