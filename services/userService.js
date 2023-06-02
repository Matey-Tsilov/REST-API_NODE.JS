const bcrypt = require("bcrypt");
const User = require('../models/UserModel')
const jwt = require("../utils/jwt");
const { SECRET } = require("../constants");

const blackList = []

exports.register = async (userData) => {
  const registeredUser = await User.create(userData)
  //use registeredUser not userData to extract the _id proerty!
  return await generateSession(registeredUser)
}
exports.login = async (email, password) => {
const existing = await User.findOne({email})
const isSame = await bcrypt.compare(password, existing?.password)
if (!existing) {
  throw new Error('Incorrect email or password!')
}
if (!isSame) {
  throw new Error('Incorrect email or password!')
}
return await generateSession(existing)
}
//middleware function to validate which user is logged! 
//put the user token in req.user so that when he does logout req, we can put the token in a blacklist!
exports.validateToken = async (token) => {
  if (blackList.includes(token)) {
    console.log('Token is blacklisted!');
    throw new Error()
  }
   const valid = await jwt.verify(token, SECRET)
   return valid
}
exports.logout = (token) => blackList.push(token)

async function generateSession(user) {
    const payload = { _id: user._id, username: user.username, email: user.email };
    const options = {expiresIn: '2d'}
  
    //use promisified version
    const token = await jwt.sign(payload, SECRET, options)
  
  return {
    email: user.email, 
    _id: user._id,
    accessToken: token
  }
} 