import "./app.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchEngine from "./components/SearchEngine";
import ListOfMovies from "./components/ListOfMovies";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get("http://localhost:3001/movies");
    setMovies(response.data.sort((a, b) => b.id - a.id));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const addMovie = (movieObject) => {
    axios.post("http://localhost:3001/movies", movieObject);
    setMovies([movieObject, ...movies]);
  };

  const deleteMovie = async (id) => {
    await axios.delete(`http://localhost:3001/movies/${id}`);

    const updatedListOfMovies = movies.filter((movie) => {
      return movie.id !== id;
    });

    setMovies(updatedListOfMovies);
  };

  return (
    <div className="appContainer">
      <section className="search">
        <div className="searchContainer container">
          <h1>My Watch List</h1>
          <SearchEngine onSubmitMovie={addMovie} />
        </div>
      </section>
      <section className="listOfMoviesContainer">
        <div className="container">
          <ListOfMovies movies={movies} onDelete={deleteMovie} />
        </div>
      </section>
    </div>
  );
}

export default App;
