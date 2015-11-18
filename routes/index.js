var express = require('express');
var router = express.Router();
var CustomMail = require('../public/javascripts/custom-mail');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function (req, res){
	console.log('in the post function...');
	var body = req.body;
	var htmlContent = "Name: "+body.firstname+" "+body.lastname+" <br>\
					   Email: " +body.email+"<br>\
					   URL: "+body.url+"<br><br>\
					   Headline: "+body.headline+"<br><br>\
					   Problem: "+body.problem+"<br>\
					   Solution: "+body.solution+"<br><br>\
					   Feature: "+body.f1+"<br>\
					   Benefit: "+body.b1+"<br><br>\
					   Feature: "+body.f2+"<br>\
					   Benefit: "+body.b2+"<br><br>\
					   Feature: "+body.f3+"<br>\
					   Benefit: "+body.b3+"<br><br>\
					   Feature: "+body.f4+"<br>\
					   Benefit: "+body.b4+"<br><br>\
					   Feature: "+body.f5+"<br>\
					   Benefit: "+body.b5+"<br><br>\
					   Offer: "+body.offer+"<br>";
	//console.log(htmlContent);				   
	var customMail = new CustomMail(htmlContent);
	
	customMail.send();
	
	console.log('in the callback function...');
	res.render('success', { name: body.firstname});
});

module.exports = router;
