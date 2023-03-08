/* http module : To make Node.js act as an HTTP server. Create a server that listens on port 8080 of your computer. 
When port 8080 get accessed, write "Hello World!" back as a response:

*/

const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
});
server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});

