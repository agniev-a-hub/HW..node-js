//readable
//writable
//duplex = readable + writable
// transform = duplex + make changes during reading

// const fs = require('fs');
// const path = require('path');

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// })


// //no callback, could be used {} for various options ctrl + space for help in object
// const stream = fs.createReadStream(path.resolve(__dirname, 'test.stream.txt'), {});
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
// stream.on('end', () => {
//     console.log('end of reading')
// })
// stream.on('open', () => {
//     console.log('start of reading')
// })
// stream.on('error', (e) => {
//     console.log(e)
// })

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.stream.txt'))
// for (let i = 0; i <21; i++) {
//      writableStream.write(i + '\n');
// }
// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')

// const http = require('http');

// http.createServer((req, res) => {
//     //req = readable stream
//     //res = writable stream
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//     // stream.on('data', chunk => res.write(chunk))
//     // stream.on('end', chunk => res.end())
//     stream.pipe(res)
// })


