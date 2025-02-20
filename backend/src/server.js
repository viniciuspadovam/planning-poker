const express = require('express');
const http = require("http").createServer();
const io = require("socket.io")(http, {
    cors: {
      origin: "*",
    },
});
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 8080;
let users = [];

io.on('connection', (socket) => {
    console.log(`=== User ${socket.id} connected ===`);

    socket.on('sign_in', (username) => {
        users.push({ id: socket.id, username });
        io.emit('sign_in', users);
    });

    socket.on('select_card', () => {});

    socket.on('clear_cards', () => {});

    socket.on('disconnect', () => {
        console.log(`=== User ${socket.id} disconnected ===`);
        io.emit('sign_in', users.filter(user => user.id === socket.id).pop());
    });
});

http.listen(PORT, () => console.info(`Server is running at http://localhost:${PORT}`));
