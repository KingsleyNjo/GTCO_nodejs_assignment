//crypto module: To handle OpenSSL cryptographic functions and provides cryptographic functionality.


const crypto = require('crypto');
const hash = crypto.createHash('sha256');
hash.update('hello');
console.log(hash.digest('hex'));
