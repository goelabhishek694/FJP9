import React, { Component } from "react";
import {movies} from './getMovies'
export default class Banner extends Component {
    render() {
        let movie = movies.results[0];
    return (
      <div className="card banner-card" >
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="card-img-top banner-img" alt="..." />
       
                <h5 class="card-title banner-title">{ movie.original_title}</h5>
          <p class="card-text banner-text">
            {movie.overview}
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
      </div>
    );
  }
}
