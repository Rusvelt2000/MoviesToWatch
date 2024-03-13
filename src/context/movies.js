import { createContext, useState, useCallback } from "react";
import axios from "axios";

const MovieContext = createContext();

function Provider({ children }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/movies");
    setMovies(response.data.sort((a, b) => b.id - a.id));
  }, []);

  const addMovie = async (movieObject) => {
    const newMovie = await axios.post(
      "http://localhost:3001/movies",
      movieObject
    );

    setMovies([newMovie.data, ...movies]);
  };

  const deleteMovie = async (id) => {
    await axios.delete(`http://localhost:3001/movies/${id}`);

    const updatedListOfMovies = movies.filter((movie) => {
      return movie.id !== id;
    });

    setMovies(updatedListOfMovies);
  };

  const movieContextValue = {
    movies,
    fetchMovies,
    addMovie,
    deleteMovie,
  };

  return (
    <MovieContext.Provider value={movieContextValue}>
      {children}
    </MovieContext.Provider>
  );
}

export { Provider };
export default MovieContext;
