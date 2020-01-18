import React, { Component } from "react";
import Navbar from "./Navbar";
import { logout } from "../../actions/authAction";

import { connect } from "react-redux";
import PropTypes from "prop-types";
class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div>
        <Navbar isAuthenticated={isAuthenticated} user={user} logout={logout} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Header);
