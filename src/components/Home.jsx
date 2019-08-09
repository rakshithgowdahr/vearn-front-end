import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div id="home_container" className="home d-flex justify-content-center">
          <div className="img">
            <h3 style={{ opacity: "1" }} className="display-3">
              Unlimited entertainment Unlimited fun
            </h3>

            <Link to="/api/login">
              <button
                style={{ opacity: "1" }}
                className="btn btn-outline-primary btn-lg m-2"
              >
                Login
              </button>
            </Link>
            <Link to="/api/register">
              <button
                style={{ opacity: "1" }}
                className="btn btn-warning btn-lg m-2"
              >
                Signup
              </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
