var express = require('express');
var router = express.Router();


router.use(function (req, res, next) {
	console.log('API request made at:', new Date().toTimeString());

	next();
});

router.get('/', function (req, res) {
	res.json({
		message: 'Hello World'
	});
});

router.get('/date', function (req, res) {
	res.json(new Date());
});


module.exports = router;
