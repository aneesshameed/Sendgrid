const express = require('express');
const app = express();
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SENDGRID_API_KEY');

const sender = {name: 'sender', email: 'sender@sendgrid.com'};
const recipient = {name: 'recipient', email: 'recipient@sendgrid.com'}
router.post('/sendMail', function(req, res, next){
    const msg = {
        from: sender,
        to: recipient,
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