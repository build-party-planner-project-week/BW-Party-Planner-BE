const express = require('express')
const server = express()
const cors = require('cors')
const helmet = require('helmet')

const userRoute = require('./routes/user_route.js')
const partyRoute = require('./routes/party_route.js')



server.use(express.json())
server.use(cors())
server.use(helmet())
server.use('/api/', userRoute)
server.use('/api/', partyRoute)


server.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/opening.html`)
})



module.exports = server