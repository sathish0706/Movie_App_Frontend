import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

export function Topbar({ mode, setMode }) {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/add-movie")}>
            AddMovie
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies/list")}>
            MovieList
          </Button>
          <Button color="inherit" onClick={() => navigate("/color-game")}>
            AddColor
          </Button>
          <Button
            color="inherit"
            sx={{ marginLeft: "auto" }}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? (
              <>
                <NightlightIcon />
                &nbsp;
                <b>Dark Mode</b>
              </>
            ) : (
              <>
                <LightModeIcon />
                &nbsp;
                <b>Light Mode</b>
              </>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
