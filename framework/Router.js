module.exports = class Router {
    constructor() {
        this.endpoints = {}
    }
    request(method = 'GET', path, handler1) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path];
        if (endpoint[method]) {
            throw new Error(`[${method}] under URL: [${path}] already exist`)
        }
        endpoint[method] = handler1
        //[path]:[method]
    }

    get(path, handler) {
        this.request('GET', path, handler)
    }
    post(path, handler) {
        this.request('POST', path, handler)
    }
    put(path, handler) {
        this.request('PUT', path, handler)
    }
    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
}