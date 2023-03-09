import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/user/login`,
          values
        );
        console.log(response);

        if (response.data.message === "Succesful login...") {
          setLoginUser(response.data);
          navigate("/home");
        } else {
          alert("incorrect email or password");
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className="login-container">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          type="username"
          placeholder="User Name"
          value={values.username}
          onChange={handleChange}
          name="username"
          className="login-feild"
        />
        <br />
        <br />
        <TextField
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          name="password"
          className="login-feild"
        />
        <br />
        <br />
        <Button
          type="submit"
          className="login-feild"
          color="secondary"
          variant="contained"
        >
          Log in
        </Button>
        <br />
        <br />
        <Link to="/register">register account</Link>
      </form>
    </div>
  );
};

export default Login;
