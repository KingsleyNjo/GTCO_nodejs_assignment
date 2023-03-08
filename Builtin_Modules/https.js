/* https module : To make Node.js act as an HTTPS server. Create a server that listens on port 8080 of your computer.
When port 8080 get accessed, write "Hello World!" back as a response

*/

const https = require('https');
const options = {
  hostname: 'example.com',
  port: 443,
  path: '/',
  method: 'GET'
};
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
req.on('error', (error) => {
  console.error(error);
});
req.end();




