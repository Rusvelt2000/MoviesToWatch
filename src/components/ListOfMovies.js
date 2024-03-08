import MovieShow from "./MovieShow";

function ListOfMovies({ movies, onDelete }) {
  const renderedMovies = movies.map((movie) => {
    return (
      <MovieShow
        key={movie.key}
        title={movie.title}
        year={movie.year}
        ratings={movie.ratings}
        poster={movie.poster}
        genre={movie.genre}
        duration={movie.runtime}
        id={movie.id}
        onDelete={onDelete}
      />
    );
  });

  return <div className="listOfMovies">{renderedMovies}</div>;
}

export default ListOfMovies;
