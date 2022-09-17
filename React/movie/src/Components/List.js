import React, { Component } from "react";
import { movies } from "./getMovies";

export default class List extends Component {
  render() {
    let allMovies = movies.results;
    return (
      <div>
        <h3 className="trending display-3">Trending</h3>
        <div className="movies-list">
          {allMovies.map((movieObj) => {
            return (
              <div className="card movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                  className="card-img-top movie-img"
                  alt="..."
                />
                <h5 class="card-title movie-title">
                  {movieObj.original_title}
                </h5>
                {/* <p class="card-text movie-text">{movie.overview}</p> */}
                <div className="button-wrapper">
                  <a href="#" class="btn btn-info movie-button">
                    Add to Favourites
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
