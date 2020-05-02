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
  }

  render() {
    return (
      <img
        className={this.className}
        src={require("../res/card_images/" + this.name + ".png")}
      />
    );
  }
}

export default Card;
