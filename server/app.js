const config = require('./utils/config')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(succ => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting ', error.message)
    })

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

// serve static front end files (our react app)

//app.use(express.static(path.resolve(__dirname, '../react-ui/build')))
const Form = require('./models/form')

// router controllers
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