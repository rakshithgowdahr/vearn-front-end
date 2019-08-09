import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Movies from "./components/Movies";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/api/login" component={Login} />
        <Route exact path="/api/register" component={Register} />
        <Route exact path="/api/movies" component={Movies} />
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
