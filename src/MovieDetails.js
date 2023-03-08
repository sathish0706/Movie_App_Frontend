import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export function MovieDetails() {
  let { id } = useParams();
  // let movie = movies[id];

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);

  let navigate = useNavigate();

  let styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
    fontSize: "20px",
  };
  return (
    <div>
      <div className="movie-datails-container">
        <iframe
          width="1500"
          height="600"
          src={movie.trailer}
          title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h2 className="movie-name">{movie.name}</h2>
        <p className="movie-rating" style={styles}>
          &nbsp;{movie.rating}
        </p>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
}
