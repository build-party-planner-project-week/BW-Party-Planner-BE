const express = require('express')
const db = require('../database/models/party_model')
const { authenticate } = require('../auth/authenticate.js')

const route = express.Router()
route.use(authenticate)

route.get('/user/:id/party', (req, res) => {
    const { id } = req.params;
    db.findParty(id)
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.send(err)
        })

})

route.get('/user/:id/entertainments', (req, res) => {
    const { id } = req.params;
    db.findEnter(id)
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.send(err)
        })

})
route.get('/user/:id/images', (req, res) => {
    const { id } = req.params;
    db.findImage(id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).json(err)
        })

})
route.get('/user/:id/todolist', (req, res) => {
    const {id} = req.params;

db.findtodos(id)
.then(result => {
    res.send(result)
}).catch(err => {
    res.status(500).json({message: err})
})
})
route.get('/user/:id/todolist', (req, res) => {
    const partyId = req.params.id;


})













module.exports = route