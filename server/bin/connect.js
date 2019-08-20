require('dotenv').config()
const mongoose = require('mongoose');
const connectDB = mongoose.connect(process.env.MONGODB_URI, { useCreateIndex: true,
useNewUrlParser: true })
	.then(() => console.log('Mongo connected..'))
    .catch((err) => {console.log(err)});
    
module.exports = connectDB;