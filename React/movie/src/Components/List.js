import React, { Component } from "react";
// import { movies } from "./getMovies";
import axios from "axios";
export default class List extends Component {
  constructor() {
    console.log("constructor is called");
    super();
    this.state = {
      hover: "",
      movies: [],
      currPage: 1,
    };
  }

  handleEnter = (id) => {
    this.setState({
      hover: id,
    });
  };

  handleLeave = () => {
    this.setState({
      hover: "",
    });
  };

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

  // async componentDidUpdate() {
  //   console.log("CDU is called ");
  //   if (this.state.currPage!=) {
  //     let data = await axios.get(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=${this.state.currPage}`
  //     );
  //     console.log(data.data);
  //     this.setState({
  //       movies: [...data.data.results],
  //     });
  //   }
  // }

  async getUpdatedMovies() {
    console.log("getUpdatedMovies is called");
    let data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=${this.state.currPage}`
      );
      console.log(data.data);
      this.setState({
        movies: [...data.data.results],
      });
  }

  componentWillUnmount() {
    console.log("CWU is called ");
  }

  handlePrevPage = () => {
    if (this.state.currPage > 1) {
      this.setState({ currPage: this.state.currPage - 1 },this.getUpdatedMovies)
    }
  };

  handleNextPage = () => {
     this.setState(
       { currPage: this.state.currPage + 1 },
       this.getUpdatedMovies
     );
  };

  render() {
    console.log("render method called ");
    // let allMovies = movies.results;
    return (
      <>
        {this.state.movies.length == 0 ? (
          <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <div>
              <h3 className="trending display-3">Trending</h3>
              <div className="movies-list">
                {this.state.movies.map((movieObj) => {
                  return (
                    <div
                      className="card movie-card"
                      onMouseEnter={() => this.handleEnter(movieObj.id)}
                      onMouseLeave={this.handleLeave}
                      key={movieObj.id}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        className="card-img-top movie-img"
                        alt="..."
                      />
                      <h5 className="card-title movie-title">
                        {movieObj.original_title}
                      </h5>
                      {/* <p class="card-text movie-text">{movie.overview}</p> */}
                      <div className="button-wrapper">
                        {this.state.hover == movieObj.id && (
                          <a href="#" className="btn btn-info movie-button">
                            Add to Favourites
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <nav aria-label="Page navigation example" className="pagination">
              <ul className="pagination">
                <li className="page-item" onClick={this.handlePrevPage}>
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link">{this.state.currPage}</a>
                </li>
                <li className="page-item" onClick={this.handleNextPage}>
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </>
        )}
      </>
    );
  }
}
