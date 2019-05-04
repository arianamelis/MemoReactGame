import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./components/game/game.js";
import LandingPage from "./components/Landingpage/Landingpage.js";

class App extends Component {
  constructor(props) {
    super(props)
    this.changeRoute = this.changeRoute.bind(this)
    this.state = {
      homeRoute: true
    }
  }
  changeRoute() {
    this.setState({homeRoute: !this.state.homeRoute})
  }
  render() {
    return (
      <Router>
        <div>
          {this.state.homeRoute ?
            <LandingPage changeRoute={this.changeRoute} />
            : <Game changeRoute={this.changeRoute} />
            }
          {/* <LandingPage />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/game" component={Game} />
          </Switch> */}
        </div>
      </Router>
    )
  }
}

export default App;
