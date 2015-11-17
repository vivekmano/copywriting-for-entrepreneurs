var express = require('express');
var router = express.Router();
var CustomMail = require('../public/javascripts/custom-mail');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function (req, res){
	console.log('in the post function...');
	var body = req.body;
	//available variables from form:
	/*
	headline
	problem
	solution
	f1
	b1
	...
	f5
	b5
	offer
	
	
	*/
	
	
	var htmlContent = "Name: " + body.firstname;
	var customMail = new CustomMail(htmlContent);
	
	customMail.send();
	
	console.log('in the callback function...');
	res.render('success', { name: body.firstname});
});

module.exports = router;
