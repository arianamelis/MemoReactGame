import React, { Component } from "react";
import friends from "../friends.json";
import GameCard from "../GameCard.js";
import Wrapper from "../Wrapper.js";
import Title from "../Title.js";

class Game extends Component {
  state = {
    friends: []
  };

  componentDidMount = () => {
    // get all of the items in the friends array
  };

  handleChange = () => {};
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
        <GameCard
          name={friends[3].name}
          image={friends[3].image}
          id={friends[3].id}
        />
        <GameCard
          name={friends[4].name}
          image={friends[4].image}
          id={friends[4].id}
        />
        <GameCard
          name={friends[5].name}
          image={friends[5].image}
          id={friends[5].id}
        />
        <GameCard
          name={friends[6].name}
          image={friends[6].image}
          id={friends[6].id}
        />
        <GameCard
          name={friends[7].name}
          image={friends[7].image}
          id={friends[7].id}
        />
        <GameCard
          name={friends[8].name}
          image={friends[8].image}
          id={friends[8].id}
        />
        <GameCard
          name={friends[9].name}
          image={friends[9].image}
          id={friends[9].id}
        />
        <GameCard
          name={friends[10].name}
          image={friends[10].image}
          id={friends[10].id}
        />
              <GameCard
          name={friends[11].name}
          image={friends[11].image}
          id={friends[11].id}
        />
        }
      </Wrapper>
    );
  }
}

export default Game;
