import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="bg-dark text-white mt-2 p-3 text-center fixed-bottom">
          Copyright &copy; {new Date().getFullYear()} vEarn
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
