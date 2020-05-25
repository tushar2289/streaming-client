import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="active item">
          Home
        </Link>
        <Link to="/" className="item">
          All Streams
        </Link>
        {this.props.isSignedIn ? (
          <Link to="/streams/new" className="item">
            New Stream
          </Link>
        ) : (
          ""
        )}
        {this.props.isSignedIn ? (
          <Link to="/streams/edit" className="item">
            Edit Stream
          </Link>
        ) : (
          ""
        )}
        <div className="right menu">
          <GoogleAuth></GoogleAuth>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps)(Header);
