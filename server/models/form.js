const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        required: true
    },
    email: {
        type: String,
        minlength: 2,
        required: true
    },
    subject: {
        type: String,
        minlength: 1,
        required: false
    },
    message: {
        type: String,
        required: false
    }
})

formSchema.set('toJSON', {
    transform: (document, returnedObj) => {
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj._id
        delete returnedObj.__v
    }
})

module.exports = mongoose.model('Form', formSchema)