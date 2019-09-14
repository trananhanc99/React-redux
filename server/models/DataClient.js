const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  const DataClientSchema = new Schema({
    email:  String,
    pass:   String,
    phone:   Number,
    datePost: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('DataClients', DataClientSchema );