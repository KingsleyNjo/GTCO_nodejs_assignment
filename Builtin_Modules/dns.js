//dns module: To do DNS lookups and name resolution functions

const dns = require('dns');
dns.lookup('example.com', (err, address, family) => {
  console.log(`address: ${address}, family: ${family}`)})
