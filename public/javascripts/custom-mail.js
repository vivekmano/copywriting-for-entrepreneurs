var nodemailer = require('nodemailer');

var CustomMail = function (content){
	//this.firstname = firstname;
	//this.lastname = lastname;
	//this.emailto = emailto;
	//this.template = template;
	this.content = content;
};

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'vivekmano@gmail.com',
        pass: 'vman0haran'
    }
});

CustomMail.prototype.send = function (){
	var mailOptions = {
        from: 'CopyWriting for Entrepreneurs <vivekmano@gmail.com>', // sender address
        to: 'vivekmano@gmail.com, derek@cakepdx.com', // list of receivers
        subject: 'New Copy Request!', // Subject line
        text: this.content, // plaintext body
        html: this.content // html body
    };
	
    transporter.sendMail(mailOptions, function(error, info){
        if(error)
            return console.log(error);
        console.log('Message sent: ' + info.response);
    });
};

//We export our custom module 
module.exports = CustomMail;