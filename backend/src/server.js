import { User } from './user.js';
import { io, server } from './server.config.js';

const PORT = 8080;
let users = new User();

io.on('connection', (socket) => {
    console.log(`=== User ${socket.id} connected ===`);

    socket.on('sign_in', username => {
        users.add(username, socket.id);
        io.emit('sign_in', users.all);
    });

    socket.on('select_card', card => {
        users.selectCard(card, socket.id);
        io.emit('select_card', users.all);
    });

    socket.on('clear_cards', () => {});

    socket.on('disconnect', () => {
        console.log(`=== User ${socket.id} disconnected ===`);
        users.remove(socket.id);
        io.emit('sign_in', users.all);
    });
});

server.listen(PORT, () => console.info(`Server is running at http://localhost:${PORT}`));
