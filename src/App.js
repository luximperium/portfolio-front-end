import React from "react";
import AppBar from "./components/appbar";
import Footer from "./components/footer";
import Main from "./components/main";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import MilkyWay from './assets/milkyway.jpg'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e65100",
    },
    secondary: {
      main: "#ffa500",
    },
  },
});

const useStyles = makeStyles({
  main: {
    position: "relative",
    margin: "8px",
  },
  appbar: {
    margin: "8px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <AppBar className={classes.appbar} />
          <Main className={classes.main} />
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
