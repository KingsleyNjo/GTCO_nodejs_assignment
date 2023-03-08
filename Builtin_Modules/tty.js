// tty module: Provides classes used by a text terminal



const tty = require('tty');
console.log(tty.isatty(process.stdin)); // prints 'true' if stdin is a TTY, 'false' otherwise
