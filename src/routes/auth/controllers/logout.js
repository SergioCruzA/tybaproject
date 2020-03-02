module.exports = async(req, res, next) => {
  req.logout();

  res.send('LOGOUT');
}