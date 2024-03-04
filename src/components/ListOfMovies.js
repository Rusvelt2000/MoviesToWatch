import MovieShow from "./MovieShow";

function ListOfMovies({ movies }) {
  const renderedMovies = movies.map((movie) => {
    console.log(movie);
    return (
      <MovieShow
        key={Math.floor(Math.random() * 9) + movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        rating={movie.imdbRating}
        poster={movie.Poster}
      />
    );
  });

  return <div className="listOfMovies">{renderedMovies}</div>;
}

export default ListOfMovies;
