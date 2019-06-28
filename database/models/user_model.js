const db = require('../dbConfig')

module.exports = {
    add,
    findby,
    update
}

function add(user) {
    return db('users').insert(user, "user_id")
}
function update(user, id) {
    return db('users').where({ user_id: id }).update(user)
        .then(() => {
            return findbyid(id).first()
        })
}
function findby(filter) {
    return db('users').where(filter).first()
}

function findbyid(id) {
    return db('users').where({ user_id: id })
}