const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

// Define user schema 
let userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, 
  {
    timestamps: true,
  });


// hashing a password before create user in db
userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

userSchema.methods.verifyPassword = function verifyPassword(password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

module.exports = mongoose.model('user', userSchema);