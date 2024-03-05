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
      <section className="search">
        <div className="searchContainer container">
          <h1>My Watch List</h1>
          <SearchEngine onSubmitMovie={handleSearchMovie} />
        </div>
      </section>
      <section className="listOfMoviesContainer ">
        <div className="container">
          <ListOfMovies movies={movies} />
        </div>
      </section>
    </div>
  );
}

export default App;
