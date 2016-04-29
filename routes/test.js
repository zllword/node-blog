var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nswbmw', function(req, res){
  res.send('hello word!');
});

module.exports = router;
