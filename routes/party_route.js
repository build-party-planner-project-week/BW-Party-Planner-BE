const express = require('express')
const db = require('../database/models/party_model')
const { authenticate } = require('../auth/authenticate.js')

const route = express.Router()
route.use(authenticate)


//------------get routes-----------
route.get('/:id/party/:partyid', (req, res) => {
    const { id } = req.params;
    const { partyid } = req.params;
    if (!id || !partyid) {
        res.status(404).json({ message: "Incorrect ID passed. Check if the id you sent me and my robot brothers is correct or there will be utter destruction." })
    } else {
        db.findPartyAll(id, partyid)
            .then(result => {
                res.status(200).json(result)
            }).catch(err => {
                res.status(500).json({ error: "could not recieve data" })
            })
    }
})
route.get('/:id/party', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(404).json({ message: "Incorrect ID passed. Check if the id you sent me and my robot brothers is correct or there will be utter destruction." })
    } else {
        db.findParty(id)
            .then(result => {
                res.send(result)
            }).catch(err => {
                res.status(500).json({ error: "could not recieve data" })
            })
    }
})
route.get('/:id/entertainments', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(404).json({ message: "Incorrect ID passed. Check if the id you sent me and my robot brothers is correct or there will be utter destruction." })
    } else {
        db.findEnter(id)
            .then(result => {
                res.send(result)
            }).catch(err => {
                res.status(500).json({ error: "could not recieve data" })
            })
    }

})
route.get('/:id/images', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(404).json({ message: "Incorrect ID passed. Check if the id you sent me and my robot brothers is correct or there will be utter destruction." })
    } else {
        db.findImage(id)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.status(500).json({ error: "could not recieve data" })
            })
    }

})
route.get('/:id/todolist', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(404).json({ message: "Incorrect ID passed. Check if the id you sent me and my robot brothers is correct or there will be utter destruction." })
    } else {
        db.findtodos(id)
            .then(result => {
                res.send(result)
            }).catch(err => {
                res.status(500).json({ error: "could not recieve data" })
            })
    }
})
route.get('/:id/shoplist', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(404).json({ message: "Incorrect ID passed. Check if the id you sent me and my robot brothers is correct or there will be utter destruction." })
    } else {
        db.findshoplist(id)
            .then(result => {
                res.send(result)
            }).catch(err => {
                res.status(500).json({ error: "could not recieve data" })
            })
    }
})


//---------post routes------------

route.post('/party', (req, res) => {
    const { body } = req;
    if (typeof body != "object") {
        res.status(400).json({ message: "make sure you send the proper object with the required key:value pairs" })
    } else {
        db.postparty(body)
            .then(result => {
                res.status(201).json({ message: "successfully added party", data: result })
            }).catch(err => {
                res.status(500).json({ error: 'failed to add to the db' })
            })
    }
})
route.post('/entertainments', (req, res) => {
    const { body } = req;
    if (typeof body != "object") {
        res.status(400).json({ message: "make sure you send the proper object with the required key:value pairs" })
    } else {
        db.postenter(body)
            .then(results => {
                res.status(201).json({ message: 'successfully add data', id: results })
            })
            .catch(err => {
                res.status(500).json({ error: 'failed to add to the db' })
            })
    }
})
route.post('/images', (req, res) => {
    const { body } = req;
    if (typeof body != "object") {
        res.status(400).json({ message: "make sure you send the proper object with the required key:value pairs" })
    } else {
        db.postimg(body)
            .then(results => {
                res.status(201).json({ message: 'successfully add data', id: results })
            })
            .catch(err => {
                res.status(500).json({ error: 'failed to add to the db' })
            })
    }
})
route.post('/todolist', (req, res) => {
    const { body } = req;
    if (typeof body != "object") {
        res.status(400).json({ message: "make sure you send the proper object with the required key:value pairs" })
    } else {
        db.posttodo(body)
            .then(results => {
                res.status(201).json({ message: 'successfully add data', id: results })
            })
            .catch(err => {
                res.status(500).json({ error: 'failed to add to the db' })
            })
    }
})
route.post('/shoplist', (req, res) => {
    const { body } = req;
    if (typeof body != "object") {
        res.status(400).json({ message: "make sure you send the proper object with the required key:value pairs" })
    } else {
        db.postshop(body)
            .then(results => {
                res.status(201).json({ message: 'successfully add data', id: results })
            })
            .catch(err => {
                res.status(500).json({ error: 'failed to add to the db' })
            })
    }
})


//---------put routes----------
route.put('/:id/party', (req, res) => {
    const { id } = req.params;
    const party = req.body;
    if (typeof party != "object" || !id) {
        res.status(400).json({ message: "make sure you send the proper object with the required key:value pairs as well as the proper id" })
    } else {
        db.putparty(party, id)
            .then(results => {
                res.send({ message: 'Success' })
            }).catch(err => {
                res.status(500).json({ error: 'failed to add to the db' })
            })
    }
})
route.put('/:id/entertainments', (req, res) => {
    const { id } = req.params;
    const enter = req.body;
    if (typeof enter != "object" || !id) {
        res.status(400).json({ message: "make sure you send the proper object with the required key:value pairs as well as the proper id" })
    } else {
        db.putenter(enter, id)
            .then(result => {
                res.send({ message: 'Success' })
            }).catch(err => {
                res.status(500).json({ error: 'failed to add to the db' })
            })
    }
})
route.put('/:id/images', (req, res) => {
    const { id } = req.params;
    const img = req.body;
    if (typeof img != "object" || !id) {
        res.status(400).json({ message: "make sure you send the proper object with the required key:value pairs as well as the proper id" })
    } else {
        db.putimg(img, id)
            .then(result => {
                res.send({ message: 'Success' })
            })
            .catch(err => {
                res.status(500).json({ error: 'failed to add to the db' })
            })
    }
})
route.put('/:id/todolist', (req, res) => {
    const { id } = req.params;
    const todo = req.body;
    if (typeof todo != "object" || !id) {
        res.status(400).json({ message: "make sure you send the proper object with the required key:value pairs as well as the proper id" })
    } else {
        db.puttodo(todo, id)
            .then(result => {
                res.send({ message: 'Success' })
            })
            .catch(err => {
                res.status(500).json({ error: 'failed to add to the db' })
            })
    }
})
route.put('/:id/shoplist', (req, res) => {
    const { id } = req.params;
    const shop = req.body;
    if (typeof shop != "object" || !id) {
        res.status(400).json({ message: "make sure you send the proper object with the required key:value pairs as well as the proper id" })
    } else {
        db.putshop(shop, id)
            .then(result => {
                res.send({ message: 'Success' })
            })
            .catch(err => {
                res.status(500).json({ error: 'failed to add to the db' })
            })
    }
})

//---------delete routes-------------
route.delete('/:id/party', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(404).json({ message: "Incorrect ID passed. Check if the id you sent me and my robot brothers is correct or there will be utter destruction." })
    } else {
        db.deletparty(id)
            .then(result => {
                res.send({ message: 'Successfully deleted from server' })
            }).catch(err => {
                res.status(500).json({ error: 'failed to remove to the db' })
            })
    }
})
route.delete('/:id/entertainments', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(404).json({ message: "Incorrect ID passed. Check if the id you sent me and my robot brothers is correct or there will be utter destruction." })
    } else {
        db.deletenter(id)
            .then(result => {
                res.send({ message: 'Successfully deleted from server' })
            }).catch(err => {
                res.status(500).json({ error: 'failed to remove to the db' })
            })
    }

})
route.delete('/:id/images', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(404).json({ message: "Incorrect ID passed. Check if the id you sent me and my robot brothers is correct or there will be utter destruction." })
    } else {
        db.deletimg(id)
            .then(result => {
                res.send({ message: 'Successfully deleted from server' })
            })
            .catch(err => {
                res.status(500).json({ error: 'failed to remove to the db' })
            })
    }

})
route.delete('/:id/todolist', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(404).json({ message: "Incorrect ID passed. Check if the id you sent me and my robot brothers is correct or there will be utter destruction." })
    } else {
        db.delettodo(id)
            .then(result => {
                res.send({ message: 'Successfully deleted from server' })
            }).catch(err => {
                res.status(500).json({ error: 'failed to remove to the db' })
            })
    }
})
route.delete('/:id/shoplist', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(404).json({ message: "Incorrect ID passed. Check if the id you sent me and my robot brothers is correct or there will be utter destruction." })
    } else {
        db.deletshop(id)
            .then(result => {
                res.send({ message: 'Successfully deleted from server' })
            }).catch(err => {
                res.status(500).json({ error: 'failed to remove to the db' })
            })
    }
})










module.exports = route