const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 5,
    //add custom msgs: [true, 'Username field is mandatory!']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
});

userSchema.pre("save", async function (next) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(this.password, saltRounds);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
