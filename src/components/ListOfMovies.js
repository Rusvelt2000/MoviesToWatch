import MovieShow from "./MovieShow";

function ListOfMovies({ movies }) {
  const renderedMovies = movies.map((movie) => {
    return (
      <MovieShow
        key={movie.id}
        title={movie.title}
        year={movie.year}
        ratings={movie.ratings}
        poster={movie.poster}
        genre={movie.genre}
        duration={movie.runtime}
      />
    );
  });

  return <div className="listOfMovies">{renderedMovies}</div>;
}

export default ListOfMovies;
