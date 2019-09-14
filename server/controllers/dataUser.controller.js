const DataClient = require('../models/DataClient')


module.exports = {
    showUser : (req, res, next) => {
        let product = DataClient.find({}, null);
        product.exec((err, doc) => {
        if(err) {
            res.send(err);
        }else {
            res.send(doc);
        }
        })

    },
    putUser: (req, res, next) => {
        const id = req.params.id;
        const { email, pass, phone } = req.body;
        const productFindOne = DataClient.updateOne({ _id: id}, {"email": email, "pass": pass, "phone": phone}, (err) => {
            console.log(err)
          });

    },
    postUser: (req, res, next) => {
        res.send('a');
        const { email, pass, phone } = req.body;
        try {
            const newDataUser = new DataClient({"email": email, "pass": pass, "phone": phone})
            newDataUser.save();
            console.log(newDataUser)
          } catch (err) {
            console.log(err)
            
        }

    },
    deleteUser: (req, res, next) => {
        const _id = req.params.id
        DataClient.deleteOne({'_id': _id}, (err) => console.log(err));
        console.log(_id);

    }
}