const jwt = require('jsonwebtoken')

const jwtKey = 
process.env.JWT_SECRET || 
'add a .env file to root of project with the JWT_SECRET'

module.exports = {
    authenticate
}

function authenticate(req, res, next) {
    const token = req.get('Authorization')

    if(token) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            req.decoded = decoded
            if(req.decoded){
                next()
            }else{
                res.status(404).json({message: "Not allowed entry!"})
            }
        })
    }else {
        return res.status(401).json({
            error: 'No token provided, must be set on auth'
        })
    }
}