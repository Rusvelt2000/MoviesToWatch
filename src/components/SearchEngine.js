import axios from "axios";
import { useState, useContext } from "react";
import search from "../assets/search.svg";
import MovieContext from "../context/movies";
import MoviesDropdown from "./MoviesDropdown";

function SearchEngine() {
  const { addMovie } = useContext(MovieContext);
  const [movieTitle, setMovieTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [renderedMovies, setRenderedMovies] = useState([]);

  const searchMovie = async (query) => {
    const response = await axios.get(
      "http://www.omdbapi.com/?apikey=4e918078&`",
      {
        params: {
          s: query,
        },
      }
    );
    if (response.data.Response === "True") {
      const renderedMovies = response.data.Search.map((movie) => {
        console.log(movie);
        return (
          <MoviesDropdown
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            key={movie.imdbID}
          />
        );
      });
      setRenderedMovies(renderedMovies);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=4e918078&`,
      {
        params: {
          t: movieTitle,
        },
      }
    );
    if (movieTitle === "") {
      setErrorMessage("Please enter a movie title.");
    } else if (response.data.Response === "False") {
      setErrorMessage(
        `"${movieTitle}" was not found. Please try searching for an existing movie title.`
      );
    } else {
      addMovie(response.data);
      setMovieTitle("");
      setErrorMessage("");
    }
  };

  const handleChange = (event) => {
    setMovieTitle(event.target.value);
    searchMovie(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="searchContainer">
          <h1>My Watch List</h1>
          <label htmlFor="Search">Search a movie</label>
          <div className="inputContainer">
            <div className="inputDropdownWrapper">
              <input
                onChange={handleChange}
                id="Search"
                type="text"
                value={movieTitle}
              />
              <ul className="MoviesDropdown">{renderedMovies}</ul>
            </div>
            <button>
              <img src={search} alt="Search" />
              Search
            </button>
          </div>
          <small>{errorMessage}</small>
        </div>
      </form>
    </div>
  );
}

export default SearchEngine;
