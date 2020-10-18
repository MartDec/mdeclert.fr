class Router {
    constructor (express) {
        this.router = express.Router()
    }

    home () {
        this.router.get('/', async (req, res) => {
            return res.redirect('/hello')
        })
        this.router.get('/hello', async (req, res) => {
            return res.render('views/base', {template: 'home'})
        })
    }

    resume () {
        this.router.get('/resume', async (req, res) => {
            return res.render('views/base', {template: 'resume'})
        })
    }

    listen () {
        this.home()
        this.resume()

        return this.router
    }
}

module.exports = Router