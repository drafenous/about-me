import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
// routes
const Home = lazy(() => import("./pages/Home/Home"));

// darkTheme
const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#2c3e50",
    }
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={themeDark}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/index" component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
