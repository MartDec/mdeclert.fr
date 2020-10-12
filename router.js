class Router {
    constructor (express) {
        this.router = express.Router()
    }

    home () {
        this.router.get('/', async (req, res) => {
            return res.sendFile('views/index.html')
        })
    }

    listen () {
        this.home()
        return this.router
    }
}

module.exports = Router