const morgan = require('morgan')
const helmet = require('helmet')


morgan.token('content', (req, res) => {
    return req.body.name + ' ' + req.body.number
})

const morganLogger = morgan(':method :url :status res[content-length] - :response-time ms :content', { //not sure if this is working o
    skip: (req, res) => req.method !== 'POST' || req.method !== 'PUT' || req.method !== 'DELETE' 
})

const securityHeaders = helmet({
    contentSecurityPolicy: false,
    directives: {
        "default-src": helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
        "worker-src": ["'self'"],
        upgradeInsecureRequests: [],
    }
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (err, req, res, next) => {
    console.log(err.message)

    if (err.name === 'ValidationError') {
        return res.status(400).send(err.message)
    }

    next(err) //delegate to express's handler
}

module.exports = { morganLogger, unknownEndpoint, errorHandler, securityHeaders }