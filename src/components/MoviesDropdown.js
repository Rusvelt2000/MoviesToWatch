import defaultPoster from "../assets/default.jpeg";

function MoviesDropdown({ title, poster, year, type, onMovieSubmit }) {
  const handleClick = () => {
    onMovieSubmit(title);
  };
  return (
    <li onClick={handleClick}>
      <img src={poster !== "N/A" ? poster : defaultPoster} alt={title} />
      <div>
        <p>{title}</p>
        <small>
          {type} - {year}
        </small>
      </div>
    </li>
  );
}

export default MoviesDropdown;
