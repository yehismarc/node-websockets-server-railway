

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('send-message', (payload, callback) => {
        // console.log(payload);

        const id = '123456789';
        callback(id);

        // broadcast: send to other customers
        socket.broadcast.emit('send-message', payload);

    });
}

export {
    socketController
}