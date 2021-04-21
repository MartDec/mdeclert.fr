class Router {
    constructor (express) {
        this.router = express.Router()
    }

    home () {
        this.router.get('/', async (req, res) => {
            return res.redirect('/hello')
        })
        this.router.get('/hello', async (req, res) => {
            return res.render('base', { template: 'home' })
        })
    }

    resume () {
        this.router.get('/resume', async (req, res) => {
            return res.render('base', { template: 'resume' })
        })
    }

    contact () {
        this.router.get('/contact', async (req, res) => {
            return res.render('base', { template: 'contact' })
        })
    }

    listen () {
        this.home()
        this.resume()
        this.contact()

        return this.router
    }
}

module.exports = Router
