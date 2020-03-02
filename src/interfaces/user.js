const { User } = require('../models');

const _isUsernameAvailable = async(username) => {
}

const _isEmailAvailable = async(email) => {
}

const createUser = async({ username, email, password }) => {
  const user = { username, email, password };
  const newUser = await User.create(user)
  return newUser;
}

module.exports = {
  createUser
}