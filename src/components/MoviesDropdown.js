import { useContext } from "react";
import defaultPoster from "../assets/default.jpeg";
import MovieContext from "../context/movies";

function MoviesDropdown({ title, poster, year }) {
  const handleClick = () => {
    addMovie(title);
  };

  const { addMovie } = useContext(MovieContext);
  return (
    <li className="movieDropdownItem" onClick={handleClick}>
      <img src={poster !== "N/A" ? poster : defaultPoster} alt={title} />
      <div>
        <p>
          <strong>{title}</strong>
        </p>
        <small>{year}</small>
      </div>
    </li>
  );
}

export default MoviesDropdown;
