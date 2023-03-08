
const domain = require('domain');
const server = require('http').createServer();
const d = domain.create();
d.on('error', (err) => {
  console.error(`domain error: ${err}`);
});
d.run(() => {
  server.on('request', (req, res) => {
    // handle the request
  });
});

