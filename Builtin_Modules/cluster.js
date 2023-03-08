//cluster module: To split a single Node process into multiple processes. 
//It allows for easy creation of child processes that can share server ports.


const cluster = require('cluster');
if (cluster.isMaster) {
  const numWorkers = require('os').cpus().length;
  console.log(`Master cluster setting up ${numWorkers} workers...`);
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker ${cluster.worker.id} is running...`);
}


