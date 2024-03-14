import axios from "axios";
import { useState, useContext, useCallback, useEffect } from "react";
import MovieContext from "../context/movies";
import MoviesDropdown from "./MoviesDropdown";
import search from "../assets/search.svg";

function SearchEngine() {
  const { addMovie } = useContext(MovieContext);
  const [movieTitle, setMovieTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [renderedMovies, setRenderedMovies] = useState([]);

  const closeSearchDropdown = useCallback(() => {
    setRenderedMovies([]);
  }, []);

  const clearSearch = useCallback(() => {
    setMovieTitle("");
    setErrorMessage("");
    setRenderedMovies([]);
  }, []);

  useEffect(() => {
    document.body.addEventListener("click", closeSearchDropdown);
  }, [closeSearchDropdown]);

  useEffect(() => {
    document
      .getElementById("Search")
      .addEventListener("keydown", function (event) {
        event.stopPropagation();
        if (event.key === "Escape") {
          clearSearch();
        }
      });
  }, [clearSearch]);

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
        return (
          <MoviesDropdown
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            type={movie.Type}
            key={movie.imdbID}
            onMovieSubmit={handleDropdownItemClick}
          />
        );
      });
      setRenderedMovies(renderedMovies);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovieObject(movieTitle);
  };

  const handleDropdownItemClick = (title) => {
    getMovieObject(title);
  };

  const getMovieObject = async (title) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=4e918078&`,
      {
        params: {
          t: title,
        },
      }
    );
    if (title === "") {
      setErrorMessage("Please enter a movie title.");
    } else if (response.data.Response === "False") {
      setErrorMessage(
        `"${title}" was not found. Please try searching for an existing movie title.`
      );
    } else {
      addMovie(response.data);
      clearSearch();
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
          <div className="inputContainer">
            <div className="inputDropdownWrapper">
              <div className="inputImageWrapper">
                <input
                  onChange={handleChange}
                  id="Search"
                  type="text"
                  value={movieTitle}
                  placeholder="Search for a movie or series"
                />
                <div className="searchIconWrapper" onClick={handleSubmit}>
                  <img src={search} alt="Search" />
                </div>
              </div>
              <ul className="MoviesDropdown">{renderedMovies}</ul>
            </div>
          </div>
          <small>{errorMessage}</small>
        </div>
      </form>
    </div>
  );
}

export default SearchEngine;
