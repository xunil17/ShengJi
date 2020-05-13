import React from "react";
import Card from "./Card";

class Hand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNames: props.cardNames,
      selected: "",
    };
    this.onSelectCard = this.onSelectCard.bind(this);
  }

  onSelectCard(cardName) {
    this.setState((prevState) => {
      return {
        selected: prevState.selected === cardName ? "" : cardName,
      };
    });
  }

  onPlayCard() {
    this.props.onPlayCard(this.state.selected);
    const updatedCardNames = [...this.state.cardNames];
    const removedIndex = updatedCardNames.indexOf(this.state.selected);
    updatedCardNames.splice(removedIndex, 1);
    this.setState({
      selected: "",
      cardNames: updatedCardNames,
    });
  }

  render() {
    const cards = [];
    for (const cardName of this.state.cardNames) {
      cards.push(
        <Card
          key={cardName}
          name={cardName}
          onSelectCard={this.onSelectCard}
          selected={this.state.selected === cardName}
        ></Card>
      );
    }

    return (
      <div className="player-hand">
        {cards}
        <button
          disabled={this.state.selected === ""}
          onClick={() => this.onPlayCard()}
        >
          Play
        </button>
      </div>
    );
  }
}

export default Hand;
