const express = require('express')
const db = require('../database/models/party_model')
const { authenticate } = require('../auth/authenticate.js')

const route = express.Router()
// route.use(authenticate)


//------------get routes-----------
route.get('/:id/party/all', (req, res) => {
    const { id } = req.params;
    db.findPartyAll(id)
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.send({ error: err })
        })
})
route.get('/:id/party', (req, res) => {
    const { id } = req.params;
    db.findParty(id)
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.send({ error: err })
        })
})
route.get('/:id/entertainments', (req, res) => {
    const { id } = req.params;
    db.findEnter(id)
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.send({ error: err })
        })

})
route.get('/:id/images', (req, res) => {
    const { id } = req.params;
    db.findImage(id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

})
route.get('/:id/todolist', (req, res) => {
    const { id } = req.params;

    db.findtodos(id)
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.status(500).json({ error: err })
        })
})
route.get('/:id/shoplist', (req, res) => {
    const { id } = req.params;
    db.findshoplist(id)
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.status(500).json({ error: err })
        })
})


//---------post routes------------

route.post('/party', (req, res) => {
    const { body } = req;
    db.postparty(body)
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.status(500).json({ error: err })
        })
})
route.post('/entertainments', (req, res) => {
    const { body } = req;
    db.postenter(body)
        .then(results => {
            res.send(results)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})
route.post('/images', (req, res) => {
    const { body } = req;
    db.postimg( body )
        .then(results => {
            res.send(results)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})
route.post('/todolist', (req, res) => {
    const { body } = req;
    db.posttodo( body )
        .then(results => {
            res.send(results)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})
route.post('/shoplist', (req, res) => {
    const { body } = req;
    db.postshop( body )
        .then(results => {
            res.send(results)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})


//---------put routes----------
route.put('/:id/party', (req, res) => {
    const { id } = req.params;
    const party = req.body;
    db.putparty(party, id)
        .then(results => {
            res.send({message: 'Success'})
        }).catch(err => {
            res.status(500).json({ error: err })
        })
})
route.put('/:id/entertainments', (req, res) => {
    const { id } = req.params;
    const enter = req.body;
    db.putenter(enter, id)
        .then(result => {
            res.send({message: 'Success'})
        }).catch(err => {
            res.status(500).json({ error: err })
        })
})
route.put('/:id/images', (req, res) => {
    const { id } = req.params;
    const img = req.body;
    db.putimg(img, id)
        .then(result => {
            res.send({message: 'Success'})
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})
route.put('/:id/todolist', (req, res) => {
    const { id } = req.params;
    const todo = req.body;
    db.puttodo(todo, id)
        .then(result => {
            res.send({message: 'Success'})
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})
route.put('/:id/shoplist', (req, res) => {
    const { id } = req.params;
    const shop = req.body;
    db.putshop(shop, id)
        .then(result => {
            res.send({message: 'Success'})
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})

//---------delete routes-------------
route.delete('/:id/party', (req, res) => {
    const { id } = req.params;
    db.deletparty(id)
        .then(result => {
            res.send({message: 'Success'})
        }).catch(err => {
            res.send({ error: err })
        })
})
route.delete('/:id/entertainments', (req, res) => {
    const { id } = req.params;
    db.deletenter(id)
        .then(result => {
            res.send({message: 'Success'})
        }).catch(err => {
            res.send({ error: err })
        })

})
route.delete('/:id/images', (req, res) => {
    const { id } = req.params;
    db.deletimg(id)
        .then(result => {
            res.send({message: 'Success'})
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

})
route.delete('/:id/todolist', (req, res) => {
    const { id } = req.params;

    db.delettodo(id)
        .then(result => {
            res.send({message: 'Success'})
        }).catch(err => {
            res.status(500).json({ error: err })
        })
})
route.delete('/:id/shoplist', (req, res) => {
    const { id } = req.params;
    db.deletshop(id)
        .then(result => {
            res.send({message: 'Success'})
        }).catch(err => {
            res.status(500).json({ error: err })
        })
})










module.exports = route