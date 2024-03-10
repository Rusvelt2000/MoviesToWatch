import MovieShow from "./MovieShow";

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

  return <div className="listOfMovies">{renderedMovies}</div>;
}

export default ListOfMovies;
