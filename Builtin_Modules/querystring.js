// Querystring module: To handle URL query strings
//Parse a query string into an object, and extract the year property

const querystring = require('querystring');
const params = { foo: 'bar', baz: ['qux', 'quux'], corge: '' };
console.log(querystring.stringify(params)); // prints 'foo=bar&baz=qux&baz=quux&corge='
console.log(querystring.parse('foo=bar&baz=qux&baz=quux&corge=')); // prints { foo: 'bar', baz: ['qux', 'quux'], corge: '' }



