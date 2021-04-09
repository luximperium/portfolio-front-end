import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { Link, Route, Switch } from "react-router-dom";
import AudioSpectrum from "react-audio-spectrum";
import SkrillexLux from "../assets/skrillux.wav";
import Audio from "./audioPlayer/Audio";
import "./audioPlayer/styles.scss";

function AppBarComp() {
  return (
    <Grid container direction="column">
      <Grid item xs={12} style={{ marginTop: "1em" }}>
        <Grid container style={{ textAlign: "center" }}>
          <AppBar position="fixed" color="secondary">
            <Toolbar>
              <Grid item xs={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button>Home</Button>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <Button>About</Button>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/blog" style={{ textDecoration: "none" }}>
                  <Button>Blog</Button>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <Button>Contact</Button>
                </Link>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AppBarComp;
