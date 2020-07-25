"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("../Routes");
var usuarios_service_1 = require("./usuarios.service");
var express = require("express");
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
var app = express();
app.post(Routes_1.Rotas.Login, function (req, res, next) {
    console.log(req.body);
    usuarios_service_1.service.authenticate(req.body)
        .then(function (user) { return res.json(user); })
        .catch(next);
});
app.post(Routes_1.Rotas.Registro, function (req, res, next) {
    console.log(req.body);
    usuarios_service_1.service.create(req.body)
        .then(function (user) { return res.json(user); })
        .catch(next);
    var msg = {
        to: 'jack-ten@hotmail.com',
        from: 'test@example.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
});
module.exports = app;
