const Products = require('../models/Product.model')


module.exports = {
  homepage: (req, res, next) => {
      res.send('')
  },
  users: (req, res, next)  => {
    res.send('200');
  },

  // Create Data
  postdata: (req, res, next) => {
    const {nameProduct, imgProduct, princeProduct, detailProduct } = req.body;
    try {
      const newData = new Products({"nameProduct": nameProduct, "imgProduct": imgProduct, "princeProduct": princeProduct, "detailProduct": detailProduct})
      newData.save();
    } catch (err) {
      console.log(err)
      
    }
  },

  // Delete Data
  deleteData: (req, res, next) => {
    const id =  req.params.id;
    Products.deleteOne({ _id: id }, (err) => {
      console.log(err);
    });
    res.send('Id:'+ id);
  },


  // Update
  putData: (req, res, next) => {
    let {nameProduct, imgProduct, princeProduct, detailProduct } = req.body;
    let id = req.params.id;
    const productFindOne = Products.updateOne({ _id: id}, {"nameProduct": nameProduct, "imgProduct": imgProduct, "princeProduct": princeProduct, "detailProduct": detailProduct}, (err) => {
      console.log(err)
    });
    res.send('Hello' + id + " - ");
  },
// Show All Data
  showData: (req, res, next) => {
    let product = Products.find({}, null);
    product.exec((err, doc) => {
      if(err) {
        res.send(err);
      }else {
        res.send(doc);
      }
    })
  }

  
}