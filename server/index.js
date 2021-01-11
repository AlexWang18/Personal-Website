const config = require('./utils/config')

const app = require('./app')
const http = require('http')

const server = http.createServer(app)

server.listen(config.PORT, (err) => {
    if(err) console.log(err)
    console.log(`Server running on ${config.PORT}`)
})