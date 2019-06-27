const db = require('../dbConfig')

module.exports = {
    findParty,
    findEnter,
    findImage,
    findtodos,
    findshoplist,
    postparty,
    postenter,
    postimg,
    posttodo,
    postshop,
    putparty,
    putenter,
    putimg,
    puttodo,
    putshop,
    deletparty,
    deletenter,
    deletimg,
    delettodo,
    deletshop,
    findPartyAll
}

function findPartyAll(userID, partyID) {
    return db("parties")
        .where({user_id: userID})
        .then(parties => {
           let party = (parties.filter(x => x.id === parseInt(partyID)))[0]
           return db('entertainments')
           .where({party_id: party.id})
           .then(array => {
               let entertainments = array
               return db('images')
               .where({party_id: party.id})
               .then(img => {
                   let images = img
                   return db('shopLists')
                   .where({party_id: party.id})
                   .then(shop => {
                       let shoplist = shop
                       return db('todoLists')
                       .where({party_id: party.id})
                       .then(todos => {
                        return ({
                            ...party,
                            entertainments: entertainments,
                            images: images,
                            shoplist: shoplist,
                            todolist: todos
                        })
                       })
                   })
               })
           })
        })
}
function findParty(userID) {
    return db("parties")
        .where({ user_id: userID })
}

function findEnter(partyID) {
    return db('entertainments')
        .where({ party_id: partyID })
}

function findImage(partyID) {
    return db('images')
        .where({ party_id: partyID })
}

function findtodos(partyID) {
    return db('todoLists')
        .where({ party_id: partyID })
}

function findshoplist(partyID) {
    return db('shopLists')
        .where({ party_id: partyID })
}




function postparty(party) {
    return db('parties')
        .insert(party, 'party_id')
        .then(ids => {
            return db('parties')
            .where({party_id: ids[0]})
            .first()
        })
}
function postenter(enter) {
    return db('entertainments')
        .insert(enter, 'id')
}
function postimg(image) {
    return db('images')
        .insert(image, 'id')
}
function posttodo(todo) {
    return db('todoLists')
        .insert(todo, 'id')
}
function postshop(item) {
    return db('shopLists')
        .insert(item, 'id')
}



function putparty(party, id) {
    return db('parties')
        .where({ id: id })
        .update(party, 'id')
}
function putenter(enter, id) {
    return db('entertainments')
        .where({ id: id })
        .update(enter)
}
function putimg(image, id) {
    return db('images')
        .where({ id: id })
        .update(image)
}
function puttodo(todo, id) {
    return db('todoLists')
        .where({ id: id })
        .update(todo)
}
function putshop(item, id) {
    return db('shopLists')
        .where({ id: id })
        .update(item)
}



function deletparty(id) {
    return db('parties')
        .where({ id: id })
        .del()
}
function deletenter(id) {
    return db('entertainments')
        .where({ id: id })
        .del()
}
function deletimg(id) {
    return db('images')
        .where({ id: id })
        .del()
}
function delettodo(id) {
    return db('todoLists')
        .where({ id: id })
        .del()
}
function deletshop(id) {
    return db('shopLists')
        .where({ id: id })
        .del()
}
