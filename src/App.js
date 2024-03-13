import "./app.scss";
import { useContext, useEffect } from "react";
import SearchEngine from "./components/SearchEngine";
import ListOfMovies from "./components/ListOfMovies";
import MovieContext from "./context/movies";

function App() {
  const { fetchMovies } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="appContainer">
      <section className="search">
        <div className="container">
          <SearchEngine />
        </div>
      </section>
      <section className="listOfMoviesContainer">
        <div className="container">
          <ListOfMovies />
        </div>
      </section>
    </div>
  );
}

export default App;
