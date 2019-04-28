import React, {Component}from "react";
import Title from "../../Title";
import GameCard from "../GameCard.js";
import friends from "./friends.json";
import Wrapper from '../../wrapper.js';

class Game extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    // get all of the items in the friends array
  }

  handleChange = () => {

  }
  // LOGIC 

  render() {
    return (
      <Wrapper>
        <Title>Dont Click Twice !</Title>
        <GameCard
          name={friends[0].name}
          image={friends[0].image}
          id={friends[0].id}
        />
        <GameCard
          name={friends[1].name}
          image={friends[1].image}
          id={friends[1].id}
        />
        <GameCard
          name={friends[2].name}
          image={friends[2].image}
          id={friends[2].id}
        />
      </Wrapper>

  
    );
  }
}
export default Game;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

