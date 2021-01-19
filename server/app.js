require('dotenv').config()

const config = require('./utils/config')
const path = require('path');

const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')


const cors = require('cors')
const spotifyRouter = require('./controllers/spotify')
const generalRouter = require('./controllers/general')

const app = express()
console.log('mode: ', process.env.NODE_ENV)

const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }) //undefined in prod mode
    .then(succ => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to mongo ', error.message)
    })

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(helmet({
    directives: {
        "default-src": helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
        "worker-src": ["'self'"],
        upgradeInsecureRequests: [], }
    }))

app.use(express.static(path.resolve(__dirname, '../react-ui/build')))

app.use('', generalRouter)
app.use('/api/spotify', spotifyRouter)

//need to add unknown endpoint middleware
module.exports = app