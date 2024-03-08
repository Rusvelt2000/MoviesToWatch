import "./search.scss";
import axios from "axios";
import { useState } from "react";
import search from "../assets/search.svg";

function SearchEngine({ onSubmitMovie }) {
  const [movieTitle, setMovieTitle] = useState("");

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

    if (response.data.Response === "False") {
      console.log("Movie not found");
    } else {
      const newMovieObject = {
        key: response.data.imdbID,
        title: response.data.Title,
        year: response.data.Year,
        ratings: response.data.Ratings,
        poster: response.data.Poster,
        genre: response.data.Genre,
        runtime: response.data.Runtime,
        id: response.data.imdbID,
      };
      onSubmitMovie(newMovieObject);
      setMovieTitle("");
    }
  };

  const handleChange = (event) => {
    setMovieTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="searchContainer">
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
      </div>
    </form>
  );
}

export default SearchEngine;
