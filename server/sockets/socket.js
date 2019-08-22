const { io } = require('../index');


io.on('connection', (client) => {
    console.log('cliente conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'bienvenido'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');

    });

    // Escuchar el cliente
    client.on('enviarMensaje', (req, call) => {
        console.log(req.mensaje);
        /** 
        if (req.usuario) {
            call({
                respuesta: 'todo salio bien'
            });
        } else {
            call({
                respuesta: 'Todo salio mal'
            });
        }
        */

        client.broadcast.emit('enviarMensaje', req);
    })

});