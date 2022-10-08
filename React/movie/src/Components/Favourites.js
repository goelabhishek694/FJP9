import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
export default class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genre: [],
      currGenre: "All Genre",
      currText: "",
    };
  }
  async componentDidMount() {
    console.log("CDM is called ");
    // let res = await fetch(
    //   "https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=2"
    // );
    // let data = await res.json();
    let data = JSON.parse(localStorage.getItem("movies"));
    // console.log(data.data);
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
    let allGenre = [];
    data.map((movieObj) => {
      if (!allGenre.includes(genreId[movieObj.genre_ids[0]])) {
        allGenre.push(genreId[movieObj.genre_ids[0]]);
      }
    });

    allGenre.unshift("All Genre");
    console.log(allGenre);

    this.setState({
      movies: [...data],
      genre: [...allGenre],
    });
  }

  handleGenre = (e) => {
    let genre = e.target.innerText;
    //movies ko filter
    this.setState({
      currGenre: genre,
    });
    // console.log(genre);
  };

  handleText = (e) => {
    console.log(e.target.value);
    this.setState({
      currText: e.target.value,
    });
  };

  sortPopularityAsc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
      return objA.popularity - objB.popularity;
    });
    this.setState({
      movies: [...allMovies],
    });
  };

  sortPopularityDesc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
      return objB.popularity - objA.popularity;
    });
    this.setState({
      movies: [...allMovies],
    });
  };

  sortRatingAsc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
      return objA.vote_average - objB.vote_average;
    });
    this.setState({
      movies: [...allMovies],
    });
  };

  sortRatingDesc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
      return objB.vote_average - objA.vote_average;
    });
    this.setState({
      movies: [...allMovies],
    });
  };  

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
    let filteredMovies = this.state.movies;

    // if () {
    //   filteredMovies = this.state.movies;
    // }
    if (this.state.currText !== "") {
      filteredMovies = filteredMovies.filter((movieObj) => {
        let movieName = movieObj.original_title.toLowerCase();
        return movieName.includes(this.state.currText);
      });
    }

    if (this.state.currGenre != "All Genre") {
      filteredMovies = filteredMovies.filter(
        (movieObj) => genreId[movieObj.genre_ids[0]] == this.state.currGenre
      );
    }
    // else filteredMovies = this.state.movies;
    return (
      <div className="row">
        <div className="col-3 p-5">
          <ul class="list-group">
            {this.state.genre.map((genre) => {
              return this.state.currGenre == genre ? (
                <li class="list-group-item active">{genre}</li>
              ) : (
                <li class="list-group-item" onClick={this.handleGenre}>
                  {genre}
                </li>
              );
            })}
            {/* <li class="list-group-item active">All Genre</li>
              <li class="list-group-item">Fantasy</li>
              <li class="list-group-item">Action</li>
              <li class="list-group-item">Animation</li> */}
          </ul>
        </div>
        <div className="col p-5">
          <div className="row">
            <input
              type="text"
              className="col-8"
              placeholder="Search"
              value={this.state.currText}
              onChange={this.handleText}
            ></input>
            <input
              type="number"
              className="col"
              placeholder="Results per page"
            ></input>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">
                  <i
                    class="fa-solid fa-sort-up"
                    onClick={this.sortPopularityAsc}
                  />
                  Popularity
                  <i
                    class="fa-solid fa-sort-down"
                    onClick={this.sortPopularityDesc}
                  />
                </th>
                <th scope="col">
                  <i class="fa-solid fa-sort-up" onClick={this.sortRatingAsc} />
                  Rating
                  <i
                    class="fa-solid fa-sort-down"
                    onClick={this.sortRatingDesc}
                  />
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {filteredMovies.map((movieObj) => (
                <tr>
                  <td>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      style={{ width: "8rem" }}
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
        </div>
      </div>
    );
  }
}

