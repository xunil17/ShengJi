import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import { updateSeats } from "./redux/actions";

import socketIOClient from "socket.io-client";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const socket = socketIOClient("http://localhost:2157");

const initialState = {
  seats: ["", "", "", ""],
  seat: -1,
  gameStarted: false,
  gameFinished: false,
  winner: -1,
  socket: socket,
};

const guidGenerator = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};

let id;
if (document.cookie === "") {
  id = guidGenerator();
  document.cookie = "id=" + id;
} else {
  id = document.cookie.substring(3);
}
socket.emit("connect id", id);

const store = createStore(rootReducer, initialState);
store.subscribe(() => console.log(store.getState()));

socket.on("update seats", (seats) => {
  store.dispatch(updateSeats(seats));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
