import "./search.scss";
import imdbImg from "../assets/imdb.svg";
import rottenImg from "../assets/rotten.svg";
import metaImg from "../assets/meta.svg";
import defaultPoster from "../assets/default.jpeg";

function MovieShow({ title, year, ratings, poster, genre, duration }) {
  const ratingSitesCount = ratings.map((rating) => {
    if (rating != null) {
      if (rating.Source.includes("Internet Movie Database")) {
        return +rating.Value.substr(0, 2).split(".").join("") * 10;
      } else if (
        rating.Source.includes("Rotten Tomatoes") ||
        rating.Source.includes("Metacritic")
      ) {
        return +rating.Value.substr(0, 2);
      } else {
        return "-";
      }
    }
    return "-";
  });

  let avgRating = 0;
  for (let rating in ratingSitesCount) {
    avgRating += Math.round(ratingSitesCount[rating] / ratingSitesCount.length);
  }

  return (
    <div className="movieShow">
      <img src={poster !== "N/A" ? poster : defaultPoster} alt={title} />
      <div className="caption">
        <h3>{title}</h3>
        <div>
          <small>Genre:</small>
          <p className="year">{genre}</p>
        </div>
        <div className="info-flex">
          <div>
            <small>Year:</small>
            <p className="year">{year}</p>
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
              ? { backgroundColor: "#bf121d" }
              : avgRating > 55 && avgRating < 75
              ? { backgroundColor: "#f0ba26" }
              : { backgroundColor: "#3fdd1e" }
          }
        >
          {avgRating}
        </p>
      </div>
    </div>
  );
}

export default MovieShow;
