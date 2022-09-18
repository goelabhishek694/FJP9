import React, { Component } from 'react'
import axios from 'axios'
export default class Favourites extends Component {

    constructor() {
        super()
        this.state = {
            movies:[]
        }
    }
  async componentDidMount() {
    console.log("CDM is called ");
    // let res = await fetch(
    //   "https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=2"
    // );
    // let data = await res.json();
    let data = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=1`
    );
    console.log(data.data);
    this.setState({
      movies: [...data.data.results],
    });
  }
    render() {
      let genreId = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Sci-Fi",
        10770: "TV",
        53: "Thriller",
        10752: "War",
        37: "Western",
      };
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Popularity</th>
            <th scope="col">Rating</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movieObj) => (
            <tr>
              <td>
                <img
                          src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                          style={{width:'8rem'}}
                />
                {movieObj.original_title}
              </td>
              <td>{genreId[movieObj.genre_ids[0]]}</td>
              <td>{movieObj.popularity}</td>
                  <td>{movieObj.vote_average}</td>
                  <td>
                      <button className="btn btn-outline-danger">Delete</button>
                  </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
