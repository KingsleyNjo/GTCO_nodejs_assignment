//fs module: To handle the file system

const fs = require('fs');

fs.readFile('./docs/blog.txt',(err,data)=>{
    if (err){
        console.log(err);
    }
    console.log(data.toString())
});