const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../constants");

// exports.register = (userData) =>  
// exports.login = (email, password) => 
// exports.logout = (id) =>  

exports.generateToken = (user) => {
    const payload = { _id: user._id, username: user.username, email: user.email };
    const options = {expiresIn: '2d'}
  
    const tokenPromise = new Promise((resolve, reject) => {
      jwt.sign(payload, SECRET, options, (err, decodedToken) => {
          if (err) {
             return reject(err)
          }
  
          resolve(decodedToken)
      });
  })
  return tokenPromise
} 