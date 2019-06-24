const express = require('express')
const server = express()
const cors = require('cors')
const helmet = require('helmet')

const userRoute = require('./routes/user_route.js')



server.use(express.json())
server.use(cors())
server.use(helmet())
server.use('/api/', userRoute)


server.get('/', (req, res) => {
    res.send('<h1>Server running!!</h1>')
})



module.exports = server