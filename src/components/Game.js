import React from "react";
import Card from "./Card";

class Game extends React.Component {
  loadCard(card_name) {
    return require("../res/card_images/" + card_name + ".png");
  }

  playCard() {}

  render() {
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
            <div class="top-played">
              <Card name="2D"></Card>
            </div>
            <div class="center-played">
              <div class="left-played">
                <Card name="2D"></Card>
              </div>
              <div class="right-played">
                <Card name="2D"></Card>
              </div>
            </div>
            <div class="player-played">
              <Card name="2D"></Card>
            </div>
          </div>
          <div className="right-hand">
            <Card name="blue_back" rotated={true}></Card>
            <Card name="blue_back" rotated={true}></Card>
            <Card name="blue_back" rotated={true}></Card>
          </div>
        </div>
        <div class="player-hand">
          <Card name="2D"></Card>
          <Card name="5H"></Card>
          <Card name="KC"></Card>
        </div>
      </div>
    );
  }
}

export default Game;
