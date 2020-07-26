"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("../Routes");
var usuarios_service_1 = require("./usuarios.service");
var express = require("express");
var app = express();
app.post(Routes_1.Rotas.Login, function (req, res, next) {
    console.log(req.body);
    usuarios_service_1.service.authenticate(req.body)
        .then(function (user) { return res.json(user); })
        .catch(next);
});
app.post(Routes_1.Rotas.Registro, function (req, res, next) {
    console.log(req.body);
    usuarios_service_1.service.create(req.body.cliente)
        .then(function (user) { return res.json(user); })
        .catch(next);
});
module.exports = app;
