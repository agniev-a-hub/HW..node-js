const fs = require('fs');
const path = require('path');
const fsPromise = require('fs').promises;

// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3', 'dir4'), {recursive: true});


// fs.mkdir(path.resolve(__dirname, 'dir1'), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log('dir(s) has been created');
//     }
// });


// fs.rmdir(path.resolve(__dirname, 'dir'), (err)=> {
//     if (err) {
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test1.txt'), 'test_content_of_the_file', (err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log('file created')
// })

// fs.rm(path.resolve(__dirname, 'test.txt'), { recursive: true, force: true }, (err)=> {
//     if (err) {
//         throw err;
//     }
// })

// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'add to the end string test', (err) => {
//     if (err){
//         throw err;
//     }
// })

//-------Custom  Promises------->
// const writeFileAsync = async(path, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path, data, (err)=> {
//         if (err){
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// const appendFileAsync = async(path, data) => {
//     return new Promise((resolve, reject) => fs.appendFile(path, data, (err)=> {
//         if (err){
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// const readFileAsync = async(path) => {
//     return new Promise((resolve, reject) => fs.readFile(path, {encoding:'utf-8'} ,(err, data) => {
//         if (err){
//             return reject(err.message)
//         }
//         resolve(data)
//     }))
// }

// const removeFileAsync = async(path) => {
//     return new Promise((resolve, reject) => fs.rm(path,(err) => {
//         if (err){
//             return reject()
//         }
//         console.log('rm worked')
//         resolve()
//     }))
// }


// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'test_beg_data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'345'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'678'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .then(() => removeFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(() => console.log('file deleted'))
//     .catch(err => console.log(err))

    
// const text = process.env.TEXT || '';
// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then (() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then ((data) => data.split(' ').length)
//     .then (count => writeFileAsync(path.resolve(__dirname, 'count.txt'), 'Number of words:'+count))
//     .then (() => removeFileAsync(path.resolve(__dirname, 'text.txt')))
//     .catch(err => console.log(err))
    //------>
    //cross-env TEXT="1 2 3 4 5 6 7 8 8 alex ihor alex ihor" node ./aspects/filesystem.js
    // after sudo npm install --global cross-env