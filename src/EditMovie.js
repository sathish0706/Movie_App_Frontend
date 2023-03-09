import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import axios from "axios";

export const formValidationSchema = yup.object({
  name: yup.string().required("Please fill name"),
  poster: yup.string().required("Please fill movie url"),
  rating: yup
    .number()
    .required("Please fill rating")
    .min(0, "0 - 10 required")
    .max(10, "Should not exceed 10"),
  summary: yup
    .string()
    .required("Please fill summary")
    .min(20, "Minimum 20 character needed"),
  trailer: yup
    .string()
    .required("Please fill trailer")
    .min(20, "Minimum 20 character needed"),
});
function EditMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);

  return movie ? <EditMovieForm movie={movie} /> : "Loading";
}

function EditMovieForm({ movie }) {
  const { id } = useParams();
  let navigate = useNavigate();

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        console.log(values);
        fetch(`${process.env.REACT_APP_URL}/movies/${id}`, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((data) => navigate("/movies/list"))
          .catch((err) => console.log(err));
      },
    });

  console.log(movie);
  return (
    <div className="add-movie-container">
      <div className="add-movie-body">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            className="text-feild"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="name"
          />
          <br />
          <br />
          <span className="error">
            {touched.name && errors.name ? errors.name : ""}
          </span>
          <br />
          <TextField
            label="Poster"
            variant="outlined"
            className="text-feild"
            value={values.poster}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="poster"
          />
          <br />
          <span className="error">
            {touched.poster && errors.poster ? errors.poster : ""}
          </span>
          <br />

          <TextField
            label="Rating "
            variant="outlined"
            className="text-feild"
            value={values.rating}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            name="rating"
          />
          <br />
          <br />
          <span className="error">
            {touched.rating && errors.rating ? errors.rating : ""}
          </span>
          <br />

          <TextField
            label="Summary"
            variant="outlined"
            className="text-feild"
            value={values.summary}
            onChange={handleChange}
            onBlur={handleBlur}
            type="summary"
            name="summary"
          />
          <br />
          <br />
          <span className="error">
            {touched.summary && errors.summary ? errors.summary : null}
            <br />
          </span>
          <TextField
            label="Trailer"
            variant="outlined"
            className="text-feild"
            value={values.trailer}
            onChange={handleChange}
            onBlur={handleBlur}
            type="trailer"
            name="trailer"
          />
          <br />
          <br />
          <span className="error">
            {touched.trailer && errors.trailer ? errors.trailer : null}
            <br />
          </span>

          <Button
            variant="contained"
            type="submit"
            color="success"
            className="add-movie-button"
          >
            Save
          </Button>
          <br />
        </form>
      </div>
    </div>
  );
}
export default EditMovie;
