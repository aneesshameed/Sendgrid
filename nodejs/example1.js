const express = require('express');
const app = express();
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SENDGRID_API_KEY');

router.post('/sendMail', function(req, res, next){
    const msg = {
        from: "sender@sendgrid.com",
        to: 'recipient@sendgrid.com',
        subject: 'Sending with SendGrid is Fun',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg).then(function(result){
        res.send(result.statusCode);
        res.end();
    }).catch(function(error){
        res.json(error);
        res.end();
    });
});

module.exports = router;