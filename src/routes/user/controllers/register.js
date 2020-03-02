const { createUser } = require('../../../interfaces/user')

module.exports = async(req, res, next) => {
  const { username, email, password } = req.body;
  console.log('body: ', { username, email, password });

  const userCreated = await createUser(req.body);
  res.send(userCreated);
}