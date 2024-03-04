import "./app.scss";
import { useState } from "react";
import axios from "axios";
import SearchEngine from "./components/SearchEngine";
import ListOfMovies from "./components/ListOfMovies";

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearchMovie = async (movieTitle) => {
    const response = await axios.get(
      "http://www.omdbapi.com/?apikey=4e918078&",
      {
        params: {
          t: movieTitle,
        },
      }
    );

    setMovies([...movies, response.data]);
  };

  return (
    <div className="appContainer">
      <div className="searchContainer">
        <h1>My Watch List</h1>
        <SearchEngine onSubmitMovie={handleSearchMovie} />
      </div>
      <ListOfMovies movies={movies} />
    </div>
  );
}

export default App;
