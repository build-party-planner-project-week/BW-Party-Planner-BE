const db = require('../dbConfig')

module.exports = {
    add,
    findby
}

function add(user) {
    return db('users').insert(user)
}
function findby(filter) {
    return db('users').where(filter).first()
}