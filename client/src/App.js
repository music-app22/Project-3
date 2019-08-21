import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Songs from "./pages/Songs";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./App.css";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/songs" component={Songs} />
          <Route exact path="/songs/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
