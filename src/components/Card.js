import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.rotated = props.rotated;
    this.className = "card";
    if (this.rotated) {
      this.className = this.className + " rotated";
      this.name = this.name + "_rotated";
    }

    this.onSelectCard = props.onSelectCard;
  }

  render() {
    return (
      <img
        className={this.className}
        id={this.props.selected ? "selected" : ""}
        src={require("../res/card_images/" + this.name + ".png")}
        onClick={
          this.onSelectCard
            ? () => this.onSelectCard(this.name)
            : function () {}
        }
      />
    );
  }
}

export default Card;
