const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
const userSchema = new Schema({
  email: {type:String, required: true},
  username: {type:String},
  password: {type:String, required: true}
});

const User = mongoose.model("User", userSchema);
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  var createHash = function(user) {
    return bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  };
  

  module.exports = User;