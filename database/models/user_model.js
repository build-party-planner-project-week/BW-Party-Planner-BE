const db = require('../dbConfig')

module.exports = {
    add,
    findby,
    update
}

function add(user) {
    return db('users').insert(user)
}
function update(user, id) {
    return db('users').where({id: id}).update(user)
    .then(() => {
        return findbyid(id)
    })
}
function findby(filter) {
    return db('users').where(filter).first()
}

function findbyid(id){
    return db('users').where({id: id})
}