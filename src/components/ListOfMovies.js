import MovieShow from "./MovieShow";

function ListOfMovies({ movies }) {
  const renderedMovies = movies.map((movie) => {
    return (
      <MovieShow
        key={Math.floor(Math.random() * 9) + movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        ratings={movie.Ratings}
        poster={movie.Poster}
        genre={movie.Genre}
        duration={movie.Runtime}
      />
    );
  });

  return <div className="listOfMovies">{renderedMovies}</div>;
}

export default ListOfMovies;
