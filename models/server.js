import express from 'express';
import cors from 'cors';

import { createServer } from 'http';
import { Server } from 'socket.io';
import { socketController } from '../sockets/controller.js';


class Servers {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.server = createServer(this.app);
        this.io = new Server(this.server);      // Socket.io: Servidor de sockets

        this.paths = {}

        // Middlewares
        this.middlewares();

        // Routes app
        this.routes();

        // Sockets
        this.sockets();

    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Public directory
        this.app.use(express.static('public'));

    }

    routes() {

        // this.app.use(this.paths.users, router);
    }

    sockets() {

        this.io.on('connection', socketController);

    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

export {
    Servers
}