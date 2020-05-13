import React from "react";
import { connect } from "react-redux";

import { changeSeat } from "../redux/actions";

class Setup extends React.Component {
  constructor(props) {
    super(props);
  }

  pickSeat = (seat) => {
    let id = document.cookie.substring(3);
    this.props.socket.emit("choose seat", {
      id: id,
      seat: seat,
    });
  };

  render() {
    return (
      <div className="setup">
        <p>Seat={this.props.seat}</p>

        <button onClick={() => this.pickSeat(1)}>Seat 1</button>
        <button onClick={() => this.pickSeat(2)}>Seat 2</button>
        <button onClick={() => this.pickSeat(3)}>Seat 3</button>
        <button onClick={() => this.pickSeat(4)}>Seat 4</button>

        <button>Start Game</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seat: state.seat,
    seats: state.seats,
    socket: state.socket,
  };
};

export default connect(mapStateToProps)(Setup);
