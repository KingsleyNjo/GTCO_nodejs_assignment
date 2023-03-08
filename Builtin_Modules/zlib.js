//Zlib: To compress or decompress files
//Compress a file (demofile.txt) into a gzip file (mygzipfile.txt.gz):

var zlib = require('zlib');
var fs = require('fs');
var gzip = zlib.createGzip();
var r = fs.createReadStream('./demofile.txt');         //creating a read stream 
var w = fs.createWriteStream('./mygzipfile.txt.gz'); //creating a write stream called mygzipfile.txt.gz
r.pipe(gzip).pipe(w);
