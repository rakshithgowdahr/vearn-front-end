import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
  handleSubmit = e => {
    e.PreventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder=" Name"
              className="form-control input_login"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder=" Email"
              className="form-control input_login"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder=" Password"
              className="form-control input_login"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder=" Confirm password"
              className="form-control input_login"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder=" PhoneNumber"
              className="form-control input_login"
            />
          </div>
          <Link to="/api/login">
            <span>
              Allready have an account? <a href="#">Login</a>
            </span>
          </Link>
          <button className="btn btn-primary btn-navbar">SignUp</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
