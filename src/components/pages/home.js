import React, { useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardHeader,
  Grid,
} from "@material-ui/core";
import AudioSpectrum from "react-audio-spectrum";
import Audio from "../audioPlayer/Audio";
import "../audioPlayer/styles.scss";
import { Link, Route, Switch } from "react-router-dom";
import Glitchify from "react-glitchify";

function Home() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          {/* <div style={{ background: "#e65100" }}> */}
            <Glitchify
              fontSize="100pt"
              background="#ffa500"
              color="#e65100"
              font="sans-serif"
            >
              LUX IMPERIUM
            </Glitchify>
          {/* </div> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" style={{ marginTop: "3em", color: "#e65100"}}>
            Skrillex & Damian "Jr. Gong" Marley - Make It Bun Dem (Lux Imperium
            Remix)
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ position: "fixed", bottom: "16px" }}>
          <Audio />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
