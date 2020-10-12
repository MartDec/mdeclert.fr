const express = require('express')
const path = require('path')
const PORT = 8000

const Router = require('./router')


class Server {
    constructor () {
        this.server = express()
        this.router = new Router(express)
    }

    init () {
        this.server.set('views', __dirname + '/www')
        this.server.use(express.static(path.join(__dirname, 'www')))

        this.server.use('/', this.router.listen())

        this.server.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        })
    }
}

const server = new Server
server.init()