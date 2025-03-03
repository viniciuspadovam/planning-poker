import { Server as SocketServer } from 'socket.io';
import { Server as HttpServer } from 'http';

let rooms: any = {};

export default (server: HttpServer) => {
    const io = new SocketServer(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on('mensagem', (room, msg) => {
            socket.join(room)
            console.log(`${msg} to ${room}`);
            io.to(room).emit('mensagem', msg);
        });

        socket.on("join-room", (room, username) => {
            socket.join(room);
            rooms[room] = { users: {}, votes: {} };
            rooms[room].users[socket.id] = username;
            io.to(room).emit('update-users', rooms[room].users);
            console.log(`User "${username}" joined to room "${room}"`);
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });

    return io;
};
