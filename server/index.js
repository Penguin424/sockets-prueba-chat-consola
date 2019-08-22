const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, '../public');
let server = http.createServer(app);



app.use(express.static(publicPath));

// COMUNICACION DEL BACKEND 
module.exports.io = socketIO(server);
require('./sockets/socket');






server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor conrriendo en el puerto ${port}`);

})