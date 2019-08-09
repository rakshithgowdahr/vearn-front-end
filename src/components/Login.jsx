import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <label className="navbar_login" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="form-control input_login"
            />
          </div>
          <div className="form-group">
            <label className="navbar_login" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control input_login"
            />
          </div>
          <button className="btn btn-primary btn-navbar">Login</button>
          <Link to="/api/register">
            <span>
              New User ?<a href="#">Signup</a>
            </span>
          </Link>
          <Link to="/api/movies">
            <button className="btn btn-warning">Movies</button>
          </Link>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
