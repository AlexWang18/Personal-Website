const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        required: true
    },
    artist: {
        type: Array,
        minlength: 2,
        required: true
    },
    url: {
        type: String,
        minlength: 1,
        required: false
    },
    preview: {
        type: String,
        required: false
    },
    image: { //href
        type: String,
        required: false
    }
}, {collection: 'songs'})

songSchema.set('toJSON', {
    transform: (document, returnedObj) => {
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj._id
        delete returnedObj.__v
    }
})

songSchema.plugin(validator)

module.exports = new mongoose.model('Song', songSchema)