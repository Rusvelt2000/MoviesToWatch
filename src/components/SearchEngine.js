import "./search.scss";
import axios from "axios";
import { useState } from "react";

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
    console.log(response.data);

    if (response.data.Response === "False") {
      console.log("Movie not found");
    } else {
      const newMovieObject = {
        // id: response.data.imdbID,
        title: response.data.Title,
        year: response.data.Year,
        ratings: response.data.Ratings,
        poster: response.data.Poster,
        genre: response.data.Genre,
        runtime: response.data.Runtime,
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
      <label htmlFor="Search">Search a movie</label>
      <input
        onChange={handleChange}
        id="Search"
        type="text"
        value={movieTitle}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchEngine;
