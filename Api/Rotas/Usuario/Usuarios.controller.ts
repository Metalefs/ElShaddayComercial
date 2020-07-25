import {Rotas} from '../Routes';
const userService = require('./usuarios.service');
import express = require('express');
import { Collections } from '../../MongoDB/MongoCollections';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const app: express.Application = express();

app.post(Rotas.Login, (req : any, res, next) => {
    console.log(req.body);
    userService.authenticate(req.body)
        .then((user: Collections.Cliente) => res.json(user))
        .catch(next);
})

app.post(Rotas.Registro, (req,res, next) =>{
    console.log(req.body);
    userService.create(req.body)
        .then((user: Collections.Cliente) => res.json(user))
        .catch(next);
    const msg = {
        to: 'jack-ten@hotmail.com',
        from: 'test@example.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg)
})

module.exports = app;