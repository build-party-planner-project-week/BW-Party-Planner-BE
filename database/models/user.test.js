const db = require('../dbConfig')
const {
    add, findby, update
} = require('./user_model')


const user = {
    username: 'triston',
    password: 'password'
}
describe('user_model.js', () => {
    beforeEach(async () => {
        await db('users').truncate()
    })
    describe('add()', () => {
        it('should insert a user to the database', async () => {
            await add(user);
            const users = await db('users')
            expect(users).toHaveLength(1)
        })
        it('should return id', async () => {
            const user_id = await add(user)

            expect(user_id[0]).toBe(1)
        })
    })
    describe('findby()', () => {
        it('should find a user in the database', async () => {
            await add(user)
            const newUser = await findby(user)
            expect(newUser.username).toEqual(user.username)
        })
    })
    describe('update()', () => {
        it('should update a user in the database', async () => {
            await add(user)
            const newUser = await findby(user)
            const updatedUser = await update({ ...newUser, username: "bob" }, newUser.user_id)
            expect(updatedUser.username).toEqual('bob')
        })
        it('should return the user updated', async () => {
            await add(user)
            const newUser = await findby(user)
            const updateUser = await update({ ...newUser, username: 'bob' }, newUser.user_id)
            expect(updateUser).toEqual({ ...newUser, username: 'bob' })
        })
    })
})