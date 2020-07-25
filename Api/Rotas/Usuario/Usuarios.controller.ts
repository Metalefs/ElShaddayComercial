import {Rotas} from '../Routes';
import {Mongo} from '../../MongoDB/Mongo';
import {Collections} from '../../MongoDB/MongoCollections';
import express = require('express');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const app: express.Application = express();

app.get(Rotas.Login, (req : any, res) => {
    
})

app.get(Rotas.Registro, (req,res) =>{
    const msg = {
        to: 'jack-ten@hotmail.com',
        from: 'test@example.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    res.send(msg)
    sgMail.send(msg)
})

module.exports = app;