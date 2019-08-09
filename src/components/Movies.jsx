import React, { Component } from "react";
import logo from "../assets/icon.png";
class Movies extends Component {
  state = {
    movies: [
      { id: 1, title: "Gone Girl", gnere: "Thriller", rate: 7.8 },
      {
        id: 2,
        title: "The Avengers",
        gnere: "Action",
        rate: 8.0
      },
      {
        id: 3,
        title: "The Wolf of the Wall Street",
        gnere: "Action",
        rate: 6.8
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">
            All
          </button>

          <button type="button" className="btn btn-primary">
            Action
          </button>
          <button type="button" className="btn btn-primary">
            Horror
          </button>
          <button type="button" className="btn btn-primary">
            Comedy
          </button>
        </div>
        <div className="movies-table">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Rate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => (
                <tr>
                  <td>{movie.id}</td>
                  <td className="text-primary">
                    {movie.title}
                    <img style={{ float: "right" }} src={logo} alt={movie.id} />
                  </td>
                  <td>{movie.gnere}</td>
                  <td className="text-danger">{movie.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
