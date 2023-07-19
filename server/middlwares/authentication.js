const User = require('../models/user');
const jwt = require('jsonwebtoken');
const UnauthenticatedError = require('../errors/unauthenticated-error');

const auth = async (req, res, next) => {
    
    //check Header

    const authHeader = req.headers.authorization;

    if(!authHeader || ! authHeader.With('Bearer')){
        throw new UnauthenticatedError('Authentication invalid')
    }

    const token = authHeader.split(' ')[1]

    try {

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        //attach the user to  the request object

        req.user = {userId: payload.userId, name: payload.name}

        next()

    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid')
    }


}

module.exports = auth