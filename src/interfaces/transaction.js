const { Transaction } = require('../models');

const createTransaction = async(data) => {
  const newTransaction = await Transaction.create(data)
  return newTransaction;
}

const findAll = async({ limit = 10, offset = 0, query = {} }) => {
  let nextCursor;
  // find transactions
  const transactions = await Transaction.find(query).skip(offset).limit(limit);

  // define the new offset
  const newOffset = offset + limit;

  // validate if there are more trabnsactions to read
  const nextCourse = await Transaction.findOne(query).skip(newOffset).limit(1);

  // define the next query for request more transactions
  if (nextCourse) nextCursor = `/transactions?limit=10&offset=${newOffset}`;

  // Return data 
  return {
    data: transactions,
    limit,
    offset,
    nextCursor,
  }
}

module.exports = {
  createTransaction,
  findAll
}