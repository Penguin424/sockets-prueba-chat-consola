const { io } = require('../index'); // io es lo que nos proporciona la connecion con el frontend

// el metodo on nos hace saber cuando un cliente esta dentro de la app
io.on('connection', (client) => { //Coneccion con el cliente osea frontend
    console.log('cliente conectado'); // el parametro client es el que logra obtener todo lo que el cliente quiere mandar al servidor

    client.emit('enviarMensaje', { //Envia un mensaje desde el servidor al cliente 
        usuario: 'admin',
        mensaje: 'bienvenido'
    });

    client.on('disconnect', () => { // notifica ciando un cliente cierra la pagina y se desconecta
        console.log('usuario desconectado');

    });

    // Escuchar el cliente
    client.on('enviarMensaje', (req, call) => { // escucha al cliente para obtener un mensaje que fue enviado
        console.log(req.mensaje); // req es lo que se manda al servidor
        /** 
        if (req.usuario) {
            call({
                respuesta: 'todo salio bien' call es un callback  que manda un mensaje al cliente que ejecuto el mensaje
            });
        } else {
            call({
                respuesta: 'Todo salio mal'
            });
        }
        */

        client.broadcast.emit('enviarMensaje', req); // emmit envia el mensaje enviado por un usuario a todos aquellos que esten adentro de la pagina
    })

});