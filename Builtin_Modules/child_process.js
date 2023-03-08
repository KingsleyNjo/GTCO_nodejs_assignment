//child_process module: To run a child process, it provides the ability to run child processes

const { exec } = require('child_process');
exec('ls -l', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

