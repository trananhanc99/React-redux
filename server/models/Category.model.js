const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  const categoryProduct = new Schema({
    nameCategory: String,
    hot: Number,
    product:{
        id: mongoose.Schema.Types.ObjectId(),
        nameProduct:  String,
        productHot: String,
        imgProduct:   String,
        princeProduct:   Number,
        detailProduct:   String,
        commentProduct:   Number,
        likeProduct:   Number,
        datePost: { type: Date, default: Date.now },
    }
  })
  module.exports = mongoose.model('Categorys', categoryProduct );