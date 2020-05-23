import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";

function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="active item">
        Home
      </Link>
      <Link to="/" className="item">
        All Streams
      </Link>
      <Link to="/streams/new" className="item">
        New Stream
      </Link>
      <Link to="/streams/edit" className="item">
        Edit Stream
      </Link>
      <div className="right menu">
        <GoogleAuth></GoogleAuth>
      </div>
    </div>
  );
}

export default Header;
