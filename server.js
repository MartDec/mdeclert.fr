require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT

const Router = require('./router')


class Server {
    constructor () {
        this.server = express()
        this.router = new Router(express)
    }

    init () {
        this.server.use(bodyParser.urlencoded({ extended: false }))
        this.server.use(bodyParser.json())
        this.server.use(express.static('www'))
        this.server.set('view engine', 'ejs');
        this.server.set('views', __dirname + '/www/views')
        this.server.use(express.static(path.join(__dirname, 'www')))

        this.server.use('/', this.router.listen())

        this.server.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        })
    }
}

const server = new Server
server.init()
