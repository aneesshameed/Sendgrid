const express = require('express');
const app = express();
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SENDGRID_API_KEY');
sgMail.setSubstitutionWrappers('{{', '}}'); //If your substition wrapper is {{key}} then you don't need this line

const sender = {name: 'sender', email: 'sender@sendgrid.com'};
const recipients = [
    {name: 'recipient1', email: 'recipient_1@sendgrid.com'},
    {name: 'recipient2', email: 'recipient_2@sendgrid.com'},
    {name: 'recipient3', email: 'recipient_3@sendgrid.com'},
    {name: 'recipient4', email: 'recipient_4@sendgrid.com'},
]

router.post('/sendMail', function(req, res, next){
    const msg = {
        from: sender,
        template_id: '330a2725-4296-49c2-bac8-*********',
        personalizations: [
            {
              "to": recipients,
              "substitutions": { 
                "location" : "CodeRoom"
              }
            },
        ]
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