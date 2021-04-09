import React, { useEffect, useRef } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import { makeStyles } from "@material-ui/core";
import ParticlesBg from "particles-bg";

const useStyles = makeStyles({
  main: {
    height: "100vh",
    position: "fixed",
    width: "100vw",
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <ParticlesBg type="circle" color="#ffa500" bg={true} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
