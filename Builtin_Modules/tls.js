
//tls module: To implement TLS and SSL protocols

const fs = require('fs')
const tls = require('tls');
const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
};
const server = tls.createServer(options, (socket) => {
  socket.write('Hello, world!\n');
  socket.setEncoding('utf8');
  socket.on('data', (data) => {
    console.log(`Received: ${data}`);
  });
});
server.listen(8000, () => {
  console.log('Server listening on port 8000');
});
