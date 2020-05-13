import React from "react";
import { connect } from "react-redux";

import Game from "./components/Game";
import Setup from "./components/Setup";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        {this.props.gameStarted ? <Game></Game> : <Setup></Setup>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameStarted: state.gameStarted,
  };
};

export default connect(mapStateToProps)(App);
