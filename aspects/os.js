// const os = require('os');
// const cluster = require('cluster')

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());

// if (cluster.isMaster) {
    
//     for (let i = 0; i < os.cpus.length -2; i++) {
//         cluster.fork()
//     }
//     cluster.on('exit', (worker) => {
//         console.log(`Worked with ${worker.process.id} is dead`)
//         cluster.fork()
//     })
// } else {
//     console.log(`Worker with pid${process.pid} is launched`)
//     setInterval(() => {
//         console.log(`Worker with pid${process.pid} is still launched`)
//     }, 3000)
// }


// const cpus = os.cpus

// for (let i = 0; i < cpus.length - 2; i++) {
//     const CPUcore = cpus[i];
// }

// console.log(process.id)

// const timeouts = [];
// function errorMsg() {
//   console.error('Something must be wrong with the connection ...');
// }

// cluster.on('fork', (worker) => {
//   timeouts[worker.id] = setTimeout(errorMsg, 2000);
//   console.error('Something must be wrong with the connection ...');
// });
// cluster.on('listening', (worker, address) => {
//   clearTimeout(timeouts[worker.id]);
//   console.error('Something must be wrong with the connection ...');
// });
// cluster.on('exit', (worker, code, signal) => {
//   clearTimeout(timeouts[worker.id]);
//   errorMsg();
// });