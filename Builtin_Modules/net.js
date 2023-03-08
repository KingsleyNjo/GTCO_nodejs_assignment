// Net: To create servers and clients

const net = require('net');
const server = net.createServer((socket) => {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});
server.listen(1337, '127.0.0.1');

