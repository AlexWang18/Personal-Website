require('dotenv').config()

const PORT = process.env.PORT || 3003
let MONGODB_URI = process.env.MONGODB_URI

if(process.env.NODE_ENV === 'test'){
  MONGODB_URI = process.env.TEST_MONGODB_URI
}

const SPOTIFY_CLIENT = process.env.SPOTIFY_CLIENT
const SPOTIFY_SECRET = process.env.SPOTIFY_SECRET

console.log(process.env.HOME)

module.exports = {
  MONGODB_URI,
  PORT,
  SPOTIFY_CLIENT,
  SPOTIFY_SECRET
}