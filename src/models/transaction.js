const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define transaction schema 
let transactionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true
  },
  result: {
    type: Schema.Types.Mixed,
    required: true
  }
}, 
  {
    timestamps: true,
  });

module.exports = mongoose.model('transaction', transactionSchema);