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

const PORT = 8080;

const SOCKET_EVENTS = {
    connection: 'connection',
    disconnect: 'disconnect',
    signIn: 'sign_in',
    selectCard: 'select_card',
    clearCards: 'clear_cards',
    allUsers: 'all_users'
}

export { server, io, PORT, SOCKET_EVENTS };