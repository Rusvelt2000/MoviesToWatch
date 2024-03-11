import imdbImg from "../assets/imdb.svg";
import rottenImg from "../assets/rotten.svg";
import metaImg from "../assets/meta.svg";
import bin from "../assets/bin.svg";
import edit from "../assets/edit.svg";
import defaultPoster from "../assets/default.jpeg";

function MovieShow({
  title,
  year,
  ratings,
  poster,
  genre,
  duration,
  id,
  onDelete,
}) {
  const ratingSitesCount = ratings.map((rating) => {
    if (rating != null) {
      if (rating.Source.includes("Internet Movie Database")) {
        const score = rating.Value.substr(0, rating.Value.indexOf("/")) * 10;
        return score;
      } else if (rating.Source.includes("Rotten Tomatoes")) {
        const score = rating.Value.substring(0, rating.Value.indexOf("%"));
        return score;
      } else if (rating.Source.includes("Metacritic")) {
        const score = rating.Value.substring(0, rating.Value.indexOf("/"));
        return score;
      } else {
        return "-";
      }
    }
    return "-";
  });

  const handleDelete = () => {
    onDelete(id);
  };

  let avgRating = 0;
  for (let rating in ratingSitesCount) {
    avgRating += Math.round(ratingSitesCount[rating] / ratingSitesCount.length);
  }

  return (
    <div className="movieShow">
      <div className="posterContainer">
        <img src={poster !== "N/A" ? poster : defaultPoster} alt={title} />
        <div className="close actions" onClick={handleDelete}>
          <img className="bin" src={bin} alt="Delete Movie" />
        </div>
        <div className="edit actions">
          <img className="pen" src={edit} alt="Edit Movie" />
        </div>
      </div>
      <div className="caption">
        <h3>{title}</h3>
        <div>
          <small>Genre:</small>
          <p>{genre}</p>
        </div>
        <div className="info-flex">
          <div>
            <small>Year:</small>
            <p>{year}</p>
          </div>
          <div>
            <small>Duration:</small>
            <p>{duration}</p>
          </div>
        </div>
        <div className="info-flex">
          <div style={ratingSitesCount[0] == null ? { display: "none" } : {}}>
            <img src={imdbImg} alt="IMDB" />
            <p>{ratingSitesCount[0]}%</p>
          </div>
          <div style={ratingSitesCount[1] == null ? { display: "none" } : {}}>
            <img src={rottenImg} alt="Rotten Tomatoes" />
            <p>{ratingSitesCount[1]}%</p>
          </div>
          <div style={ratingSitesCount[2] == null ? { display: "none" } : {}}>
            <img src={metaImg} alt="Metacritics" />
            <p>{ratingSitesCount[2]}%</p>
          </div>
        </div>

        <p
          className="rating"
          style={
            avgRating <= 55
              ? { background: "linear-gradient(150deg, #ff4d59, #bf121d)" }
              : avgRating > 55 && avgRating < 75
              ? { background: "linear-gradient(150deg, #ffd45d, #f0ba26)" }
              : { background: "linear-gradient(150deg, #59ff38, #1ba300)" }
          }
        >
          {avgRating}
        </p>
      </div>
    </div>
  );
}

export default MovieShow;
