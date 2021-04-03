require('dotenv').config()

const config = require('./utils/config')
const path = require('path');

const express = require('express')

const middleware = require('./utils/middleware')

const cors = require('cors')
const spotifyRouter = require('./controllers/spotify')
const generalRouter = require('./controllers/general')

const app = express()
console.log('mode: ', process.env.NODE_ENV)

const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }) 
    .then(succ => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to mongo ', error.message)
    })

app.use(express.json())
app.use(cors())

app.use(middleware.morganLogger)

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../react-ui/build', 'index.html'))
})

app.use(express.static(path.resolve(__dirname, '../react-ui/build')))

app.use('/', generalRouter)
app.use('/api/spotify', spotifyRouter)


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app