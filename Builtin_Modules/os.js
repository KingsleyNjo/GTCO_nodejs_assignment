// Os module: Provides information about the operation system

const os = require('os');
console.log(`CPU architecture: ${os.arch()}`);
console.log(`Total memory: ${os.totalmem()} bytes`);
console.log(`Free memory: ${os.freemem()} bytes`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`OS type: ${os.type()}`);
console.log(`OS release: ${os.release()}`);

