var express = require('express')
var router = express.Router()

const index = require('../controllers/index');
const dataUser = require('../controllers/dataUser.controller');

// define the home page route
// Router Product
router.get('/',index.homepage);
router.get('/user',index.users);
router.get('/showdata',index.showData);
router.post('/post',index.postdata)
router.delete('/delete/:id',index.deleteData)
router.put('/put/:id', index.putData);


// // Router User
router.get('/showsuser',dataUser.showUser);
router.post('/adduser',dataUser.postUser)
router.delete('/deleteuser/:id',dataUser.deleteUser)
router.put('/updateuser/:id', dataUser.putUser);






module.exports = router;

// https://www.google.com/search?q=difference+between+promise+and+async+await&tbm=isch&source=iu&ictx=1&fir=mftcVgReCLfIRM%253A%252Cvl2vEmsvZnsdGM%252C_&vet=1&usg=AI4_-kRTFG0jU5uZgsdkvoubwkxfQn38zw&sa=X&ved=2ahUKEwistNT3zubjAhWMPY8KHberCCgQ9QEwAHoECAMQAw#imgrc=_&vet=1


// https://stackoverflow.com/questions/46457071/using-mongoose-promises-with-async-await