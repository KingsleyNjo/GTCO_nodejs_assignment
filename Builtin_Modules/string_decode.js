//string_decoder module: To decode buffer objects into strings

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const buf = Buffer.from('hello');
console.log(decoder.write(buf)); // prints 'hello'



