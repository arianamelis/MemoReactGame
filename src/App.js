import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./components/game/game.js";
import LandingPage from "./components/Landingpage/Landingpage.js";

function App() {
    return (
      <Router>
        <div>
          <LandingPage/>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </div>
      </Router>
    )
}

export default App;
