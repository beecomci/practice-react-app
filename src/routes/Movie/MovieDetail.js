import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import Title from "../../components/Title/Title";
import styles from "../../components/Movie/Movie.module.scss";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => getMoive(), []);

  return (
    <div>
      <Title text="About Movie Detail" />
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.item}>
          <img
            src={movie.medium_cover_image}
            alt={movie.title}
            className={styles.img}
          />
          <div className={styles.info}>
            <h3 className={styles.title}>{movie.title}</h3>
            <span className={styles.rating}>rating : {movie.rating}</span>
            <ul>
              {movie.genres.map((genre, index) => (
                <li key={index}>- {genre}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
