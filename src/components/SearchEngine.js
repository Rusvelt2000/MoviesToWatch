import "./search.scss";
import { useState } from "react";

function SearchEngine({ onSubmitMovie }) {
  const [movieTitle, setMovieTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitMovie(movieTitle);
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
