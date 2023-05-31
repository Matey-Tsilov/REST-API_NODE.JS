const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const { SECRET } = require("../constants");

// exports.register = (userData) =>  
// exports.login = (email, password) => 
// exports.logout = (id) =>  

exports.generateToken = async (user) => {
    const payload = { _id: user._id, username: user.username, email: user.email };
    const options = {expiresIn: '2d'}
  
    //use promisified version
    const tokenPromise = await jwt.sign(payload, SECRET, options)
  
  return tokenPromise
} 