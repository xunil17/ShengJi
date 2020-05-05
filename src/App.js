import React from "react";
import Game from "./components/Game";
import "./App.css";
import './api.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Game></Game>
      </div>
    );
  }
}

export default App;
