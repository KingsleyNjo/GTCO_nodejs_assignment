//dgram module: Provides implementation of UDP datagram sockets

//Make a file ("demo_dgram.js") that listens for messages on port 8080:

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});
server.bind(1234);

