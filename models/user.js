const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
const userSchema = new Schema({
  email: {type:String, required: true, unique: true},
  username: {type:String},
  password: {type:String, required: true}
});

userSchema.pre("save", function(next) {
  let user = this;
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  next();
});

// function to validate password
userSchema.methods.validPassword = function(password) {
  const result = bcrypt.compareSync(password, this.password);
  return result;
};

// exporting the User model
module.exports = mongoose.model('User' , userSchema);