import * as http from 'http';
import Api from './api/api';

const config = require('./config/env/config');
const server = http.createServer(Api);

server.listen(config.serverPort);
server.on('listening', () => console.log(`server esta rodando na porta ${config.serverPort}`));
server.on('error', (err: NodeJS.ErrnoException) => console.log(`Ocorreu um erro ${err}`));

