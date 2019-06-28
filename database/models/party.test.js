// const db = require('../dbConfig')

// import {
//     findParty,
//     findEnter,
//     findImage,
//     findtodos,
//     findshoplist,
//     postparty,
//     postenter,
//     postimg,
//     posttodo,
//     postshop,
//     putparty,
//     putenter,
//     putimg,
//     puttodo,
//     putshop,
//     deletparty,
//     deletenter,
//     deletimg,
//     delettodo,
//     deletshop,
//     findPartyAll 
// } from './party_model'

// import {
//     add,
//     findby
// } from './user_model'

// const x = {
//     username: 'triston',
//     password: 'password'
// }


// describe('party tests', async () => {
//     await db('parties').truncate()
//     await db('entertainments').truncate()
//     await db('images').truncate()
//     await db('todoLists').truncate()
//     await db('shopLists').truncate()
//     let y = await add(x)
//     let user = findby(y)
//     console.log(user)
//     describe('findPartyAll', () => {
//         it('should return full object', () => {
//             //was going to add test for this file but there appears to be an issue with jest.
//         })
//     })
// })