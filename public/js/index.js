var socket = io();

socket.on('enviarMensaje', (req) => {
    console.log(req);
});

socket.on('connect', () => {
    console.log('conectado al servidor');
});

// Escuchar sucesos
socket.on('disconnect', () => {
    console.log('perdimos coneccion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Pablo Rizo',
    mensaje: 'Hola Mundo'
}, (res) => {
    console.log(`Respuesta del servidor: ${res.respuesta}`);
});