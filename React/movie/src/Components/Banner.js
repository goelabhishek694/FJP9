import React, { Component } from "react";
import {movies} from './getMovies'
export default class Banner extends Component {
    render() {
        let movie = movies.results[0];
    return (
      <div class="card" >
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} class="card-img-top" alt="..." />
        <div class="card-body">
                <h5 class="card-title">{ movie.original_title}</h5>
          <p class="card-text">
            {movie.overview}
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    );
  }
}
