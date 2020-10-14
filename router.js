class Router {
    constructor (express) {
        this.router = express.Router()
    }

    home () {
        this.router.get('/', async (req, res) => {
            return res.render('views/base', {template: 'home'})
        })
    }

    listen () {
        this.home()
        return this.router
    }
}

module.exports = Router