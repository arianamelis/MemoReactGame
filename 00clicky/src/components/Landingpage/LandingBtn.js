
import React, { Component } from 'react';
import "../../components/Landingpage/LandingBtn.css";
// import Game from "../../components/game/game.js"
import { Button } from 'reactstrap';
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class LandingBtn extends Component {
  render() {
      return (
          <div className='landing-btn'>

              <a href="/game">
              <Button outline color="primary">Click Here to start</Button>
              </a>
              
          </div>
      );
  }
}
export default LandingBtn;
