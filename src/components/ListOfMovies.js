import MovieShow from "./MovieShow";

function ListOfMovies({ movies }) {
  const renderedMovies = movies.map(({ title, year, imdbID }) => {
    return <MovieShow key={imdbID} title={title} year={year} />;
  });

  return (
    <div>
      <div>{renderedMovies}</div>
    </div>
  );
}

export default ListOfMovies;
