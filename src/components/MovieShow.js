import "./search.scss";

function MovieShow({ title, year, rating, poster }) {
  return (
    <div className="movieShow">
      <img src={poster} alt={title} />
      <div className="caption">
        <h3>{title}</h3>
        <small>Release year:</small>
        <p className="year">{year}</p>
        <small>Rating:</small>
        <p className="rating">{rating}</p>
      </div>
    </div>
  );
}

export default MovieShow;
