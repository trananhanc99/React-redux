const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  const Product = new Schema({
    nameProduct:  String,
    imgProduct:   String,
    princeProduct:   Number,
    detailProduct:   String,
    datePost: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('Products', Product );