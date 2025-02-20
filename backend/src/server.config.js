import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = createServer();
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

export { server, io };