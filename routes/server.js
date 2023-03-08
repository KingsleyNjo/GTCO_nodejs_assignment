const http = require("http");
const getnames = require("./names.js");

const PORT = 8084;

const server = http.createServer((req, res) => {
    getnames(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});

console.log('Server running at http://127.0.0.1:8084/ Click to access');

