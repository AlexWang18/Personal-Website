const config = require('../utils/config')

const express = require('express')
const router = express.Router()

router.get('/about', (req, res) => {
    res.send('<h1>Hello World</h1>').end()
})

router.get('/download', (req, res) => {
    res.download('./Alex-Wang-Resume.docx', 'resume', (err) => {
        if(err) console.log(err)
    })
})

const data = require('../resumeData.json')
router.get('/resume', async (req, res) => {
    return res.json(data)
})

const Form = require('../models/form')
router.post('/contact/api', (req, res) => {
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

router.get('/api', (req, res) => {
    Form.find({})
        .then(forms => {
            res.json(forms)
        })
        .catch(err => console.log(err))
})

module.exports = router;