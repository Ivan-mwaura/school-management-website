const { BadRequestError } = require("../errors");
const {StatusCodes} = require("http-status-codes")
const User = require("../models/user");

const register = async (req, res) => {

    const body = req.body;

    const user = await User.create({...body })

    const token = user.createJWT()
    console.log(token)  
    res.status(StatusCodes.CREATED).json({user: {email:user.email}, token})
    

}

const login = async (req, res) => {
    const {email, password}= req.body;

    if(!email || !password){
        throw new BadRequestError('Please Provide Username and Password')
    }

    const user = await User.findOne({email})

    if(!user){
        throw new BadRequestError('Invalid Email ')
    }

    const isPasswordCorrect = await user.comparePassword(password)

    if(!isPasswordCorrect){
        throw new BadRequestError('Invalid  Password')
    }

  const token = user.createJWT()
  res.status(StatusCodes.OK).json({user: {email:user.email}, token})
}

module.exports = {
    login,
    register
}
