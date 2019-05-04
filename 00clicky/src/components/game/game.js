import React, { Component } from "react";
import friends from "../friends.json";
import GameCard from "../Gamecard.js";
import Wrapper from "../Wrapper.js";

import Footer from "../Footer.js";
import Title from "../Title.js";
import Header from "../Header.js";
import Navbar from "../Navbar.js";
class Game extends Component {
  state = {
    friends: friends,
    score:0,
    topScore:0
  };

  componentDidMount() {
    this.setState({ friends: this.shuffleData(this.state.friends) });
  }
  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };
  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };
  handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      friends: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleIncorrectGuess = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };

  handleItemClick = id => {
    let guessedCorrectly = false;
    console.log('hi');
    const newData = this.state.friends.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });

    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
      
        <Title>Click Game</Title>
        <Wrapper>
        {this.state.friends.map((friend,i) => (
        <GameCard
          key={i}
          id={friend.id}
          image={friend.image}
          handleClick={this.handleItemClick}
          />
          ))}
        </Wrapper>
       <Footer />
      </div>
    );
  }
}



export default Game;
