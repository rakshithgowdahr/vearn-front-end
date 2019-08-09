import React, { Component } from "react";
import logo from "../assets/icon.png";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark text-white">
          <Link to="/">
            <a className="navbar-brand pl-5" href="#">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top ml-2"
                alt=""
              />
              Home
            </a>
          </Link>

          <ul className="navbar-nav auto">
            <div className="row">
              <li className="nav-item pr-5">
                <a style={{ fontSize: 18 }} className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item pr-5">
                <a style={{ fontSize: 18 }} className="nav-link" href="#">
                  About
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
