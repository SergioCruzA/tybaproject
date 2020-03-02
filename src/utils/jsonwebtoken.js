const jwt = require('jsonwebtoken')

const secretKey='123456789';

const generateToken = (user) => {
  const { _id: id, username, email } = user;
  const date = new Date();
  const expiresIn = date.setMonth(date.getMonth() + 30);

  const tokenData = {
    id,
    username,
    email
  };

  return jwt.sign(tokenData, secretKey, { expiresIn })
}

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey)
    console.log (decoded)
    return decoded
  } catch (e) {
    console.error(`Token not valid: ${e.message}`)
    return false
  }
}

module.exports = {
  generateToken,
  verifyToken
}