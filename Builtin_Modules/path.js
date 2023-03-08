//Path module: To handle file paths

const path = require('path');
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // prints '/foo/bar/baz/asdf'
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')); // prints '/path/to/wwwroot/static_files/gif/image.gif'
