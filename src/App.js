import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriendsIds: [],
    score: 0,
    highScore: 0,
    message: "",
    cardClass: "gameOn"
  };

  shuffleScoreCard = id => {
    let clickedFriendsIds = this.state.clickedFriendsIds;

    if (clickedFriendsIds.includes(id)) {
      this.setState({
        clickedFriendsIds: [],
        message: "Game Over! Click on any of the images to try your luck again!!!!!",
        score: 0,
        cardClass: "gameOver"
      });
      return;
    } else {
      clickedFriendsIds.push(id);

      if (clickedFriendsIds.length === 9) {
        this.setState({
          message: "You Won! Awesome, Click to play again!",
          clickedFriendsIds: []
        });
        return;
      }

      this.setState({
        friends,
        clickedFriendsIds,
        score: clickedFriendsIds.length,
        highScore: clickedFriendsIds.length,
        message: ""
      });

      for (let i = friends.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
      }
    }
  };
  render() {
    const message = this.state.message;

    return (
      <>
      {message ? (<p>{this.state.message}</p>):null}
        <Title score={this.state.score} highScore={this.state.highScore}>
          College Football Pick'em
        </Title>
        <Wrapper>
        {this.state.friends.map(friends => (
          <FriendCard
            shuffleScoreCard={this.shuffleScoreCard}
            id={friends.id}
            key={friends.id}
            image={friends.image}
            name={friends.name}
            className={this.state.cardClass}
          />
        ))}
        </Wrapper>
       
      </>
    );
  }
}

export default App;
