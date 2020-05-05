const port = process.env.PORT || 8000 //for Herokup App
const io = require('socket.io')();

io.on('connection', (socket) => {
	console.log("A new user just connected");
})

io.listen(port);
console.log('listening on port ', port);

