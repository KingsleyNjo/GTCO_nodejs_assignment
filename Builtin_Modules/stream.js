//Stream module: To handle streaming data

const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt');

readStream.on('data',(chunk)=>{
    console.log('..NEW CHUNK');
    console.log(chunk.toString());
})
