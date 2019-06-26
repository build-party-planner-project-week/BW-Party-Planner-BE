const express = require('express')
const db = require('../database/models/user_model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')

const route = express.Router()



route.post('/user/register', (req, res) => {
    const user = req.body
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash

    db.add(user)
    .then(user => {
        res.status(201).json({message: "successfully registered"})
    })
    .catch(err => {
        res.status(500).json({message: 'ERROR posting user to the database'})
    })
})

route.post('/user/login', (req, res) => {
    const {username, password} = req.body
    db.findby({username})
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user)
            res.status(200).json({message: "login success - token generated", token: token})
        }else{
            res.status(401).json({message: 'incorrect credentials'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ERROR: 'error logging in'})
    })
})



function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn:'2d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}





module.exports = route