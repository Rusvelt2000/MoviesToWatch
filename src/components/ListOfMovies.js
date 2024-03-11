import MovieShow from "./MovieShow";
import emptyState from ".././assets/emptyState.svg";

function ListOfMovies({ movies, onDelete }) {
  const renderedMovies = movies.map((movie) => {
    return (
      <MovieShow
        key={movie.id}
        title={movie.Title}
        year={movie.Year}
        ratings={movie.Ratings}
        poster={movie.Poster}
        genre={movie.Genre}
        duration={movie.Runtime}
        id={movie.id}
        onDelete={onDelete}
      />
    );
  });

  let imgPlaceholder = (
    <img className="moviePlaceholder" src={emptyState} alt="Add a movie" />
  );

  return (
    <div className="listOfMovies">
      {renderedMovies.length > 0 ? renderedMovies : imgPlaceholder}
    </div>
  );
}

export default ListOfMovies;
