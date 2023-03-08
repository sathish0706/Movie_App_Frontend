import React, { useEffect, useState } from "react";
import "./App.css";
import AddMovie from "./AddMovie";
import { MovieList } from "./MovieList";
import { Routes, Route } from "react-router-dom";
import AddColor from "./AddColor";
import { MovieDetails } from "./MovieDetails";
import { NotFound } from "./NotFound";
import Home from "./Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Topbar } from "./Topbar";
import Paper from "@mui/material/Paper";
import Login from "./Auth/Login";
import EditMovie from "./EditMovie";
import Register from "./Auth/Register";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const [loginUser, setLoginUser] = useState([]);
  console.log("user", loginUser);

  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={3} sx={{ minHeight: "100vh", borderRadius: "0px" }}>
        <div className="App">
          <Topbar setMode={setMode} mode={mode} />
          <div className="route-container">
            <Routes>
              <Route path="/" element={<Login setLoginUser={setLoginUser} />} />
              <Route path="/register" element={<Register />} />

              <Route element={<PrivateRoute loginUser={loginUser} />}>
                <Route path="/home" element={<Home />} />
                <Route path="/add-movie" element={<AddMovie />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
                <Route path="/movies/list" element={<MovieList />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/color-game" element={<AddColor />} />
                <Route path="/edit/movies/:id" element={<EditMovie />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
export default App;
