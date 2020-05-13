const express = require("express");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");

// our localhost port
const port = 2157;

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

seats = ["", "", "", ""];

connected_players = {};

// This is what the socket.io syntax is like, we will work this later
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("connect id", (id) => {
    connected_players[id] = socket.id;
    console.log(connected_players);
  });

  socket.on("choose seat", (seatInfo) => {
    console.log(seatInfo.id + " changed seat to " + seatInfo.seat);
    if (
      seats[seatInfo.seat - 1] === socket.id ||
      seats[seatInfo.seat - 1] !== ""
    ) {
      console.log("Seat already taken");
    } else {
      for (i = 0; i < seats.length; i++) {
        if (seats[i] === seatInfo.id) {
          seats[i] = "";
        }
      }
      seats[seatInfo.seat - 1] = seatInfo.id;

      console.log(seats);

      io.sockets.emit("update seats", seats);
    }
  });

  socket.on("move", (moveState) => {
    console.log(moveState);
    io.sockets.emit("move", moveState);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => console.log("Listening on port " + port));
