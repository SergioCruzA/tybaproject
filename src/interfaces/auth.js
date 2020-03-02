const { User } = require('../models');
const { generateToken } = require('../utils/jsonwebtoken')

const login = async(username, password) => {
  const regex = new RegExp(`^${username}$`, 'i');
  const queryFind = {
    $or: [{ username: regex }, { email: regex }],
  };
  const user = await User.findOne(queryFind, { _id: 1, username: 1, email: 1, password: 1 });

  if (!user) throw new Error('USERNAME_OR_EMAIL_NOT_EXIST');
  const match = await user.verifyPassword(password);
  
  if (!match) throw new Error('USERNAME_PASSWORD_INVALID');

  const token = await generateToken(user);
  return token;
}

module.exports = {
  login
}