import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/user/signup`,
          values
        );
        console.log(response);
        if (response.data.insertedId) {
          navigate("/");
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className="login-container">
      <h1>Register</h1>
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
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          name="email"
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
          color="success"
          variant="contained"
        >
          Register
        </Button>
        <br />
        <br />
        <Link to="/">Already have an account</Link>
      </form>
    </div>
  );
};

export default Register;
