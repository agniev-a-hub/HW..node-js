const http = require('http');
const PORT = process.env.PORT || 5000
const EventEmitter = require('events');
const emitter = new EventEmitter();
const Router = require('./framework/Router')
const Application = require('./framework/Application')

const app = new Application();
app.listen(PORT, () => {
    console.log(`Server has been launched on ${PORT} port!`)
})

const router = new Router();
router.get('/users', (req, res) => {
    res.end('YOU SENT REQUEST OT USERS')
})
router.get('/todos', (req, res) => {
    res.end('YOU SENT REQUEST OT TODOS')
})

app.addRouter(router)

const server = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-type': 'text/html'
    // })
    // res.end(`Server is working on ${PORT} port`)
    // res.writeHead(200, {
    //     'Content-type': 'application/json'
    // })
    // if (req.url === '/users') {
    //     return res.end(JSON.stringify([
    //         {id:1, name: 'test_name'},
    //         {id:1, name: 'test_name'},
    //         {id:1, name: 'test_name'},
    //         {id:1, name: 'test_name'},
    //         {id:1, name: 'test_name'},
    //         {id:1, name: 'test_name'},
    //     ]))
    // }
    // if (req.url == '/todos'){
    //     return res.end('TODOS')
    // }
    const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
    if (emitted) {
        res.end(req.url)
    }
})