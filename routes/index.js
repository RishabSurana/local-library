


//mongodb://user1:passo1@ds125578.mlab.com:25578/local_library

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
  //res.render('index', { title: 'Express' });
});

module.exports = router;
