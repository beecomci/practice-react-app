import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <h2>About {movie.title} Movie Detail</h2>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <span>rating : {movie.rating}</span>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
