var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hey there i see i have changed u with a resource');
});

router.get('/cool', function(req, res, next){
  res.send("You are so cool!.. jsut kidding :-)");
});

module.exports = router;
