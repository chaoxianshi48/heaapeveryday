var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next){
	res.json ({
		name: "xiaoming"
	})
});

module.exports = router;