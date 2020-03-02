const { login } = require('../../../interfaces/auth')

module.exports = async(req, res, next) => {
  const { username, email, password } = req.body;
  console.log('body: ', req.body)

  const token = await login(username || email, password);

  res.send({ token });
}