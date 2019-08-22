var socket = io(); // socket es la variable que hace coneccion con nuestro backend 

socket.on('enviarMensaje', (req) => { // este metodo recibe o escucha los mensajes que manda el servidor
    console.log(req);
});

socket.on('connect', () => { // este metado escuha cuando hemos sido conectados al backend
    console.log('conectado al servidor');
});

// Escuchar sucesos
socket.on('disconnect', () => { // nos dice cuanto hemos sido desconectados del backend
    console.log('perdimos coneccion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', { // este metodo envia un mensaje por defecto que manda al backend y luego lo procesa
    usuario: 'Pablo Rizo',
    mensaje: 'Hola Mundo'
}, (res) => { // el callback recibe el mensaje que devuelve el callback del servidor para indicar si estuvo bien o no el proceso de enviado de mensaje 
    console.log(`Respuesta del servidor: ${res.respuesta}`);
});