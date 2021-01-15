require('dotenv').config()

const config = require('./utils/config')
const path = require('path');

const express = require('express')
const morgan = require('morgan')

const cors = require('cors')
const spotifyRouter = require('./controllers/spotify')


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

//front end not working
app.use(express.static(path.resolve(__dirname, '../react-ui/build')))

app.use('/api/spotify', spotifyRouter)

const resume = require('./resumeData.json')
app.get('/resume', async (req, res) => {
    return res.json(resume)
})
/*
app.get("/", (req, res) => {
    let url = path.join(__dirname, '../react-ui/build', 'index.html');
    if (!url.startsWith('/app/')) // since we're on local windows
        url = url.substring(1);
    res.sendFile(url);
}); */
// Error: ENOENT: no such file or directory, stat '/app/react-ui/build/index.html'
app.get('/home', (req, res) => {
    console.log('hello from backend')
    res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'))
})

app.get('/about', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

const Form = require('./models/form')
app.post('/contact/api', (req, res) => {
    const body = req.body

    const form = {
        ...body
    }
    Form.create(form) //could also use the async await syntax but would have to install express async errors lib
        .then(savedForm => {
            console.log(`Saved the form from ${form.name}`)
            res.json(savedForm)
        })
        .catch(err => console.log(err))

})

app.get('/api', (req, res) => {
    Form.find({})
        .then(forms => {
            res.json(forms)
        })
        .catch(err => console.log(err))
})

module.exports = app