import express from 'express';
import http from 'http';
import socketIo from './socket';

const app = express();
const server = http.createServer(app);

socketIo(server);

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
