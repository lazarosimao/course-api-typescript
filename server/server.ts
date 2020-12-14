import http from 'http';
import Api from './api/api';
import './config/env';

const server = http.createServer(Api);

server.listen(process.env.SERVER_PORT);
server.on('listening', () => console.log(`server esta rodando na porta ${process.env.SERVER_PORT}`));
server.on('error', (err: NodeJS.ErrnoException) => console.log(`Ocorreu um erro ${err}`));