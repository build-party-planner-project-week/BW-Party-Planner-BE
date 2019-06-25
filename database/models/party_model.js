const db = require('../dbConfig')

module.exports = {
findParty,
findEnter,
findImage,
findtodos,
findshoplist
}

function findParty(userID) {
return db("users")
.join("parties", "parties.user_id", "users.id")
.select("parties.id", "parties.guests", "parties.theme", "parties.date", "parties.budget")
.where({user_id: userID})
}

function findEnter(partyID) {
    return db('parties')
    .join('entertainments', "entertainments.party_id", "parties.id")
    .select("*")
    .where({party_id: partyID})
}

function findImage(partyID){
    return db('parties')
    .join('images', "images.party_id", "parties.id")
    .select("*")
    .where({party_id: partyID})
}

function findtodos(partyID){
    return db('parties')
    .join('todoLists', "todoLists.party_id", "parties.id")
    .select("*")
    .where({party_id: partyID})
}

function findshoplist(partyID){
    return db('parties')
    .join("shopLists", "shopLists.party_id", "parties.id")
    .select("*")
    .where({party_id: partyID})
}