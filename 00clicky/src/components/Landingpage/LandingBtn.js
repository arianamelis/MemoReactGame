
import React, { Component } from 'react';
import "../../components/Landingpage/LandingBtn.css";
import Game from "../../components/game/game.js"
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class LandingBtn extends Component {
  render() {
      return (
          <button className='landing-btn'>
              <div className='landing-btn'>   ><a href='/'>Click to start</a>
                </div>
              
          </button>
      );
  }
}
export default LandingBtn;
