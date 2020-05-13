import React from "react";
import Card from "./Card";
import Hand from "./Hand";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playedCard: "",
      currentPlayer: 1,
    };
    this.onPlayCard = this.onPlayCard.bind(this);
  }

  loadCard(card_name) {
    return require("../res/card_images/" + card_name + ".png");
  }

  onPlayCard(cardName) {
    this.setState({
      playedCard: cardName,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }

  render() {
    let playedCard;
    if (this.state.playedCard !== "") {
      playedCard = (
        <Card key={this.state.playedCard} name={this.state.playedCard}></Card>
      );
    }
    return (
      <div className="board">
        <div className="top-hand">
          <Card name="blue_back"></Card>
          <Card name="blue_back"></Card>
          <Card name="blue_back"></Card>
        </div>
        <div className="center-row">
          <div className="left-hand">
            <Card name="blue_back" rotated={true}></Card>
            <Card name="blue_back" rotated={true}></Card>
            <Card name="blue_back" rotated={true}></Card>
          </div>
          <div className="play-area">
            <div className="top-played">
              <Card name="2D"></Card>
            </div>
            <div className="center-played">
              <div className="left-played">
                <Card name="2D"></Card>
              </div>
              <div className="right-played">
                <Card name="2D"></Card>
              </div>
            </div>
            <div className="player-played">{playedCard}</div>
          </div>
          <div className="right-hand">
            <Card name="blue_back" rotated={true}></Card>
            <Card name="blue_back" rotated={true}></Card>
            <Card name="blue_back" rotated={true}></Card>
          </div>
        </div>
        <Hand
          cardNames={["2D", "5H", "KC"]}
          onPlayCard={this.onPlayCard}
        ></Hand>
      </div>
    );
  }
}

export default Game;
