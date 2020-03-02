const { findAll } = require('../../../interfaces/transaction')
const mongoose = require('mongoose');

module.exports = async(req, res, next) => {
  let query = {}
  let { limit, offset, userId } = req.query

  // parse limit and offset to number
  limit = Number(limit) || 10;
  offset = Number(offset) || 0;

  // validate if userId exists, add for query in find
  if (userId) query.userId = mongoose.Types.ObjectId(userId);
  const response = await findAll({ limit, offset, query })

  res.send({
    offset: response.offset,
    limit: response.limit,
    next: response.nextCursor,
    items: response.data
  });
}