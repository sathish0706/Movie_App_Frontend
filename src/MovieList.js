import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(`${process.env.REACT_APP_URL}/movies`)
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  useEffect(() => {
    getMovie();
  }, []);
  const deleteMovie = (id) => {
    fetch(`${process.env.REACT_APP_URL}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovie());
  };
  return (
    <div className="movie-list-container">
      {movieList.map((mv) => (
        <Movie
          key={mv._id}
          movies={mv}
          id={mv._id}
          deleteButton={
            <IconButton
              onClick={() => {
                deleteMovie(mv._id);
              }}
            >
              <DeleteIcon color="error" />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
function Movie({ movies, id, deleteButton }) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  // const navigate1 = useNavigate();

  let styles = {
    color: movies.rating >= 8.5 ? "green" : "red",
    fontSize: "20px",
  };

  return (
    <Card className="movie-container">
      <img src={movies.poster} alt={movies.name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {movies.name}
            <IconButton onClick={() => setShow(!show)}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              onClick={() => navigate(`/movies/${id}`)}
              color="primary"
              aria-label="Movie details"
            >
              <InfoIcon />
            </IconButton>
          </h2>
          <p className="movie-rating" style={styles}>
            &nbsp;{movies.rating}
          </p>
        </div>
        {show ? <p className="movie-summary">{movies.summary}</p> : ""}
        <div className="card-bottom">
          <Counter />
          <IconButton onClick={() => navigate(`/edit/movies/${id}`)}>
            <EditIcon color="secondary" />
          </IconButton>
          {deleteButton}
        </div>
      </CardContent>
    </Card>
  );
}
