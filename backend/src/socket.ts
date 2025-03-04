import { Server as SocketServer } from 'socket.io';
import { Server as HttpServer } from 'http';

let rooms: {[key: string]: {users: {id: string, username: string}[], votes: []}} = {};

export default (server: HttpServer) => {
    const io = new SocketServer(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on("join-room", (room, username) => {
            console.log(`User "${username}" joined to room "${room}"`);

            socket.join(room);

            if(!rooms[room]) rooms[room] = { users: [], votes: [] };
            rooms[room].users.push({id: socket.id, username});

            io.to(room).emit('update-users', rooms[room].users);
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
            Object.keys(rooms).forEach(room => {
                const index = rooms[room].users.findIndex(user => socket.id == user.id);
                if(index > -1) {
                    rooms[room].users.splice(index, 1);
                    socket.leave(room);
                }
            });
        });
    });

    return io;
};
