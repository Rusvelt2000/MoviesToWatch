import axios from "axios";
import { useState, useContext } from "react";
import search from "../assets/search.svg";
import MovieContext from "../context/movies";

function SearchEngine() {
  const { addMovie } = useContext(MovieContext);
  const [movieTitle, setMovieTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="searchContainer">
        <h1>My Watch List</h1>
        <label htmlFor="Search">Search a movie</label>
        <div className="inputContainer">
          <input
            onChange={handleChange}
            id="Search"
            type="text"
            value={movieTitle}
          />
          <button>
            <img src={search} alt="Search" />
            Search
          </button>
        </div>
        <small>{errorMessage}</small>
      </div>
    </form>
  );
}

export default SearchEngine;
