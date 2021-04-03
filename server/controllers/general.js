const config = require('../utils/config')

const express = require('express')
const router = express.Router()

router.get('/about', (req, res) => {
    res.send('<h1>Hello World</h1>').end()
})

router.get('/download', (req, res) => {
    const file = `${__dirname}/../AlexWangResume.pdf`
    res.download(file, 'resume', (err) => {
        if(err) console.log(err)
    })
})

const data = require('../resumeData.json')
router.get('/data', async (req, res) => {
    return res.json(data)
})

const Form = require('../models/form') 
router.post('/contact', (req, res) => { // handle form requests and save them into Mongo
    const body = req.body

    const form = {
        ...body
    }
    Form.create(form) 
        .then(savedForm => {
            console.log(`Saved the form from ${form.name}`)
            res.json(savedForm)
        })
        .catch(err => console.log(err))

})

/* probably do not want this public
router.get('/api', (req, res) => {
    Form.find({})
        .then(forms => {
            res.json(forms)
        })
        .catch(err => console.log(err))
}) */

module.exports = router;