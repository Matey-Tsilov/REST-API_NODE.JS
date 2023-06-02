const bcrypt = require("bcrypt");
const User = require('../models/UserModel')
const jwt = require("../utils/jwt");
const { SECRET } = require("../constants");

exports.register = async (userData) => {
  const registeredUser = await User.create(userData)
  //use registeredUser not userData to extract the _id proerty!
  return await generateSession(registeredUser)
}
exports.login = async (email, password) => {
const existing = await User.findOne({email})
const isSame = await bcrypt.compare(password, existing?.password)
if (!existing) {
  throw new Error('Such email does not exist!')
}
if (!isSame) {
  throw new Error('Passwords mismatch!')
}
return await generateSession(existing)
}
exports.logout = (id) =>  

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