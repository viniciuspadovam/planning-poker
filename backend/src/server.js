import { User } from './user.js';
import { io, PORT, server, SOCKET_EVENTS } from './server.config.js';

let users = new User();

io.on(SOCKET_EVENTS.connection, (socket) => {
    console.log(`=== User ${socket.id} connected ===`);

    socket.on(SOCKET_EVENTS.signIn, username => {
        users.add(username, socket.id);
        io.emit(SOCKET_EVENTS.allUsers, users.all);
    });

    socket.on(SOCKET_EVENTS.selectCard, card => {
        users.selectCard(card, socket.id);
        io.emit(SOCKET_EVENTS.allUsers, users.all);
    });

    socket.on(SOCKET_EVENTS.clearCards, () => {
        users.resetCards();
        io.emit(SOCKET_EVENTS.allUsers, users.all);
    });

    socket.on(SOCKET_EVENTS.disconnect, () => {
        console.log(`=== User ${socket.id} disconnected ===`);
        users.remove(socket.id);
        io.emit(SOCKET_EVENTS.allUsers, users.all);
    });
});

server.listen(PORT, () => console.info(`Server is running at http://localhost:${PORT}`));
