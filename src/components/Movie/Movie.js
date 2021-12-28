import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.scss";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.item}>
      <img src={coverImg} alt={title} className={styles.img} />
      <div className={styles.info}>
        <h3 className={styles.title}>
          <Link to={`/movieapp/${id}`}>{title}</Link>
        </h3>
        <p className={styles.summary}>
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>- {genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
